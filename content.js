chrome.runtime.onInstalled.addListener(()=>{
	console.log("Extension Successfully Installed")
})


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.data === "change") {
		console.log("Content heard the change message");

		const results = document.querySelectorAll('[id^="ex-hs_cos_wrapper_module_"] > p');
		const rows = [...results].map((p) => ({
			id: p.parentElement.id,
			text: p.innerText,
		}));

		downloadCsv(rows);

		sendResponse({ status: `Exported ${rows.length} items` });
	}
});

function csvEscape(value) {
	const str = String(value ?? "");
	return /[",\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
}

function downloadCsv(rows, filename = "helpscout-export.csv") {
	const lines = ["id,text", ...rows.map((row) => `${csvEscape(row.id)},${csvEscape(row.text)}`)];
	const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);

	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
