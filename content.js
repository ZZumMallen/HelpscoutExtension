chrome.runtime.onInstalled.addListener(()=>{
	console.log("Extension Successfully Installed")
})


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.data === "change") {
		console.log("Content heard the change message");

		const results = document.querySelectorAll('[id^="#ex-hs_cos_wrapper_module_"]');

		if (results.length > 0) {
			sendResponse({ status: results.item(0).textContent });
		}
	}
});





/*#ex-hs_cos_wrapper_module_16819384011733_ > p
	[id^="#ex-hs_cos_wrapper_module_"] > p
const statusText = document.getElementById("status-text");
if (statusText) {
	sendResponse({ status: statusText.innerText });
const RE = new RegExp("#ex-hs_cos_wrapper_module_\\d{13,}_\\s>\\sp")*/

