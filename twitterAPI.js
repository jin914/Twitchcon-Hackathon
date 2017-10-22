 export var getUsers = (token, success) =>{
 	$.ajax({
 		method: 'GET',
 		url: 'https://api.twitch.tv/kraken/users',
 		headers:{
 			'Client-ID': 'm7yllxccpzvfrjfmkwrx52hfmqgtgj',
 			'Authorization': 'OAuth ${token}'
 		},

 		success
 	});
 }

 export var fetchStreams = (games, success) =>{
 	$.ajax({
 		method: 'GET',
 		url: 'https://api.twitch.tv/kraken/streams?game=${games}',
 		headers:{
 			'Client-ID': 'm7yllxccpzvfrjfmkwrx52hfmqgtgj',
 		},

 		success
 	});

 }


 export var fetchUserData = (username, success) =>{
 	$.ajax({
 		method: 'GET',
 		url: 'https://api.twitch.tv/kraken/users/${username}',
 		headers:{
 			'Client-ID': 'm7yllxccpzvfrjfmkwrx52hfmqgtgj',
 		},

 		success
 	});
 }



 window.onload = function() {

    function myFunction()
    {
      var newURL = "https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=m7yllxccpzvfrjfmkwrx52hfmqgtgj&redirect_uri=https://diiebinleffonfbhchpfadahbaonjimf.chromiumapp.org/&scope=user_read&scope=user_block_read&scope=user_subscriptions"
        chrome.tabs.create({url: newURL});
    }
    document.getElementById('alertButton').onclick = myFunction;
}
