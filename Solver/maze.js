var maze = [[0,0,0,0,7,0,0],
            [0,7,7,7,7,7,7],
            [0,0,0,7,0,7,7],
            [0,7,7,7,0,7,0],
            [0,7,0,7,0,7,0],
            [0,7,0,7,7,7,0],
            [7,7,0,0,0,0,0],
            [7,7,7,7,7,7,0]],
// 7 is the walkway 0 is the walls
stupid_path = [],
difficulty1 = maze.length,
difficulty = maze[0].length;

for (var z = 0; z <= 2; z++){
  for (var i = 1; i <= maze.length - 2; i++) {
    for (var j = maze[0].length - 2; j >= 1; j--) {
      if (maze[i-1][j] + maze[i][j-1] + maze[i][j+1] + maze[i+1][j] + maze[i][j] <= 14) {
        maze[i][j] = 0
      }
    }
    for (j = 1; j <= maze[0].length - 2; j++) {
      if (maze[i-1][j] + maze[i][j-1] + maze[i][j+1] + maze[i+1][j] + maze[i][j] <= 14) {
        maze[i][j] = 0
      }
    }
  }
}
for(i = 0;i < maze.length;i++){
  for(j = 0;j < maze[0].length;j++){
    if(maze[i][j] === 7){
      maze[i][j] = 'X'
      stupid_path.push([(i + '') + ' , ' + (j + ' ')])
    }
    else {
      maze[i][j] = ' '
    }
  }
}

function configEditor () {
  var table = document.querySelector('#hi')
  var num = 0 
  var p = 0
  var difficulty2 = document.querySelector('#height').value
  var difficulty3 = document.querySelector('#breadth').value
  let lineBreak = document.createElement('br')
  document.querySelector('#container').appendChild(lineBreak)
  for (var i = 0; i < difficulty2; i++) {
    let row = document.createElement("tr"); 
    row.setAttribute('id', 'true')
    row.setAttribute('class', 'row')
    table.appendChild(row) 

    for (var j = 0; j < difficulty3; j++) {
      p++
      num++
      let col = document.createElement("td")
      col.setAttribute('id',`${p}`)
      col.setAttribute('class','cell')
      col.textContent = ' '
      row.appendChild(col)
    }

  }
}

var table = document.querySelector('#hi')
var num = 0 
var p = 0
for (var i = 0; i < difficulty1; i++) {
  let row = document.createElement("tr"); 
  row.setAttribute('id', 'true')
  row.setAttribute('class', 'row')
  table.appendChild(row) 
  
  for (var j = 0; j < difficulty; j++) {
    p++
    num++
    let col = document.createElement("td")
    col.setAttribute('id',`${p}`)
    col.setAttribute('class','cell')
    col.textContent = maze[i][j]
    row.appendChild(col)
  }
  
}