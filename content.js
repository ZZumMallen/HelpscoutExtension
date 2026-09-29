// Runs on Talkdesk and Helpscout. Each rule injects a <style> only while its setting is true.
(function () {
    'use strict';

    const RULES = {
        purpleHeader: {
            host: 'mytalkdesk.com',
            css: `.title-bar-module__container { background-color: #431283 !important; }`,
        },
        hsSidebar: {
            host: 'helpscout.net',
            css: `#hs-app > div > div > aside {
                --sidebar-width: 0px !important;
                --sidebar-label-width: 0px !important;
                width: 0 !important;
                min-width: 0 !important;
                overflow: hidden !important;
            }`,
        },
    };

    function apply(key, enabled) {
        const rule = RULES[key];
        if (!rule || !location.hostname.endsWith(rule.host)) return;
        const id = `csr-tools-${key}`;
        const existing = document.getElementById(id);
        if (enabled && !existing) {
            const style = document.createElement('style');
            style.id = id;
            style.textContent = rule.css;
            document.documentElement.appendChild(style);
        } else if (!enabled && existing) {
            existing.remove();
        }
    }

    chrome.storage.local.get(DEFAULT_SETTINGS, (settings) => {
        for (const key of Object.keys(RULES)) apply(key, settings[key]);
    });

    chrome.storage.onChanged.addListener((changes, area) => {
        if (area !== 'local') return;
        for (const [key, { newValue }] of Object.entries(changes)) apply(key, newValue);
    });
})();
