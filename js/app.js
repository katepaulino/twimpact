var divEls = ['#div_1', '#div_2', '#div_3', '#div_4', '#div_5'];

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

  updateTweetLink('#tweet-reach', "@twitterrecipient", ", please cosponsor the Reach Every Mother and Child Act");
  updateMailLink('#email-reach', 'test@twimpacttest.com', 'Support this bill!', 'Dear, so and so')
  updateFacebookLink('#fb-reach', 'http%3A%2F%2Fwww.congress.gov%2Fbill%2F114th%2Dcongress%2Fsenate%2Dbill%2F1911');
};


function updateTweetLink(iconId, recipient, message) {
  var fullMessage = "http://twitter.com/home?status=" + "hello, " + recipient + message;
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
