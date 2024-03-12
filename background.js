chrome.action.onClicked.addListener(async (tab) => {
  await chrome.storage.local.set({ url: tab.url });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: async () => {
      const { url } = await chrome.storage.local.get('url');
      let targetUrl = '';
      if (url.substr(0, 7) != 'http://') {
        targetUrl = 'https://libra.kaist.ac.kr/_Lib_Proxy_Url/' + url;
      } else {
        const urlLen = url.length;
        u = url.substr(7, urlLen);
        targetUrl = 'https://libra.kaist.ac.kr/_Lib_Proxy_Url/' + url;
      }
      document.location = targetUrl;
    },
  });
});
