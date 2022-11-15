// Set interval to automatically collect twitch channel coin

function updateStats() {
	chrome.storage.sync.get(function (items) {
		const count = items.buttonCollectedCount;
		if (!count) {
			chrome.storage.sync.set({ buttonCollectedCount: 1 }, () => {});
		} else {
			chrome.storage.sync.set({ buttonCollectedCount: count + 1 }, () => {});
		}
	});
}

function ifState(callback) {
	chrome.storage.sync.get(function (items) {
		if (items.state === undefined || items.state === true) {
			chrome.storage.sync.set({ state: true }, () => {
				callback();
			});
		}
	});
}

function collect() {
	const d = document.getElementsByClassName('fERWGf');
	if (d) {
		const b = d[0];
		if (b) {
			updateStats();
			b.click();
		}
	} else {
		console.error("twitch-auto-coin : Button 'fERWGf' not found.");
	}
}

setInterval(() => {
	collect();
}, 5000);

document.addEventListener('DOMContentLoaded', () => {
	collect();
});