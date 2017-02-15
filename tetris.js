var tetris = (function() {
  console.log("Initilizing tetris.js");

  var block = [[true, true],
               [true, true]
              ];


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

            //Box Shape
            /*
            grid[row][col+1] = false;
            grid[row][col] = false;
            grid[row+1][col] = false;
            grid[row+1][col+1] = false;
            row++;
            grid[row][col+1] = true;
            grid[row][col] = true;
            grid[row+1][col] = true;
            grid[row+1][col+1] = true;
            */

            //Line
            /*
            grid[row][col+1] = false;
            grid[row][col] = false;
            row++;
            grid[row][col+1] = true;
            grid[row][col] = true;
            */

            function randomPiece(arr) {
              var rng = Math.floor(Math.random() * 2);

              return rng;
            }

            function playMove(id){
              var row = parseInt(id[1], 10);
              var col = parseInt(id[3], 10);
              grid[row][col] = true;
              notify();
              var interval = setInterval(function() {
                grid[row][col] = false;
                row++;
                grid[row][col] = true;
                if (row === grid.length-1 || grid[row+1][col] === true) {
                  // we reached the bottom
                  clearInterval(interval);
                }
                notify();
              }, 100);
        }

            var listeners = [];

            function addListener(cb) {
              listeners.push(cb);
              notify();
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
