const switches = document.querySelectorAll("input[data-setting]");

// Load saved settings into the switches when the popup opens.
chrome.storage.local.get(DEFAULT_SETTINGS, (settings) => {
	switches.forEach((el) => {
		el.checked = Boolean(settings[el.dataset.setting]);
	});
});

// Save whenever a switch changes. content.js reacts via storage.onChanged.
switches.forEach((el) => {
	el.addEventListener("change", () => {
		chrome.storage.local.set({ [el.dataset.setting]: el.checked });
	});
});
