// service worker
// install (service worker event)
// chrome.runtime.onInstalled (extension event)
// activate (service worker event)
// noinspection JSDeprecatedSymbols




// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.data === "TEST_BUTTON_ID clicked") {
//     sendMessageToActiveTab(sendResponse);

//     return true;

//   }
// });

// async function sendMessageToActiveTab(sendResponse) {
//   try {

//     const [tab] = await chrome.tabs.query({active: true,lastFocusedWindow: true});
//     const response = await chrome.tabs.sendMessage(tab.id, {data: "change"});
//     sendResponse(response);

//   } catch (error) {
//     console.error("Failed to message active tab:", error);
//     sendResponse({ error: error.message });
//   }  
// };


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch(message.data){
    case "TEST_BUTTON_ID clicked":
      sendResponse({success: true, data: "testButtonID received"});
      return true;
    case "resetPurple":
      sendResponse({success: true, data: "resetPurple received"});
      break;
    default:
      console.warn(`unknown message type: ${message.data}`);
  }
});