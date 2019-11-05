chrome.runtime.onMessage.addListener((request: { type: string; color: string }) => {
  if (request.type !== 'send' || !request.color) {
    return;
  }

  document.body.style.backgroundColor = request.color;
});
