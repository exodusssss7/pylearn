# Security review: v1.3

Reviewed 10 November 2026. This is a source review and browser test pass, not an independent penetration test or a guarantee of security.

## Findings and fixes

- No matching credentials were found in the current deployable files or 121 unique historical file versions across all 18 commits reachable in the public repository at review time. Checks covered common GitHub, Google, AWS and Slack token patterns, private-key markers and suspicious credential assignments. Pattern scanning cannot detect every possible secret, and cannot inspect deleted/unreachable server-side objects or forks.
- Python output, errors and stored drafts remain text, not executable markup. HTML escaping now also handles quotes and non-string values. Tested HTML/event-handler payloads in output and stored state/drafts did not execute.
- Stored learning state is restricted to expected fields, valid lesson IDs and numeric scores. Input answers are not stored. Code drafts and progress are plain, unencrypted browser storage. Do not put secrets in them. Clearing site storage deletes them. There is no cloud backup or trusted anti-cheat system.
- Removed inline JavaScript event attributes and added a restrictive Content Security Policy. Inline JavaScript, plugins, base-URL changes and form submissions are blocked. Inline styles remain allowed for the existing layout and badge colors. WebAssembly compilation is allowed for Python; JavaScript eval is not allowed by the policy.
- Python workers now use a blob URL so they inherit the page policy. Allowed network destinations are this app's path and its pinned Pyodide CDN directory. Tested outbound requests to a different destination were blocked. This is a useful restriction, not a data-loss-prevention guarantee: allowed services still receive requests, and CSP support depends on the browser.
- Added code/input-size checks, a guard against concurrent executions, and bounded error text. Existing output cap, Stop button and run timeout remain. A Web Worker keeps normal Python execution off the UI thread and has no DOM/localStorage access. It is not a hard memory limit or an untrusted-code security boundary.
- Nunito is now served locally with its SIL Open Font License instead of contacting Google Fonts at page load. The only external runtime service observed in normal Python tests is the version-pinned jsDelivr Pyodide path. There is no analytics, login, backend or app-side upload endpoint.
- Pyodide is pinned to 0.29.0. OSV's npm query returned no matching advisories; Snyk reported no direct vulnerabilities for that package version. Neither result covers all CPython, WebAssembly, browser or transitive-component risks, nor proves the dependency safe. No app npm packages are deployed.
- Existing app code is MIT, Pyodide is MPL-2.0 with its bundled components retaining their own licenses, Nunito is SIL OFL 1.1, and interface audio is Kenney CC0. Original app artwork has no third-party branded art.

## Limits that remain

Run only code you trust. Pyodide deliberately exposes JavaScript/web APIs. The worker shares the site's origin and in-memory Python runtime across runs; resetting the practice-file directory is not a full process reset. A determined program can alter its runtime, use permitted network destinations, falsify educational results, consume memory or attempt browser attacks. Do not paste unknown programs or enter passwords, keys, personal information or private documents. Strong isolation for hostile code would need a separate-origin sandbox and a different execution design.

GitHub Pages supplies HTTPS and HSTS, but this repository does not control HTTP security headers. The CSP is delivered as an HTML meta tag. That cannot set frame-ancestors, an effective Permissions-Policy, X-Content-Type-Options, or cross-origin isolation headers. Clickjacking protection and hard worker resource isolation are therefore not claimed. Pyodide is still downloaded from a third-party CDN; pinning a version reduces accidental updates but does not remove CDN/supply-chain risk. Offline use is not guaranteed.

## References checked

- https://pyodide.org/en/0.29.0/project/about.html
- https://security.snyk.io/package/npm/pyodide/0.29.0
- https://api.osv.dev/v1/query (npm package pyodide, version 0.29.0)
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
- https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
- https://github.com/googlefonts/nunito/blob/main/OFL.txt
- https://opengameart.org/content/interface-sounds
