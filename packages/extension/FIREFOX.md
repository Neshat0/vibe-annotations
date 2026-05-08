# Firefox Developer Edition setup

## Load as a temporary add-on

1. Open `about:debugging#/runtime/this-firefox` in Firefox Developer Edition.
2. Click **Load Temporary Add-on…**.
3. Select `packages/extension/manifest.json` from your cloned repository.
4. Pin the extension and open the popup from the toolbar.

## Manifest mode

This fork uses a Firefox-compatible **MV2** manifest with an event background page (`background/background.html`), plus Firefox API shims/fallback injection for enabled sites.

## Permissions and behavior notes

- The extension auto-runs on localhost-style URLs declared in `permissions` URL patterns.
- Non-local sites require permission grant from the popup (`Enable for this site` / `Enable for all sites`).
- `file:///*` access in Firefox requires enabling local file access for the extension in `about:addons` after loading.
- Dynamic content-script registration can vary by Firefox build; extension includes fallback injector for enabled sites.

## Quick test checklist

1. Open a localhost page (for example `http://localhost:3000`).
2. Open popup and toggle Vibe Annotations.
3. Reload the page and confirm overlay hidden/visible state persists.
4. Open Browser Console (`Ctrl+Shift+J`) and verify background/content scripts have no uncaught extension errors.

## Package for private submission (.xpi/.zip)

From the repo root:

```bash
cd packages/extension
rm -f /tmp/vibe-annotations-firefox-private.zip /tmp/vibe-annotations-firefox-private.xpi
zip -r /tmp/vibe-annotations-firefox-private.zip . \
  -x "*.DS_Store" -x "__MACOSX/*" -x "*.git*" -x "web-ext-artifacts/*"
cp /tmp/vibe-annotations-firefox-private.zip /tmp/vibe-annotations-firefox-private.xpi
```

Upload `/tmp/vibe-annotations-firefox-private.xpi` in AMO private/unlisted flow.
