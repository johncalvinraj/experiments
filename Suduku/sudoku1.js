let grid1 = [[' ',' ',' ','2','6',' ','7',' ','1'],
            ['6','8',' ',' ','7',' ',' ','9',' '],
            ['1','9',' ',' ',' ','4','5',' ',' '],
            ['8','2',' ','1',' ',' ',' ','4',' '],
            [' ',' ','4','6',' ','2','9',' ',' '],
            [' ','5',' ',' ',' ','3',' ','2','8'],
            [' ',' ','9','3',' ',' ',' ','7','4'],
            [' ','4',' ',' ','5',' ',' ','3','6'],
            ['7',' ','3',' ','1','8',' ',' ',' ']]

let grid = [[' ','8','4',' ',' ',' ','3',' ',' '],
            ['6',' ',' ',' ',' ','3',' ','7',' '],
            [' ',' ','2',' ',' ',' ','9',' ',' '],
            [' ',' ','1','8',' ','5',' ',' ',' '],
            ['2','6','3','7','1',' ',' ',' ','5'],
            [' ',' ',' ',' ',' ',' ',' ',' ',' '],
            [' ',' ',' ',' ',' ',' ',' ','9',' '],
            [' ','5','6','3',' ',' ','1','8',' '],
            [' ','1',' ',' ','6',' ',' ','2',' ']]            

function fillValue(grid, i, j) {
  let bitVector = 0
  //console.log(`>>> ${i}, ${j} `);
  for (var row = 0; row < 9; row++) {
    if (row != i && grid[row][j] != ' ' && typeof (grid[row][j]) == 'string') {
      //console.log('    Across rows >>> --- ' + (+grid[row][j] - 1))
      bitVector |= (1 << (+grid[row][j] - 1))
    }
  }
  for (var col = 0; col < 9; col++) {
    if (col != j && grid[i][col] != ' ' && typeof (grid[i][col]) == 'string') {
      //console.log('    Across cols >>> --- ' + (+grid[i][col] - 1))
      bitVector |= (1 << (+grid[i][col] - 1))
    }
  }

  let ssRow = i - (i % 3)
  let ssCol = j - (j % 3)
  //console.log(i,j)
  for (var row = ssRow; row < 3 + ssRow; row++) {
    for (var col = ssCol; col < 3 + ssCol; col++) {
      if ((row != i || col != j) && grid[row][col] != ' ' && typeof (grid[row][col]) == 'string') {
        bitVector |= (1 << (+grid[row][col] - 1))
        //console.log(grid[row][col])
      }
    }
  }
  bitVector = 511-bitVector
  grid[i][j] = bitVector
} 

function findPossiblePos(grid) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (grid[i][j] == ' ' || typeof grid[i][j] != 'string') {
        fillValue(grid, i, j)
      }
    }
  }
  //console.log(grid)
  //console.log('\n')

  secondPass(grid)
  console.log('\n',grid)
}
var pos = []

function secondPass (grid) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      let val = grid[i][j]
      if (typeof val != 'string' && !(val & (val- 1))) {
        let count = 0
        while (val > 0) {
          count++
          val = val >> 1
        }
        grid[i][j] = count + ''
      }
      checkBox(i , j)
    }
  }
}

function binary2array (binary) {
  if (typeof binary === 'string') {
    return 0
  }
  var x = []
  for (var i = 0; i < 9; i++) {
    if (binary & 1) {
      x.push(i)
    }
    binary = binary >> 1
  }
  return x
}
var arr = []
function checkBox (i , j) {
  let ssRow = i - (i % 3)
  let ssCol = j - (j % 3)
  //console.log(i,j)
  if (binary2array(grid[i][j]) != 0) { 
    arr.push(binary2array(grid[i][j]))
  }
  else {
    arr.push(grid[i][j])
  }
  for (var row = ssRow; row < 3 + ssRow; row++) {
    for (var col = ssCol; col < 3 + ssCol; col++) {
      if ((row != i || col != j) && typeof grid[row][col] === 'number') {
        arr.push(binary2array(grid[row][col]))
      }
    }
  }
  console.log(arr)
}

console.log(grid)
for (let n=0; n<15; n++) {
  findPossiblePos(grid)
}
