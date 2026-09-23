//console.log("Debug: Hello from the checkbox");

const resetPurpleButton = document.querySelector("#reset-purple");

if(resetPurpleButton) {
	resetPurpleButton.addEventListener("click", () => {
		chrome.runtime.sendMessage({data: "resetPurple"}, (response) => {
			console.log(response)
		})
	})
}


