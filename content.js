
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.data === "change") {
		console.log("Content heard the change message");

		const results = [...document.querySelectorAll('[id^="ex-hs_cos_wrapper_module_"]')]
			.filter(el => /^ex-hs_cos_wrapper_module_\d{13,}_$/.test(el.id));


		sendResponse({ status: results });

	}
});






