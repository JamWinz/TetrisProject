var tetris = (function() {

  console.log("Initilizing tetris.js");
  var gameover = new Audio('gameover.mp3');
  var ding = new Audio('ding.mp3');
  var count = 0;//FOR SCORE
  var fallSpeed = 400;
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
            function updateScore() {
              return count.toString();
            }

            //Clear row function
            function clearRow(){
              for(var i = 0; i <= 10; i++) {
                if(i === 10){
                  ding.play();
                  for(var j = 0; j < 10; j++) {
                    grid[activerow][j] = null;
                  }
                  count+=10;
                  $('#score').text(updateScore());
                  console.log("Score is " + count);


                  //grid[activerow][activecol] = false;
                  //grid[activerow][activecol+1] = false;

                  // DROP REMAINING BLOCKS
                  for(var k = grid.length-1; k > 0; k--) {

                    for(var l = 10; l >= 0; l--) {
                      if(grid[k][l] === true) {
                        grid[k+1][l] = true;
                        grid[k][l] = null;
                      }
                    }

                  }
                }
                else if(grid[activerow][i] === true) {
                  console.log("There is a block in row " + i);
                }
                else {
                  break;
                }
              }
            }

            function randomPiece() {
              var rng = Math.floor(Math.random() * 2);

              return rng;
            }

            var activerow = null;
            var activecol = null;

            function startGame() {
              createBlock(0, 4);
            }


            function moveLeft() {
              if (activerow !== null && activecol !== null && activecol-1 >= 0 && activecol-1 <= 9 && grid[activerow][activecol-1] !== true) {
                grid[activerow][activecol] = null;
                activecol--;
                grid[activerow][activecol] = true;
                console.log(activecol)
              }
            }

            function moveRight() {
              if (activerow !== null && activecol !== null && activecol+1 >= 0 && activecol+1 <= 9 && grid[activerow][activecol+1] !== true) {
                grid[activerow][activecol] = null;
                activecol++;
                grid[activerow][activecol] = true;
                console.log(activecol)
              }
            }

            function moveDown() {
              if (grid[grid.length-grid.length][activecol] === null) {
                for(var i = activerow; i < grid.length; i++){
                  if(grid[i][activecol] === null){
                    grid[activerow][activecol] = null;
                    activerow++;
                    grid[i][activecol] = true;
                  }

                }
                clearRow();
              }
            }

            function autoComplete() {
              for(var i = grid.length-1; i > 0; i--) {
                for(var j = 10; j >= 0; j--) {
                    grid[i][j] = true;
                  }
                }
            }

            /*function moveDown() {
              for(var i = activerow; i < grid.length; i++) {
                if(grid[grid.length-2][activecol] === null) {
                  grid[i][activecol] = false;
                  grid[i++][activecol] = true;
                  console.log("I moved down")
                }
              }
            }*/

            function createBlock(row, col){

              $('#score').text(updateScore());
              activerow = row;
              activecol = col;
              console.log(activerow + " " + activecol);
              id = grid[activerow][activecol] = true;
              notify();
              var interval = setInterval(function() {
                if (activerow+1 === grid.length || grid[activerow+1][activecol] === true) {

                  // we reached the bottom
                  clearInterval(interval);
                  if (activerow !== 0) {
                    // Increase fallspeed based on these conditions
                    if(fallSpeed > 50 && (count % 5 === 0) && count !== 0) {
                      fallSpeed -= 25;
                    }
                    count+=1;
                    console.log(activerow)
                    createBlock(0, 4);
                    console.log("Fall speed is " + fallSpeed)
                  }
                  else{
                    gameover.play();
                    $('#gameover').text("GAME OVER");
                  }
                }
                else {
                  grid[activerow][activecol] = null;
                  activerow++;
                  grid[activerow][activecol] = true;
                  notify();
                }
                //Clear a complete row
                clearRow();


            }, fallSpeed);
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
              startGame: startGame,
              moveLeft: moveLeft,
              moveRight: moveRight,
              moveDown: moveDown,
              autoComplete: autoComplete,
              clearRow: clearRow,
              updateScore: updateScore
            };

})();
