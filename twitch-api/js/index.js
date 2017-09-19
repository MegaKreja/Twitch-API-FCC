var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "playBATTLEGROUNDS", "habathcx", "RobotCaleb", "noobs2ninjas", "BrownMan"];
var streamList = document.getElementById("streamList");
var all = document.getElementById("all");
var online = document.getElementById("online");
var offline = document.getElementById("offline");
$(document).ready(function() {
   $("#all").trigger('click');
});

all.addEventListener("click", function(){
  onlineStream();
  offlineStream();
});

online.addEventListener("click", function() {
   onlineStream();
});

offline.addEventListener("click", function() {  
   offlineStream();
});

function onlineStream() {
  streamList.innerHTML = "";
 streamers.forEach(function(item) {
   $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + item, function(data){
     if(data.stream !== null) {
     streamList.innerHTML += "<a target=_blank href=" + JSON.stringify(data.stream.channel.url) + "><li><img src=" + JSON.stringify(data.stream.channel.logo) + "><p>" + JSON.stringify(data.stream.channel.display_name) + " - " + JSON.stringify(data.stream.channel.status) + " ONLINE</p></li></a>";
    }
   });
  });
}

function offlineStream() {
  streamers.forEach(function(item) {
   streamList.innerHTML = "";
   $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + item, function(data){
     if(data.stream === null) {
       $.getJSON("https://wind-bow.glitch.me/twitch-api/channels/" + item, function(secondData){
         console.log(secondData);
         streamList.innerHTML += "<a target=_blank href=" + JSON.stringify(secondData.url) + "><li><img src=" + JSON.stringify(secondData.logo) + "><p>" + JSON.stringify(secondData.display_name) + " OFFLINE</p></li></a>";
       });
    }
   });
  });
}