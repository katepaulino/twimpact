$('.billLogo').addClass('original').clone().insertAfter('.billLogo').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();
scrollIntervalID = setInterval(stickIt, 10);
function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;

  if ($(window).scrollTop() >= (orgElementTop)) {
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}

var divEls = ['#div_1', '#div_2', '#div_3', '#div_4', '#div_5'];
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
  hideAllExcept('');
  activateSelectorButtons();

  //Reach Every Mother and Child Act
  updateTweetLink('#tweet-div_1', "@twitterrecipient", ", plz support the Reach Every Mother and Child Act! http://bit.ly/reachbp");
  updateMailLink('#email-div_1', 'test@twimpacttest.com', 'Support this bill!', 'Dearest senator, you\'re the best, Dan')
  updateFacebookLink('#fb-div_1', 'http%3A%2F%2Fwww.congress.gov%2Fbill%2F114th%2Dcongress%2Fsenate%2Dbill%2F1911');

  //Global Food Security Act
  updateTweetLink('#tweet-div_2', "@twitterrecipient", ", plz support the Global Food Security Act! http://bit.ly/1SSyNfP");
  updateMailLink('#email-div_2', 'test@twimpacttest.com', 'Support this bill!', 'Dearest senator, you\'re the best, Dan')
  updateFacebookLink('#fb-div_2', 'http%3A%2F%2Fwww.congress.gov%2Fbill%2F114th%2Dcongress%2Fsenate%2Dbill%2F1911');

  //Foreign Aid Transparency and Accountability Act
  updateTweetLink('#tweet-div_3', "@twitterrecipient", ", please support the Foreign Aid Transparency Act! http://bit.ly/fataabp");
  updateMailLink('#email-div_3', 'test@twimpacttest.com', 'Support this bill!', 'Dearest senator, you\'re the best, Dan')
  updateFacebookLink('#fb-div_3', 'http%3A%2F%2Fwww.congress.gov%2Fbill%2F114th%2Dcongress%2Fsenate%2Dbill%2F1911');

  //Food For Peace Reform Act
  updateTweetLink('#tweet-div_4', "@twitterrecipient", ", plz support the Food For Peace Reform Act! http://bit.ly/foodbp");
  updateMailLink('#email-div_4', 'test@twimpacttest.com', 'Support this bill!', 'Dearest senator, you\'re the best, Dan')
  updateFacebookLink('#fb-div_4', 'http%3A%2F%2Fwww.congress.gov%2Fbill%2F114th%2Dcongress%2Fsenate%2Dbill%2F1911');

  //M-Core Act
  updateTweetLink('#tweet-div_5', "@twitterrecipient", ", please the M-Core Act! http://bit.ly/mcorebp");
  updateMailLink('#email-div_5', 'test@twimpacttest.com', 'Support this bill!', 'Dearest senator, you\'re the best, Dan')
  updateFacebookLink('#fb-div_5', 'http%3A%2F%2Fwww.congress.gov%2Fbill%2F114th%2Dcongress%2Fsenate%2Dbill%2F1911');

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

function updateMailLink(iconId, recipient, subject, body) {
  $(iconId).wrap("<a href=#></a>");
  $(iconId).click(function() {
    window.location.href = 'mailto:'+recipient+'?subject='+subject+'&body='+body;
  })
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
