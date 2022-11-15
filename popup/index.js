document.addEventListener('DOMContentLoaded', () => {
	chrome.storage.sync.get(function (items) {
		const count = items.buttonCollectedCount || 0;
		console.log(count);
		console.log(document.getElementById('stat'));
		document.getElementById('stat').innerHTML = count;
	});
});