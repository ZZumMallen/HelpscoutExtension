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

async function sendMessageToActiveTab(message) {
  try {

    const [tab] = await chrome.tabs.query({active: true,lastFocusedWindow: true});
    const response = await chrome.tabs.SendMessage(tab.id, message,(response) => { });

  } catch (error) {

    
  }

  
}
