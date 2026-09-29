importScripts("settings.js");
// Seed defaults on install without overwriting anything already saved.
// Settings flow: popup.js -> chrome.storage.local -> content.js (storage.onChanged).
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(null, (existing) => {
    const missing = {};
    for (const [key, value] of Object.entries(DEFAULT_SETTINGS)) {
      if (!(key in existing)) missing[key] = value;
    }
    if (Object.keys(missing).length) chrome.storage.local.set(missing);
  });
});
