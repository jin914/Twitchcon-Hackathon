 window.onload = function() {

    function myFunction()
    {
      var newURL = "https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=m7yllxccpzvfrjfmkwrx52hfmqgtgj&redirect_uri=https://diiebinleffonfbhchpfadahbaonjimf.chromiumapp.org/&scope=user_read&scope=user_block_read&scope=user_subscriptions"
        chrome.tabs.create({url: newURL});
    }
    document.getElementById('alertButton').onclick = myFunction;
}
