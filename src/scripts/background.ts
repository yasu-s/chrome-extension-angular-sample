chrome.tabs.onUpdated.addListener((tabId, _, tab) => {
  if (tab.url && tab.url.includes('https://github.com')) {
    chrome.pageAction.show(tabId);
  }
});
