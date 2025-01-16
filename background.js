chrome.action.onClicked.addListener(async (tab) => {
  chrome.scripting
    .executeScript({
      args: [tab.url],
      target: { tabId: tab.id },
      func: async (url = '') => {
        let targetUrl = '';
        if (url.substring(0, 7) != 'http://') {
          targetUrl = 'https://libra.kaist.ac.kr/_Lib_Proxy_Url/' + url;
        } else {
          const urlLen = url.length;
          u = url.substring(7, urlLen);
          targetUrl = 'https://libra.kaist.ac.kr/_Lib_Proxy_Url/' + url;
        }
        document.location = targetUrl;
      },
    })
    .then(() => {
      console.log('Script executed');
    });
});
