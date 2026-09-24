chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch(message.data){
    case "TEST_BUTTON_ID clicked":
      sendMessageToActiveTab(sendResponse)
      return true;
    case "resetPurple":
      sendResponse({success: true, data: "resetPurple received"});
      break;
    default:
      console.warn(`unknown message type: ${message.data}`);
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
};