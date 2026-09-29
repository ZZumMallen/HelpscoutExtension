chrome.runtime.onStartup.addListener(() => {})
chrome.runtime.onInstalled.addListener(() => {})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if(message.data === "resetPurple"){
    sendResponse({success: true, data: "resetPurple message received"})

  }
});

chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
  var activeTab = tabs[0];
  console.log(activeTab);
})