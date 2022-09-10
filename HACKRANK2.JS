let a = "CREASHANK"
let b = "ORGANSINE"
let p2 = 0
let p = 0
let max = a[p] < b[p2] ? b[p2] : a[p]
let ans = ''
for (var i = 0; i < Math.max(a.length,b.length); i++) {
  if (typeof a[p] === 'undefined') {
    ans += b[p2]
    p2++
  }
  if (typeof b[p2] === 'undefined') {
    ans += a[p]
    p++
  }
  if (a[p] < max) {
    max = a[p] < b[p2] ? b[p2] : a[p]
    ans += a[p]
    p++
  }
  if (b[p2] < max) {
    max = a[p] < b[p2] ? b[p2] : a[p]
    ans += b[p2]
    p2++
  }
  if (b[p2] === a[p]) {
    let 
    // tiebreak here
    // gl future self lol u need it
  }
}