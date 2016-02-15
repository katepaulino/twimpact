window.onload = function() {

$('#div_1').hide();
$('#div_2').hide();
$('#div_3').hide();
$('#div_4').hide();
$('#div_5').hide();

$(document).ready(function(){
    $('#reach').click(function(){
        $('#div_1').show();
        $('#div_2').hide();
        $('#div_3').hide();
        $('#div_4').hide();
        $('#div_5').hide();
    });
});

$(document).ready(function(){
    $('#globalFood').click(function(){
      $('#div_1').hide();
      $('#div_2').show();
      $('#div_3').hide();
      $('#div_4').hide();
      $('#div_5').hide();
    });
});

$(document).ready(function(){
    $('#transparency').click(function(){
      $('#div_1').hide();
      $('#div_2').hide();
      $('#div_3').show();
      $('#div_4').hide();
      $('#div_5').hide();
    });
});

$(document).ready(function(){
    $('#reform').click(function(){
      $('#div_1').hide();
      $('#div_2').hide();
      $('#div_3').hide();
      $('#div_4').show();
      $('#div_5').hide();
    });
});

$(document).ready(function(){
    $('#core').click(function(){
      $('#div_1').hide();
      $('#div_2').hide();
      $('#div_3').hide();
      $('#div_4').hide();
      $('#div_5').show();
    });
});

};
