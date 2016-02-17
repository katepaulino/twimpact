var userZip = document.getElementById("inputZip");
var newZip = 0;

var findRep = document.getElementById("findRep");
findRep.addEventListener("submit",function(event){
  event.preventDefault();
  console.log(newZip);
  zip = event.target.inputZip.value;
  getTwitterHandle();
  console.log(newZip);
});

function getTwitterHandle() {
  var xhr2 = new XMLHttpRequest();
  xhr2.open("GET", "https://congress.api.sunlightfoundation.com/legislators/locate?zip=" + zip + "&apikey=3d94638bbedb48019c96ba93a90eea7b",false);
  xhr2.send();
  console.log(xhr2.status);
  console.log(xhr2.statusText);
  var xhr2Parse = JSON.parse(xhr2.responseText);
  var repTwitter = "@" + xhr2Parse.results[2].twitter_id
  document.getElementById("yourRepTwitter").innerHTML = "Your representative's Twitter handle is " + repTwitter;
}

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.govtrack.us/api/v2/person/400325",false);
// xhr.send();
// console.log(xhr.status);
// console.log(xhr.statusText);
//
// var xhrParse = JSON.parse(xhr.responseText);
// var repTwitter = "@" + xhrParse.twitterid;
// document.getElementById("yourRepTwitter").innerHTML = "Your representative's Twitter handle is " + repTwitter;
