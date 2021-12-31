/*

var x = [[[1,2],[3,4]],[5,6,7],[8],9]
var count = 0
function add(arr) {
  for (var i = 0; i < x.length; i++) {
    if(typeof arr[i] === ''){

    }
  }
}


var limit = 3
function x(n) {
  console.log(n)
  if (n <= 0) return n;
  return x(n-1) +n
}

console.log(x(limit))
*/
var limit = 5
function fib(n) {
  console.log(n)
  if(n=== 2||n === 1) {
    return 1
  }
  return fib(n-1) + fib(n-2)
}
console.log(fib(10))