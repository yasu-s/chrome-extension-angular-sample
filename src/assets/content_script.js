
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type !== 'send' || !request.color) {
    return;
  }

  document.body.style.backgroundColor = request.color;
});
