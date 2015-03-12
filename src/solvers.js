/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  var solution = board.rows();
  var rookCount = n;
  var initColIndex = 0;

  var recurse = function(colIndex){
    if (rookCount === 0){
      return board.rows();
    }
    // iterate through column
    for (var row = 0 ; row < n ; row++){
      var boardRow = board.get(row);
      // place rook in cell
      board.togglePiece(row, colIndex);
      // check for conflicts
      if( board.hasAnyRooksConflicts() ){
        // if conflicts, erase rook
        board.togglePiece(row, colIndex);
      } else {
        rookCount--;
      }
    }
    if (colIndex < n){
      colIndex++;
    }
    recurse(colIndex);
  };

  recurse(initColIndex);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = factorial(n);

  function factorial(num){
    for (var i = num-1; i > 0 ; i--){
      num *= i;
      console.log(num);
    }
    return num;
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var solution = board.rows();
  var queenCount = n;
  var initColIndex = 0;

  var recurse = function(colIndex){
    if (queenCount === 0){
      return board.rows();
    }
    // iterate through column
    for (var row = 0 ; row < n ; row++){
      var boardRow = board.get(row);
      // place queen in cell
      board.togglePiece(row, colIndex);
      // check for conflicts
      if( board.hasAnyQueensConflicts() ){
        // if conflicts, erase rook
        board.togglePiece(row, colIndex);
      } else {
        queenCount--;
      }
    }
    if (colIndex < n){
      colIndex++;
    }
    recurse(colIndex);
  };

  recurse(initColIndex);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
