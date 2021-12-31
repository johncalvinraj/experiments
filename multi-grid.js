let rowProducts = [36, 384, 144]
let colProducts = [96, 384, 54]
let numbers = [1, 2, 3, 4, 6, 8, 9, 12, 16]

function findPos (x,y) {
  for (var i = 0; i < x.length;i++) {
    if (x[i] === y) {
      x = x.splice(i,1)
      return x
    }
  }
}

function multigrid() {
  var x = [1, 2, 3, 4, 6, 8, 9, 12, 16]
  var y = []
  var z = 1
  for (var i = 1; i <= rowProducts.length * colProducts.length; i++) {
    z = z * i
  }
  for (let i = 0; i < z; i++) {
    x = [...numbers]
    y = []

    for (var j = 0; j < rowProducts.length * colProducts.length; j++) {
      var m = Math.floor(Math.random() * x.length)
      y.push(m)
      x = findPos(x,m) 
    }
  }
}

multigrid()
