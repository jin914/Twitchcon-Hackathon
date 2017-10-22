window.onload = function(){
	function twitchAuth(){
		var newURL = "https://www.google.com"
		chrome.tabs.creat({ url: newURL});
	}
	document.getElementById('link').onclick = twitchAuth;
}