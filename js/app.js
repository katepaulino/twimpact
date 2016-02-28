var divEls = ['#click', '#div_1', '#div_2', '#div_3', '#div_4', '#div_5'];
var ahrefEl;

function hideAllExcept(divId) {
  for (el in divEls) {
    if (divEls[el] === divId) {
      $(divEls[el]).show();
    } else {
      $(divEls[el]).hide();
    }
  }
}

function activateSelectorButtons() {
  $('#reach').click(function(){
    hideAllExcept('#div_1');
  });
  $('#globalFood').click(function(){
    hideAllExcept('#div_2');
  });
  $('#transparency').click(function(){
    hideAllExcept('#div_3');
  });
  $('#reform').click(function(){
    hideAllExcept('#div_4');
  });
  $('#core').click(function(){
    hideAllExcept('#div_5');
  });
}

window.onload = function() {
  hideAllExcept('#click');
  activateSelectorButtons();

  //Reach Every Mother and Child Act
  updateTweetLink('#tweet-div_1', "@twitterrecipient", ", plz support the Reach Every Mother and Child Act! http://bit.ly/21vrpbN");
  updateFacebookLink('#fb-div_1', 'https://www.congress.gov/bill/114th-congress/senate-bill/1911');

  //Global Food Security Act
  updateTweetLink('#tweet-div_2', "@twitterrecipient", ", plz support the Global Food Security Act! http://bit.ly/1SSyNfP");
  updateFacebookLink('#fb-div_2', 'https://www.congress.gov/bill/114th-congress/house-bill/1567');

  //Foreign Aid Transparency and Accountability Act
  updateTweetLink('#tweet-div_3', "@twitterrecipient", ", please support the Foreign Aid Transparency Act! http://bit.ly/fataabp");
  updateFacebookLink('#fb-div_3', 'https://www.congress.gov/bill/114th-congress/senate-bill/2184');

  //Food For Peace Reform Act
  updateTweetLink('#tweet-div_4', "@twitterrecipient", ", plz support the Food For Peace Reform Act! http://bit.ly/foodbp");
  updateFacebookLink('#fb-div_4', 'https://www.congress.gov/bill/114th-congress/senate-bill/525');

  //M-Core Act
  updateTweetLink('#tweet-div_5', "@twitterrecipient", ", please the M-Core Act! http://bit.ly/1TaU9ph");
  updateFacebookLink('#fb-div_5', 'https://www.congress.gov/bill/114th-congress/senate-bill/1605');

  document.addEventListener("click", function() {
    if (event.target.className === "hvr-pulse-grow" && event.target.id.indexOf('tweet') >= 0) {
      zip = prompt("Hey, what's your zip code?");
      yourRepArray = [];
      repName = [];
      repTwitterHandle = [];
      listYourReps();
      aEl = event.target.parentNode.href;
      var newAEl = aEl.replace("@twitterrecipient", repTwitterHandle.join(" "));
      event.target.parentNode.href = newAEl;
      console.log(event);
      console.log(event.target.parentNode.href);
    }
  });
}


function updateTweetLink(iconId, recipient, message) {
  var fullMessage = "http://twitter.com/home?status=" + "" + recipient + message;
  $(iconId).wrap("<a href=" + "'" + fullMessage + "'></a>'");
}

function updateFacebookLink(iconId, link) {
  var fullLink = "http://www.facebook.com/sharer.php?src=sp&u=" + link;
  $(iconId).wrap("<a href=" + fullLink + "></a>")
}

var zip = 0;
var xhrParse = 0;
var repName = [];
var repTitle = [];
var repTwitterHandle = [];
var yourRepArray = [];
var tweetTheseReps = [];

function listYourReps () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://congress.api.sunlightfoundation.com/legislators/locate?zip=" + zip + "&apikey=3d94638bbedb48019c96ba93a90eea7b",false);
  xhr.send();
  console.log(xhr.status);
  console.log(xhr.statusText);
  xhrParse = JSON.parse(xhr.responseText);
  for (var i = 0; i < xhrParse.results.length; i++) {
    repName.push(xhrParse.results[i].first_name + " " + xhrParse.results[i].last_name);
    repTitle.push(xhrParse.results[i].title);
    repTwitterHandle.push("@" + xhrParse.results[i].twitter_id);
  };
  for (var i = 0; i < repName.length; i++) {
    new YourRep (repName[i],repTitle[i],repTwitterHandle[i]);
  };
};

function YourRep (repName, repTitle, repTwitterHandle,checkBox)  {
  this.repName = repName;
  this.repTitle = repTitle;
  this.repTwitterHandle = repTwitterHandle;
  this.checkBox = checkBox;
  this.selector = 0;
  yourRepArray.push(this);
};
