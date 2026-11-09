/* pylearn: runs Python in a Web Worker via Pyodide, off the main thread.
   If code hangs (infinite loop), the main thread kills and respawns this worker. */
const PYODIDE_BASE = "https://cdn.jsdelivr.net/pyodide/v0.29.0/full/";
importScripts(PYODIDE_BASE + "pyodide.js");

let pyodidePromise = null;
function getPyodide() {
  if (!pyodidePromise) {
    pyodidePromise = loadPyodide({ indexURL: PYODIDE_BASE });
  }
  return pyodidePromise;
}

onmessage = async (e) => {
  const { id, code } = e.data;
  try {
    const pyodide = await getPyodide();
    let out = [];
    pyodide.setStdout({ batched: (s) => out.push(s) });
    pyodide.setStderr({ batched: (s) => out.push(s) });
    try {
      const scope = pyodide.toPy({});
      try { await pyodide.runPythonAsync(code, { globals: scope }); }
      finally { scope.destroy(); }
      postMessage({ id, ok: true, out: out.join("\n") });
    } catch (err) {
      // Trim the traceback to the useful Python error line
      const msg = String(err && err.message ? err.message : err);
      const lines = msg.split("\n").filter((l) => l.trim());
      let friendly = lines[lines.length - 1] || "Something went wrong";
      const errLine = lines.find((l) => /Error|Exception/.test(l));
      if (errLine) friendly = errLine.trim();
      postMessage({ id, ok: false, out: out.join("\n"), err: friendly });
    }
  } catch (err) {
    postMessage({ id, ok: false, out: "", err: "Python failed to load. Check your connection and try again." });
  }
};

postMessage({ id: -1, ok: true, out: "worker-ready" });
