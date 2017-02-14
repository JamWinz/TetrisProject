var tetris = (function() {
  console.log("Initilizing tetris.js");
  var grid = [[null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null]
            ];

            //var player = "X";

            function playMove(id){
              var row = parseInt(id[1], 10);
              var col = parseInt(id[3], 10);
              var count = row;
              //grid[count][col] //= player;
              /*setInterval(function() {
              }, 1000);*/

              //setTimeout(function() {
              //}, 500);
            for(var i = row; i < 15; i++){
              $("#R" + count + "C" + col).queue(function () {
                console.log("Back into the QUEUE function");
              $("#R" + count + "C" + col).removeClass("colorBox").delay(500);
              console.log("#R" + count + "C" + col);//Print the cell that we are currently on
              console.log("Executed removeClass!");
              count++;
              console.log(count);
              $("#R" + count + "C" + col).addClass("colorBox").delay(500);
              console.log("Executed addClass!")
              //Count here creates full rows of blocks
              });
            }
              console.log("Out of the loop..");
              //setInterval( function() {

              //}, 500 );
              notify();
        }

            var listeners = [];

            function addListener(cb) {
              listeners.push(cb);
            }

            function notify() {
              for(var i = 0; i < listeners.length; i++){
                var cb = listeners[i];
                cb(grid);
              }
            }

            return {
              addListener: addListener,
              playMove: playMove
            };

})();
