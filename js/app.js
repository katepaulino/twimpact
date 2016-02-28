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






/*
Copyright (c) 2013 dissimulate at Codepen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

document.getElementById('close').onmousedown = function(e) {
  e.preventDefault();
  document.getElementById('info').style.display = 'none';
  return false;
};

// settings

var physics_accuracy  = 3,
    mouse_influence   = 20,
    mouse_cut         = 5,
    gravity           = 1200,
    cloth_height      = 50,
    cloth_width       = 100,
    start_y           = 20,
    spacing           = 7,
    tear_distance     = 60;


window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
};

var canvas,
    ctx,
    cloth,
    boundsx,
    boundsy,
    mouse = {
        down: false,
        button: 1,
        x: 0,
        y: 0,
        px: 0,
        py: 0
    };

var Point = function (x, y) {

    this.x      = x;
    this.y      = y;
    this.px     = x;
    this.py     = y;
    this.vx     = 0;
    this.vy     = 0;
    this.pin_x  = null;
    this.pin_y  = null;

    this.constraints = [];
};

Point.prototype.update = function (delta) {

    if (mouse.down) {

        var diff_x = this.x - mouse.x,
            diff_y = this.y - mouse.y,
            dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y);

        if (mouse.button == 1) {

            if (dist < mouse_influence) {
                this.px = this.x - (mouse.x - mouse.px) * 1.8;
                this.py = this.y - (mouse.y - mouse.py) * 1.8;
            }

        } else if (dist < mouse_cut) this.constraints = [];
    }

    this.add_force(0, gravity);

    delta *= delta;
    nx = this.x + ((this.x - this.px) * .99) + ((this.vx / 2) * delta);
    ny = this.y + ((this.y - this.py) * .99) + ((this.vy / 2) * delta);

    this.px = this.x;
    this.py = this.y;

    this.x = nx;
    this.y = ny;

    this.vy = this.vx = 0
};

Point.prototype.draw = function () {

    if (!this.constraints.length) return;

    var i = this.constraints.length;
    while (i--) this.constraints[i].draw();
};

Point.prototype.resolve_constraints = function () {

    if (this.pin_x != null && this.pin_y != null) {

        this.x = this.pin_x;
        this.y = this.pin_y;
        return;
    }

    var i = this.constraints.length;
    while (i--) this.constraints[i].resolve();

    this.x > boundsx ? this.x = 2 * boundsx - this.x : 1 > this.x && (this.x = 2 - this.x);
    this.y < 1 ? this.y = 2 - this.y : this.y > boundsy && (this.y = 2 * boundsy - this.y);
};

Point.prototype.attach = function (point) {

    this.constraints.push(
        new Constraint(this, point)
    );
};

Point.prototype.remove_constraint = function (constraint) {

    this.constraints.splice(this.constraints.indexOf(constraint), 1);
};

Point.prototype.add_force = function (x, y) {

    this.vx += x;
    this.vy += y;
};

Point.prototype.pin = function (pinx, piny) {
    this.pin_x = pinx;
    this.pin_y = piny;
};

var Constraint = function (p1, p2) {

    this.p1     = p1;
    this.p2     = p2;
    this.length = spacing;
};

Constraint.prototype.resolve = function () {

    var diff_x  = this.p1.x - this.p2.x,
        diff_y  = this.p1.y - this.p2.y,
        dist    = Math.sqrt(diff_x * diff_x + diff_y * diff_y),
        diff    = (this.length - dist) / dist;

    if (dist > tear_distance) this.p1.remove_constraint(this);

    var px = diff_x * diff * 0.5;
    var py = diff_y * diff * 0.5;

    this.p1.x += px;
    this.p1.y += py;
    this.p2.x -= px;
    this.p2.y -= py;
};

Constraint.prototype.draw = function () {

    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
};

var Cloth = function () {

    this.points = [];

    var start_x = canvas.width / 2 - cloth_width * spacing / 2;

    for (var y = 0; y <= cloth_height; y++) {

        for (var x = 0; x <= cloth_width; x++) {

            var p = new Point(start_x + x * spacing, start_y + y * spacing);

            x != 0 && p.attach(this.points[this.points.length - 1]);
            y == 0 && p.pin(p.x, p.y);
            y != 0 && p.attach(this.points[x + (y - 1) * (cloth_width + 1)])

            this.points.push(p);
        }
    }
};

Cloth.prototype.update = function () {

    var i = physics_accuracy;

    while (i--) {
        var p = this.points.length;
        while (p--) this.points[p].resolve_constraints();
    }

    i = this.points.length;
    while (i--) this.points[i].update(.016);
};

Cloth.prototype.draw = function () {

    ctx.beginPath();

    var i = cloth.points.length;
    while (i--) cloth.points[i].draw();

    ctx.stroke();
};

function update() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    cloth.update();
    cloth.draw();

    requestAnimFrame(update);
}

function start() {

    canvas.onmousedown = function (e) {
        mouse.button  = e.which;
        mouse.px      = mouse.x;
        mouse.py      = mouse.y;
        var rect      = canvas.getBoundingClientRect();
        mouse.x       = e.clientX - rect.left,
        mouse.y       = e.clientY - rect.top,
        mouse.down    = true;
        e.preventDefault();
    };

    canvas.onmouseup = function (e) {
        mouse.down = false;
        e.preventDefault();
    };

    canvas.onmousemove = function (e) {
        mouse.px  = mouse.x;
        mouse.py  = mouse.y;
        var rect  = canvas.getBoundingClientRect();
        mouse.x   = e.clientX - rect.left,
        mouse.y   = e.clientY - rect.top,
        e.preventDefault();
    };

    canvas.oncontextmenu = function (e) {
        e.preventDefault();
    };

    boundsx = canvas.width - 1;
    boundsy = canvas.height - 1;

    ctx.strokeStyle = '#888';

    cloth = new Cloth();

    update();
}

window.onload = function () {

    canvas  = document.getElementById('c');
    ctx     = canvas.getContext('2d');

    canvas.width  = 800;
    canvas.height = 600;

    start();
};
