
const FIELDS = [];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

	if (message.data === "change") {
		console.log("Content heard the change message");


		const results = document.querySelectorAll('[id^="ex-hs_cos_wrapper_module_"] > p');
		const rows = [...results].map((p) => ({
			id: p.parentElement.id,
			text: p.innerText,
		}));


		// downloadCsv(rows);
		sendResponse({ status: `Exported ${rows.length} items` });

		for (let i = 0; i < rows.length; i++) {
			switch (i) {
				case 2:
				case 3:
				case 4:
				case 6:
				case 7:
				case 8:
				case 12:
					console.log(`Item: ${i} = ${rows[i].text}`);
					FIELDS.push(i);
					break;
			}

		}
	}
});


// set up local storage and send this array to a bunch of keypair vals



