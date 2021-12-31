//defining (almost) all variables
let x = '080020000900300540000000006002030610100000007000600009400500130009004000000000070'
let a = ''
let grid = [];
for (var j = 0; j < 9; j++) {
  let y = []
  for (var i = 0; i < 9; i++) {
    a = x[i + 9 * j] != '0' ? x[i + 9 * j] : ' '
    y.push(a)
  }
  grid.push(y)
  console.log(y)
}
possibleSquares = [],
noOfBlanks = 0,
randomInts = [];

//configuring the stage.
for (var i = 0; i < 9; i++) {
  possibleSquares[i] = []
  for (var j = 0; j < 9; j++) {
    if (grid[i][j] === ' ') {
      possibleSquares[i][j] = new Set([1,2,3,4,5,6,7,8,9])
      noOfBlanks++
    } 
  }
}

function difference(setA, setB) {
  let _difference = new Set(setA)
  for (let elem of setB) {
      _difference.delete(elem)
  }
  return _difference
}


function setPossibleSquares () {
  // row sweep
  for (var i = 0; i < 9; i++) {

    let rowValues = new Set();
    for (var j = 0; j < 9; j++) {
      if (grid[i][j] != ' ') {
        rowValues.add(+grid[i][j]);
      }
    }

    for (var j = 0; j < 9; j++) {
      if (grid[i][j] === ' ') {
        possibleSquares[i][j] = difference(possibleSquares[i][j], rowValues);
      }
    }
  }

  // col sweep
  for (var j = 0; j < 9; j++) {
    
    let colValues = new Set();
    for (var i = 0; i < 9; i++) {
      if (grid[i][j] != ' ') {
        colValues.add(+grid[i][j]);
      }
    }

    for (var i = 0; i < 9; i++) {
      if (grid[i][j] === ' ') {
        possibleSquares[i][j] = difference(possibleSquares[i][j], colValues);
      }
    }
  }

  for (var y = 0; y < 9; y += 3) {
    for (var x = 0; x < 9; x += 3) {
  
      let boxValues = new Set()
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          if (grid[i + y][j + x] != ' ') {
            boxValues.add(+grid[i+y][j+x]);
          }
        }
      }

      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          if (grid[i + y][j + x] === ' ') {
            possibleSquares[i + y][j + x] = difference(possibleSquares[i+ y][j + x], boxValues);
          }
        }
      }
    }
  }
}


function fixOnePossible() {
  let change = false
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (typeof(possibleSquares[i][j]) != 'undefined' && possibleSquares[i][j].size === 1) {
        grid[i][j] = `${[...possibleSquares[i][j]][0]}`
        delete possibleSquares[i][j]
        change = true
        return change
      }
    }
  }
  return change
}

do {
  setPossibleSquares()
  change = fixOnePossible()
} while (change);

console.log(grid)