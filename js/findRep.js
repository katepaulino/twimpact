var zip = 0;
var xhrParse = 0;
var repName = [];
var repTitle = [];
var repTwitterHandle = [];
var yourRepArray = [];
var tweetTheseReps = 0;

var findRep = document.getElementById("findRep");
findRep.addEventListener("submit",function(event){
  event.preventDefault();
  zip = event.target.inputZip.value;
  listYourReps();
  printTwitterHandle();
});

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

function YourRep (repName, repTitle, repTwitterHandle) {
  this.repName = repName;
  this.repTitle = repTitle;
  this.repTwitterHandle = repTwitterHandle;
  this.selector = 0;
  yourRepArray.push(this);
};

function printTwitterHandle () {
  var tableEl = document.createElement("table");
  var tableBody = document.createElement("tbody");
  var tableHeaders = ["Name","Title","Twitter Handle","Select"];
  var row = document.createElement("tr");
  for (var i = 0; i < tableHeaders.length; i++) {
    var theadEl = document.createElement("th");
    var cellText = document.createTextNode(tableHeaders[i]);
    theadEl.appendChild(cellText);
    row.appendChild(theadEl);
    tableBody.appendChild(row);
    tableEl.appendChild(tableBody);
  }
  for (var i = 0; i < yourRepArray.length; i++) {
    var row2 = document.createElement("tr");
    var cell2 = document.createElement("td");
    var cellText2 = document.createTextNode(yourRepArray[i].repName);
    var cell3 = document.createElement("td");
    var cellText3 = document.createTextNode(yourRepArray[i].repTitle);
    var cell4 = document.createElement("td");
    var cellText4 = document.createTextNode(yourRepArray[i].repTwitterHandle);
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "chooseThisRep";
    cell2.appendChild(cellText2);
    row2.appendChild(cell2);
    cell3.appendChild(cellText3);
    row2.appendChild(cell3);
    cell4.appendChild(cellText4);
    row2.appendChild(cell4);
    row2.appendChild(checkBox);
    tableBody.appendChild(row2);
    tableEl.appendChild(tableBody);
  }
  document.getElementById("table").appendChild(tableEl);
};

// var selectRep = document.getElementById("chooseThisRep");
// selectRep.addEventListener("click",function(event){
//   event.preventDefault();
//   tweetTheseReps = "hello";
//   console.log(tweetTheseReps);
// });
