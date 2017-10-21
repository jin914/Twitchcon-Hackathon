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
    var a =0;
    function myFunction()
    {
        a= a +1;
        document.getElementById('alertButton').textContent=a;
        chrome.tabs.create({url: 'http://google.com'});
    }
    document.getElementById('alertButton').onclick = myFunction;

    function page2(){
      document.getElementById('userTab').style.display='none';
      document.getElementById('surpriseMeTab').style.display='none';
      document.getElementById('searchTab').style.display = 'block';
    }
    document.getElementById('search').onclick = page2;
    document.getElementById('searchIcon').onclick = page2;

    function page3(){
      document.getElementById('userTab').style.display='none';
      document.getElementById('searchTab').style.display='none';
      document.getElementById('surpriseMeTab').style.display = 'block';


    }

    document.getElementById('surpriseMe').onclick = page3;

    function page1(){
      document.getElementById('searchTab').style.display='none';
      document.getElementById('surpriseMeTab').style.display='none';
      document.getElementById('userTab').style.display = 'block';


    }

    document.getElementById('user').onclick = page1;
    document.getElementById('userIcon').onclick = page1;
}

function showIndex() {
       var index_url = "/test.html";
       chrome.tabs.create({
       url: index_url
    });
 }

document.getElementById('xd').addEventListener("click", showIndex);
