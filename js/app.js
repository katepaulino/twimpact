// the 5 bills (for tagging)
// reach
// globalFood
// transparency
// reform
// core

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

// reach every mother and child act

updateReachTweetLink('#tweet-reach', "@twitterrecipient", ", please cosponsor the Reach Every Mother and Child Act");
updateReachMailLink('#email-reach', 'test@twimpacttest.com', 'Support this bill!',
"Dear recipient, %0D%0A%0D%0AAs a constituent and Borgen Project supporter, I urge you to cosponsor the Reach Every Mother and Child Act (S. 1911 / H.R. 3706), which will strengthen the U.S. government's efforts to end preventable deaths of mothers, newborns, and young children in developing countries. %0D%0A%0D%0AAlthough mortality rates for mothers and children have been nearly cut in half worldwide over the last 25 years, there is much more that must be done. Every day, approximately 800 women, almost entirely from developing countries, die from preventable causes related to pregnancy and childbirth, and the risk of a woman dying in childbirth is 47 times higher in Africa than in America. In addition, more than 17,000 children under five years old die each day of treatable conditions. Because the U.S. already has the expertise in ending preventable maternal and child deaths, we must play a larger role in this global fight to help mothers and their children. %0D%0A%0D%0APlease support the Reach Every Mother and Child Act to ensure that the U.S. government serves as a leader in the global fight to help ensure that all mothers and children in the developing world get the health care they deserve. %0D%0A%0D%0ASincerely,");


updateReachFacebookLink('#fb-reach', 'http%3A%2F%2Fwww.congress.gov%2Fbill%2F114th%2Dcongress%2Fsenate%2Dbill%2F1911');
};

function updateReachTweetLink(iconId, recipient, message) {
  var fullMessage = "http://twitter.com/home?status=" + "hello, " + recipient + message;
  $(iconId).wrap("<a href=" + "'" + fullMessage + "'></a>'");
}

function updateReachMailLink(iconId, recipient, subject, body) {
  $(iconId).wrap("<a href=#></a>");
  $(iconId).click(function() {
    window.location.href = 'mailto:'+recipient+'?subject='+subject+'&body='+body;
  })
}

function updateReachFacebookLink(iconId, link) {
  var fullLink = "http://www.facebook.com/sharer.php?src=sp&u=" + link;
  $(iconId).wrap("<a href=" + fullLink + "></a>")
}


// global food and security act

// foreign aid transparency and accountability act

// food for peace reform act

// m-core act
