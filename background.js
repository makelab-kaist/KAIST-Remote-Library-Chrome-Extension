chrome.action.onClicked.addListener(async (tab) => {
  chrome.scripting.executeScript({
    args: [tab.url],
    target: { tabId: tab.id },
    func: async (url = '') => {
      if (url.substring(0, 7) === 'http://') {
        const urlLen = url.length;
        url = url.substring(7, urlLen); // strip 'http://'
        document.location = 'https://libra.kaist.ac.kr/_Lib_Proxy_Url/' + url;
      } else {
        document.location = 'https://libra.kaist.ac.kr/_Lib_Proxy_Url/' + url;
      }
    },
  });
});
