var board = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]

function random () {
  var m = []
  var ar = [0,1,2,3,4,5,6,7]
  for (var i = 0; i<8; i++) {
    var randomint = Math.floor(Math.random() * (ar.length - 1))
    m.push(ar[randomint])
    ar.splice(ar.join('').indexOf(randomint+''),1)
    m.push(i)
  }
  return m
}
let x = random()
console.log(x)
for (var i = 0; i < 16; i*=2) {

}