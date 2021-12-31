//defining (almost) all variables
let grid = [[' ',' ',' ','2','6',' ','7',' ','1'],
            ['6','8',' ',' ','7',' ',' ','9',' '],
            ['1','9',' ',' ',' ','4','5',' ',' '],
            ['8','2',' ','1',' ',' ',' ','4',' '],
            [' ',' ','4','6',' ','2','9',' ',' '],
            [' ','5',' ',' ',' ','3',' ','2','8'],
            [' ',' ','9','3',' ',' ',' ','7','4'],
            [' ','4',' ',' ','5',' ',' ','3','6'],
            ['7',' ','3',' ','1','8',' ',' ',' ']],
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

console.log(possibleSquares)
/*

//removing squares that are impossible to place.
var count = 0
for (i = 0; i < 9; i++) {
  for (var j = 0; j < 9; j++) {
    if (grid[i][j] === ' ') {
      for (var posY = 0; posY < 9; posY++) {
        if (grid[posY][j] != ' ') {
          possibleSquares[count].splice(grid[posY][j] - 1, 1)
        }
      }
      for (var posX = 0; posX < 9; posX++) {
        if (grid[i][posX] != ' ') {
          possibleSquares = possibleSquares.join('')
          if (possibleSquares.includes(grid[i][posX])) {
            possibleSquares.replace(grid[i][posX],'')
          }
          possibleSquares = possibleSquares.split('')
        }
      }
    }
  }
}

*/

/*

wrong = true
while(wrong) {
  //getting random numbers.
  count = 0
  for (i = 0; i < noOfBlanks; i++) { 
    randomInts.push(Math.floor (Math.random() * possibleSquares[count].length))
    count++
  }
  
  // getting the blank's position
  blankPos = []
  for (i = 0; i < possibleSquares.length; i++) {
    blankPos.push([possibleSquares[i][possibleSquares[i].length - 1],[possibleSquares[i][possibleSquares[i].length - 2]]])
  }

  //We dont need many copies of the suduku to place the numbers instead we can simulate it.
  count = 0 
  for (i = 0; i < noOfBlanks; i++) {
    let numberPosX = blankPos[count][1]
    let numberPosY = blankPos[count][0]
    for (var j = 0; j < possibleSquares.length; j++) {
      if (possibleSquares[j][possibleSquares[j].length - 1] === numberPosX) {
        possibleSquares = possibleSquares.join('')
        if (possibleSquares.includes(numberPosX)) {
          possibleSquares.replace(numberPosX,'')
        }
        possibleSquares = possibleSquares.split('')
      }
      if (possibleSquares[j][possibleSquares[j].length - 2] === numberPosY) {
        possibleSquares = possibleSquares.join('')
        if (possibleSquares.includes(numberPosY)) {
          possibleSquares.replace(numberPosY,'')
        }
        possibleSquares = possibleSquares.split('')
      }
      if (!possibleSquares.length) {
        wrong = false
      } 
    }
    possibleSquares.splice(0,1)
    count++
  }
}

//printing the result

//redoing the possible squares 
for (var i = 0; i < 9; i++) {
  for (var j = 0; j < 9; j++) {
    if (grid[i][j] === ' ') {
      possibleSquares.push([1,2,3,4,5,6,7,8,9,i+'',j+''])
      noOfBlanks++
    }
  }
}

var count = 0
for (i = 0; i < 9; i++) {
  for (var j = 0; j < 9; j++) {
    if (grid[i][j] === ' ') {
      for (var posY = 0; posY < 9; posY++) {
        if (grid[posY][j] != ' ') {
          possibleSquares[count].splice(grid[posY][j] - 1, 1)
        }
      }
      for (var posX = 0; posX < 9; posX++) {
        if (grid[i][posX] != ' ') {
          possibleSquares = possibleSquares.join('')
          if (possibleSquares.includes(grid[i][posX])) {
            possibleSquares.replace(grid[i][posX],'')
          }
          possibleSquares = possibleSquares.split('')
        }
      }
    }
  }
} 

for (i = 0; i < possibleSquares.length; i++) {
  let number = possibleSquares[i][randomInts[i]]
  console.log(number)
}*/