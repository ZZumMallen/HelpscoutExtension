chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.data === "change") {
    console.log("Content heard the change message");

    //do something

  }
});
