//import '/twitterAPI.js';
//import './blank.js';



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
  var out_stream;
  var yoken;
  var dalink;
  var bigQueryName=[];
  var bigQueryId=[];
  var theQuery= {};
  var theID=0;





  function specificData(){
    console.log(theQuery['League of Legends']);
    console.log(theQuery);

    var gn = document.getElementById('game_name').value;
      console.log(document.getElementById('game_name').value);
      for (var i =  0; i < 50; i++) {
          if(bigQueryName[i]==gn){
            theID = bigQueryId[i];
            page4();
            break;

          }
      };

  }

  document.getElementById('finalButton').onclick=specificData;




















  function unAuth(){

    console.log(yoken);
    var newURL = 'https://api.twitch.tv/kraken/oauth2/revoke?client_id=m7yllxccpzvfrjfmkwrx52hfmqgtgj&token='+yoken;
    //chrome.tabs.create({url: newURL});

    $.ajax({
      method: 'POST',   
      url: newURL,
      headers:{},
      success: function(data){
        console.log("Success! Should be broken token!");
        chrome.storage.sync.remove('authToken');
        console.log(data);
      },
      error: function(data){
        console.log("Error!");
        console.log(data);
      }

    });
  }
  document.getElementById("logOut").onclick=unAuth;







  var userData = (user) =>{
  user
}
  var streamDatas = (streams) =>{
  streams
}
    var dat;
     function getUser (token, success){
       console.log('auth', token);
  $.ajax({
    method: 'GET',
    url: 'https://api.twitch.tv/kraken/',
    headers:{
      'Client-ID': 'm7yllxccpzvfrjfmkwrx52hfmqgtgj',
      'Authorization': 'OAuth '+token
    },

    success: function(data) {
    console.log('Success!')
    if(data.token.valid){
      
    //console.log(eval(data));
    //JSON.parse(data)
    //localStorage.setItem('token', data.id_token);
      fetchUserData(data.token.user_name);
      dat = data;
    
      document.getElementById("authenticated").style.display = "block";
      }
      else{
        document.getElementById('notAunthenticated').style.display="block";

      }
    },
    error: function(data){
      document.getElementById("notAunthenticated").style.display = "block";

    }
  });
 }

 function fetchUserData(username, success) {
    $.ajax({
      method: 'GET',
      url: 'https://api.twitch.tv/kraken/users/' + username,
      headers: {
        'Client-ID': '15vijk38vjlkj9kirhl904phbinisif'
      },
      success: function(data){
        console.log("userdata success");

        console.log(data);
        document.getElementById('username').innerHTML =data.display_name;
        if(data.logo==null){
          document.getElementById("profilePic").src='defaultTwitch.png';
        }
        else{
          document.getElementById("profilePic").src = data.logo;
        }


      }
    });
  };

  /*
    function topGames (success){
      $.ajax({
    method: 'GET',
    url: 'https://api.twitch.tv/kraken/streams?game=${games}',
    headers:{
      'Client-ID': 'm7yllxccpzvfrjfmkwrx52hfmqgtgj',
    },

    success
  });

    }*/



    function makeQuery(){


      $.ajax({
        method: 'GET',
        url: 'https://api.twitch.tv/kraken/games/top?limit=50',
            headers:{
      'Client-ID': 'm7yllxccpzvfrjfmkwrx52hfmqgtgj'
    },
        success: function(data){
          console.log("HERE IS THE QUERY");
          console.log(data.top[0]);

          for (var i = 0; i < 50; i++) {

            bigQueryId.push(data.top[i].game._id);
            bigQueryName.push(data.top[i].game.name);
            
          };
    

        }


      })

    }
    makeQuery();
    console.log("finshed QUERY");
    console.log(bigQueryName);


    //findStream is only....? search or surprise me?
    
    function pickStream(strums){
      
      

     
    if(theID==0){
   var total_streams = 100 /*random streams to search for*/;
   


      
   //now, j = total # of streams w/ at_least<= viewers <=at_most
   
    var r1 = Math.random(); //random # from 0 to 1
    console.log(strums.streams.length);
    var out = Math.floor(Math.random() * (strums.streams.length - 0 + 1)) + 0; 
    // scales it to total # streams <= 500 viewers
    console.log(out);
  
    out_stream= strums.streams[out]; //this is the stream ID to watch
    console.log(out_stream);
   //link to a new page https://twitch.tv/[streamer_name]
   //https://twitch.tv += views[out].name;
  }
  else{

    console.log("NEW");
    var total_streams = 100 /*random streams to search for*/;
   


      
   //now, j = total # of streams w/ at_least<= viewers <=at_most
   
    var r1 = Math.random(); //random # from 0 to 1
    console.log(strums.data.length);
    var out = Math.floor(Math.random() * (strums.data.length - 0 + 1)) + 0; 
    // scales it to total # streams <= 500 viewers
    console.log(out);
  
    out_stream= strums.data[out]; //this is the stream ID to watch
    console.log(out_stream);

  }
  
}












    var fetchStreamsWithGames = (id, success) =>{
  $.ajax({
    method: 'GET',
    url: 'https://api.twitch.tv/helix/streams?game_id='+id,
    headers:{
      'Client-ID': 'm7yllxccpzvfrjfmkwrx52hfmqgtgj',
    },

    success: function(data){

      list_of_streams = data;
      console.log("LIST!");
      console.log(list_of_streams);
      pickStream(list_of_streams);
      console.log(out_stream);
      document.getElementById("streamerName").innerHTML=out_stream.channel.display_name;
      document.getElementById("streamerPic").src=out_stream.channel.logo;
      dalink=(out_stream.channel.url);
    }
  });

 }
 
 
    var list_of_streams;



    function openStrum(){
      console.log(dalink);
      chrome.tabs.create({ url: dalink });
    }
    var fetchStreams = (success) =>{
  $.ajax({
    method: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/?limit=100&offset=300',
    headers:{
      'Client-ID': 'm7yllxccpzvfrjfmkwrx52hfmqgtgj',
    },

    success: function(data){
        list_of_streams = data;
        
        pickStream(list_of_streams);
        console.log(out_stream);
        console.log(out_stream);
        document.getElementById("streamerName").innerHTML=out_stream.channel.display_name;
        document.getElementById("streamerPic").src=out_stream.channel.logo;
        dalink=(out_stream.channel.url);
      },
      error: function(data){
        console.log("Error!");
        console.log(data);
      }

    
  });

  

 }




    var a =0;
    function myFunction()
    {
        a= a +1;
        document.getElementById('alertButton').textContent=a;
        chrome.tabs.create({url: 'http://google.com'});
    }



    function startUp()
    {
      //var newURL = "https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=m7yllxccpzvfrjfmkwrx52hfmqgtgj&redirect_uri=https://diiebinleffonfbhchpfadahbaonjimf.chromiumapp.org/&scope=user_read&scope=user_block_read&scope=user_subscriptions"
        //chrome.tabs.create({url: newURL});
        var token;
      chrome.storage.sync.get('authToken', function (result) {
      token=  result.authToken;
      console.log('authToken', token);
      getUser(token,userData);
      console.log(dat);
      yoken = token;
    });
    }
    startUp();
    function authTwitch(){
      var newURL = "https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=m7yllxccpzvfrjfmkwrx52hfmqgtgj&redirect_uri=https://diiebinleffonfbhchpfadahbaonjimf.chromiumapp.org/&scope=user_read&scope=user_block_read&scope=user_subscriptions"
        chrome.tabs.create({url: newURL});
        
    }
    document.getElementById('authButton').onclick = authTwitch;


    function disableForms(x){
     
     if(x=="d"){
        document.getElementById('smallStreams').checked = false;
      }
      else if(x=="s"){
        document.getElementById('dontCare').checked = false;
      }
      if(document.getElementById('dontCare').checked == false &&document.getElementById('smallStreams').checked == false)
      {  
        document.getElementById("at_most").disabled = false;//!(document.getElementById("at_most").disabled);
        document.getElementById("at_least").disabled = false;//!(document.getElementById("at_least").disabled);
        

          document.getElementById('searchQuestion').style.opacity = 1;
        
      }
      else {

        document.getElementById("at_most").disabled = true;//!(document.getElementById("at_most").disabled);
        document.getElementById("at_least").disabled = true;//!(document.getElementById("at_least").disabled);
        

          document.getElementById('searchQuestion').style.opacity = .5;
      }


      
      

    }

    document.getElementById('dontCare').addEventListener('click',function(){
      disableForms("d");
    });
    document.getElementById('smallStreams').addEventListener('click',function(){
      disableForms("s");
    });



    document.getElementById('alertButton').onclick = myFunction;

    function page2(){
      document.getElementById('userTab').style.display='none';
      document.getElementById('surpriseMeTab').style.display='none';
      document.getElementById('searchTab').style.display = 'block';

      document.getElementById('user').style.backgroundColor="#6441a5";
      document.getElementById('surpriseMe').style.backgroundColor="#6441a5";
      document.getElementById('search').style.backgroundColor = "#4b2494";
    }
    document.getElementById('search').onclick = page2;
    document.getElementById('searchIcon').onclick = page2;

    function page3(){

      document.getElementById("linkMe").onclick= openStrum;
      document.getElementById('userTab').style.display='none';
      document.getElementById('searchTab').style.display='none';
      document.getElementById('surpriseMeTab').style.display = 'block';

      document.getElementById('user').style.backgroundColor="#6441a5";
      document.getElementById('surpriseMe').style.backgroundColor="#4b2494";
      document.getElementById('search').style.backgroundColor = "#6441a5";
      fetchStreams();

    }

    function page4(){
      fetchStreamsWithGames(theID);
      document.getElementById("linkMe").onclick= openStrum;
      document.getElementById('userTab').style.display='none';
      document.getElementById('searchTab').style.display='none';
      document.getElementById('surpriseMeTab').style.display = 'block';

      document.getElementById('user').style.backgroundColor="#6441a5";
      document.getElementById('surpriseMe').style.backgroundColor="#4b2494";
      document.getElementById('search').style.backgroundColor = "#6441a5";
      

    }

    document.getElementById('surpriseMe').onclick = page3;

    function page1(){
      document.getElementById('searchTab').style.display='none';
      document.getElementById('surpriseMeTab').style.display='none';
      document.getElementById('userTab').style.display = 'block';

      document.getElementById('user').style.backgroundColor="#4b2494";
      document.getElementById('surpriseMe').style.backgroundColor="#6441a5";
      document.getElementById('search').style.backgroundColor = "#6441a5";


    }

    document.getElementById('user').onclick = page1;
    document.getElementById('userIcon').onclick = page1;


    //findStream is only....? search or surprise me?
    function findStream(){
      if(document.getElementById("dontCare").checked == false && document.getElementById("smallStreams").checked ==false){
        var at_least = document.getElementById("at_least").value;
        var at_most = document.getElementById("at_most").value;
      }
      else if(document.getElementById("dontCare").checked == true){
        var at_least = 0;
        var at_most = 1000000;
      }
      else{
        var at_least = 0;
        var at_most = 500;

      }

      var at_least = document.getElementById("at_least").value;
        var at_most = document.getElementById("at_most").value;
   
   var total_streams = 10/*total streams ATM*/;
   var j = 0; //tracks # of streams <=500 viewers
   var views = [];

   var viewer_count = 0; //TEMPORARY UNTIL WE ACTUALLY GET IT
   var stream_type ="live"; //Temporary
   var i;


   for( i=0; i<total_streams; i++){
      if(/*stream #i has a */ viewer_count>=at_least 
         && viewer_count<=at_most && stream_type=="live"){
         views.push(id); //stream ID
         j++;
      }
   }

   if(views.size()==0){
      //error msg: nothing was found with these parameters

      //Create a p that says error!
   }
   //now, j = total # of streams w/ at_least<= viewers <=at_most
   else{
    var r1 = new Math.random(); //random # from 0 to 1
   
    var out = j*r1; // scales it to total # streams <= 500 viewers
  
    var out_stream = views[out]; //this is the stream ID to watch
   }
   //link to a new page https://go.twitch.tv/[out_stream]
  }
}

function showIndex() {
       var index_url = "/test.html";
       chrome.tabs.create({
       url: index_url
    });
 }

/* api: 
  GetUsers:
   id -> (user ID)
   login -> (user login)
   display_name
   view_count (int) -> number of followers
   
  GetStreams:
   language -> (language of the stream)
   type -> ("all", "live", or "vodcast")
   id -> (stream ID)
   title -> (stream title)
   viewer_count -> (number of followers) 
  
  */
  




