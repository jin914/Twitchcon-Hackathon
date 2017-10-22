/*
function hello() {
  alert('hello ' + document.location.href);
}

document.getElementById('clickme').addEventListener('click', hello);

function pageSwitch(){
  document.getElementById("test").innerHTML = "huh";
    document.location.href = "surprise.html";

};

document.getElementById("user").addEventListener("click", pageSwitch);

document.getElementById('test_button').onclick = function(){document.getElementById("test").innerHTML = "huh";};

//document.getElementById('butt2').addEventListener('click',);

//document.getElementById('butt3').addEventListener('click',);


(function(){
  document.getElementById("user").onclick = function(){
    document.getElementById("test").innerHTML = "huh";
  }
}());
*/
/*
function myAlert(){
    document.getElementById('alertButton').value = "kappa";
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('alertButton').addEventListener('click', myAlert);
});
*/
 window.onload = function() {

    function myFunction()
    {
      var newURL = "https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=m7yllxccpzvfrjfmkwrx52hfmqgtgj&redirect_uri=https://diiebinleffonfbhchpfadahbaonjimf.chromiumapp.org/&scope=user_read&scope=user_block_read&scope=user_subscriptions"
        chrome.tabs.create({url: newURL});
    }
    document.getElementById('alertButton').onclick = myFunction;
}

function showIndex() {
       var index_url = "/test.html";
       chrome.tabs.create({
       url: index_url
    });
 }

document.getElementById('xd').addEventListener("click", showIndex);
