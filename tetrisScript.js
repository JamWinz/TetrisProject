
$(function() {
  var count = 1;
  console.log("jQuery was loaded");

  $("#button").mouseover(function() {
    $(this).css("background-color", "green");
  });
  $("#button").mouseout(function() {
    $(this).css("background-color", "gray");
  });


  $("#button").click(function() {
  var divArr = [$("#d1"), $("#d2"), $("#d3")];
  for(var i = 0; i < divArr.length; i++){
    //console.log(i);
    $(divArr[i]).queue(function () {
      //console.log(i)
      //console.log($("#d"+(i+1)));
      $("#d"+(i)).css("background-color", "#47ea15");
      $("#d"+(i+2)).delay(500);
      $("#d"+(i-1)).css("background-color", "black");
      //$("#d"+(i-1)).delay(500)

      //***********************************************************************************************
      //WRITE AN IF STATEMENT TO CHECK IF THE NEXT BLOCK IS OF CLASS BOX AND IF IT IS THEN STOP MOVEMENT
      });
  }
    });

  //*TODO* AUTO GENERATE GRID SYSTEM *TODO*
  var row = 15;
  var colum = 10;

  for(var i = 1; i <= row; i++) {

  }

  for(var i = 1; i <= 15; i++){
      console.log();
      $('body').append('<div id="div'+ (i++) +'" />');
    /*  $("#row1").css(
        "display", "inline-block",
        "background-color", "black",
        "border", "2px solid lightgrey",
        "width", "25px",
        "height", "25px",
        "float", "left",
        "color", "black"
      );*/
  for(var j = 1; j <= 10; j++){
      console.log(i);
      }
    }

});




//Hide page divs
function showpage(page) {
  $("#datastructshow").css("display", "none");
  $("#page1").css("display", "none");
  $("#page2").css("display", "none");
  $("#page3").css("display", "none");

  $("#p1").css("border-top", "none");
  $("#p1").css("border-bottom", "none");
  $("#p2").css("border-top", "none");
  $("#p2").css("border-bottom", "none");
  $("#p3").css("border-top", "none");
  $("#p3").css("border-bottom", "none");

  if (page === 1) {
    $("#page1").css("display", "block");
    $("#p1").css("border-top", "thick double #111111");
    $("#p1").css("border-bottom", "thick double #111111");
  }
  else if (page === 2) {
    $("#page2").css("display", "block");
    $("#p2").css("border-top", "thick double #111111");
    $("#p2").css("border-bottom", "thick double #111111");
  }
  else if (page === 3) {
    $("#page3").css("display", "block");
    $("#p3").css("border-top", "thick double #111111");
    $("#p3").css("border-bottom", "thick double #111111");
  }
}
