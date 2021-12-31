function getRemaining(arr) {
  //console.log(arr)
  var a = 0
  arr.map(x => a |= 1<<(x-1))

  var m = []
  for (i = 1;i < 10; i++) {
    if (!(a & 1)) {
      m.push(i)
    }
    a = a >> 1
  }
  return m
}

let r1 = getRemaining([1,2,3,4,5]) 
console.log(r1) // should print [6,7,8,9]

r1 = getRemaining([]) 
console.log(r1) // should print [1,2,3,4,5,6,7,8,9]

r1 = getRemaining([8, 9, 5, 1]) 
console.log(r1) // should print [2,3,4,6,7]

r1 = getRemaining([1,2,3,4,5,6,7,8,9]) 
console.log(r1) // should print []
