//console.log("Debug: Hello from the checkbox");

const TEST_BUTTON_ID = document.getElementById("test-button");

if (TEST_BUTTON_ID) {
	TEST_BUTTON_ID.addEventListener("click", () => {
		//console.log("Debug: Pop sending 'capture'");

		chrome.runtime.sendMessage({data: "TEST_BUTTON_ID clicked"}, (response) => {
			console.log(response);
		})
	});
}

