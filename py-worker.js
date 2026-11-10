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
  const { id, code, rule, inputs = [] } = e.data || {};
  if(!Number.isSafeInteger(id)||typeof code!=='string'||code.length>100000||!Array.isArray(inputs)||inputs.length>1000){postMessage({id,ok:false,out:'',err:'Invalid or oversized practice program.'});return}
  try {
    const pyodide = await getPyodide();
    let inputIndex = 0;
    pyodide.setStdin({stdin:()=>inputIndex<inputs.length?String(inputs[inputIndex++]):null});
    let out = [];
    let chars = 0;
    const collect = s => { chars += s.length; if (chars < 16000) out.push(s); else if (out[out.length - 1] !== "[Output limit reached]") out.push("[Output limit reached]"); };
    pyodide.setStdout({ batched: collect });
    pyodide.setStderr({ batched: collect });
    try {
      // Real files, but a fresh practice directory on every run. No device filesystem access.
      await pyodide.runPythonAsync(`import os as _os, shutil as _shutil
_os.chdir("/home/pyodide")
_shutil.rmtree("/home/pyodide/pylearn-work", ignore_errors=True)
_os.mkdir("/home/pyodide/pylearn-work")
_os.chdir("/home/pyodide/pylearn-work")`);
      const scope = pyodide.toPy({});
      let concept = null;
      if (rule) {
        const validator = await fetch("https://exodusssss7.github.io/pylearn/concept-check.py?v=1.3").then(r => { if (!r.ok) throw Error("Checker unavailable"); return r.text(); });
        scope.set("_source", code); scope.set("_rule", rule);
        await pyodide.runPythonAsync(validator, { globals: scope });
        const feedback = await pyodide.runPythonAsync("check_concept(_source, _rule)", { globals: scope });
        concept = { ok: !feedback, feedback };
      }
      try { await pyodide.runPythonAsync(code, { globals: scope }); }
      finally { scope.destroy(); }
      postMessage({ id, ok: true, out: out.join("\n"), concept });
    } catch (err) {
      // Trim the traceback to the useful Python error line
      const msg = String(err && err.message ? err.message : err).slice(0,16000);
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
