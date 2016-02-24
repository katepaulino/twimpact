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

  //Reach Every Mother and Child Act
  updateTweetLink('#tweet-div_1', "@twitterrecipient", ", please support hungry kids!");
  updateMailLink('#email-div_1', 'test@twimpacttest.com', 'Support this bill!', 'Dearest senator, you\'re the best, Dan')
  updateFacebookLink('#fb-div_1', 'http%3A%2F%2Fwww.congress.gov%2Fbill%2F114th%2Dcongress%2Fsenate%2Dbill%2F1911');

  //Global Food Security Act
  updateTweetLink('#tweet-div_2', "@twitterrecipient", ", please support hungry kids!");
  updateMailLink('#email-div_2', 'test@twimpacttest.com', 'Support this bill!', 'Dearest senator, you\'re the best, Dan')
  updateFacebookLink('#fb-div_2', 'http%3A%2F%2Fwww.congress.gov%2Fbill%2F114th%2Dcongress%2Fsenate%2Dbill%2F1911');

  //Foreign Aid Transparency and Accountability Act
  updateTweetLink('#tweet-div_3', "@twitterrecipient", ", please support hungry kids!");
  updateMailLink('#email-div_3', 'test@twimpacttest.com', 'Support this bill!', 'Dearest senator, you\'re the best, Dan')
  updateFacebookLink('#fb-div_3', 'http%3A%2F%2Fwww.congress.gov%2Fbill%2F114th%2Dcongress%2Fsenate%2Dbill%2F1911');

  //Food For Peace Reform Act
  updateTweetLink('#tweet-div_4', "@twitterrecipient", ", please support hungry kids!");
  updateMailLink('#email-div_4', 'test@twimpacttest.com', 'Support this bill!', 'Dearest senator, you\'re the best, Dan')
  updateFacebookLink('#fb-div_4', 'http%3A%2F%2Fwww.congress.gov%2Fbill%2F114th%2Dcongress%2Fsenate%2Dbill%2F1911');

  //M-Core Act
  updateTweetLink('#tweet-div_5', "@twitterrecipient", ", please support hungry kids!");
  updateMailLink('#email-div_5', 'test@twimpacttest.com', 'Support this bill!', 'Dearest senator, you\'re the best, Dan')
  updateFacebookLink('#fb-div_5', 'http%3A%2F%2Fwww.congress.gov%2Fbill%2F114th%2Dcongress%2Fsenate%2Dbill%2F1911');

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
