// service worker
// install (service worker event)
// chrome.runtime.onInstalled (extension event)
// activate (service worker event)

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.data === "testbutton clicked") {
    sendMessageToActiveTab(sendResponse);
    return true;
  }
});

async function sendMessageToActiveTab(sendResponse) {
  try {

    const [tab] = await chrome.tabs.query({active: true,lastFocusedWindow: true});
    const response = await chrome.tabs.sendMessage(tab.id, {data: "change"});
    sendResponse(response);

  } catch (error) {
    console.error("Failed to message active tab:", error);
    sendResponse({ error: error.message });
  }

  
}
