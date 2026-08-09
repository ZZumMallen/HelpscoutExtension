chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.data === "change") {
		console.log("Content heard the change message");

		const statusText = document.getElementById("status-text");
		if (statusText) {
			statusText.style.color = "red";
		}

		sendResponse({ success: true });
	}
});
