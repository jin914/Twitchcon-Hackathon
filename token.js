/* 
CODE ON RETRIEVING TOKENS FROM URL DERIVED FROM:
https://github.com/ygu93/Twitch-Anywhere
*/

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  let url = tab.url;
  if(url.includes('https://diiebinleffonfbhchpfadahbaonjimf.chromiumapp.org/#access_token=')){
    chrome.storage.sync.set({'authToken': url.match(/access_token=([^&]*)/)[1]});
    chrome.tabs.remove(tabId);
  }
});