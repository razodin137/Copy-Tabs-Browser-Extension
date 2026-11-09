# Copy All Tabs

A minimal Chrome extension: open the popup, and every tab in the current
window is on your clipboard as a title + URL pair, separated by a blank line:

```
Docs — Chrome Extensions
https://developer.chrome.com/docs/extensions

GitHub
https://github.com
```

The popup also shows the same text in a textarea, so if the clipboard is
blocked you can just `Ctrl+C` from there.

## Install

1. Open `chrome://extensions`.
2. Turn on **Developer mode**.
3. Click **Load unpacked** and pick this folder.
4. Pin the extension. Click it, done.

## Notes

- Uses `chrome.tabs.query({ currentWindow: true })`, the official API, so no
  bookmark round-trip and no relaunching Chrome.
- The list follows tab-strip order and includes every tab, including
  `chrome://` and extension pages.
- Only the `tabs` permission is requested.
