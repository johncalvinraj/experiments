let n = 6
let k = 1
let s = 0

for (var j = 0; j <= n; j++) {
  for (var i = 1; i <= j; i++) {
    k *= i

  }
  s += k
  k =1
 console.log(s)
}
