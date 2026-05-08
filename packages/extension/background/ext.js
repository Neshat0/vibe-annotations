export const ext = globalThis.browser ?? globalThis.chrome;

export function supportsDynamicContentScriptRegistration() {
  return !!(ext?.scripting?.registerContentScripts && ext?.scripting?.unregisterContentScripts);
}
