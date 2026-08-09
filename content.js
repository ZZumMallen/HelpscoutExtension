
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.data === "change") {
		console.log("Content heard the change message");

		const results = document.querySelector("#ex-hs_cos_wrapper_module_16819385306868_ > p")


		sendResponse({ status: results.innerHTML });

	}
});






