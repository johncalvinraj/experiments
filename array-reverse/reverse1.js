function reverse(a) {
  var b = []
  for (var i = a.length-1; i > -1; i--){
    b.push(a[i])
  }
  return b
}
console.log(reverse([1,2,3,'hello']))