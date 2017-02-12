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
              while(/*grid[count][col] === null &&*/ count < 14){
              //grid[count][col] //= player;

              /*setInterval(function() {

              }, 1000);*/
              
              //setTimeout(function() {
              $("#R" + count + "C" + col).removeClass("colorBox");
              console.log("#R" + count + "C" + col)//Print the cell that we are currently on
              //}, 500);

              count++;
              $("#R" + count + "C" + col).addClass("colorBox");

              notify();
            }
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
              playMove: playMove,
            };

})();
