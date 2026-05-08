(function initExtShim() {
  const runtimeApi = globalThis.browser ?? globalThis.chrome;
  if (!runtimeApi) {
    throw new Error('WebExtensions API is unavailable');
  }
  globalThis.ext = runtimeApi;
})();
