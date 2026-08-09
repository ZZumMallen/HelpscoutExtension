//console.log("Debug: Hello from the checkbox");

const testbutton = document.getElementById("test-button");

if (testbutton) {
	testbutton.addEventListener("click", () => {
		//console.log("Debug: Pop sending 'capture'");

		chrome.runtime.sendMessage({ data: "testbutton clicked" }, (response) => {
			console.log(response);
		});
	});
}
