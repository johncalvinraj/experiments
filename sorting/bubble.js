var a = [1,2,3,45,2,6,5,234,9,784,245]

/**
 * Sort an array in place using bubble sort.
 */
function sort(arr) {
  for (var i = 0; i <= arr.length; i++) {
    var isSwapped = false
    for (var j = 0; j <= arr.length-i; j++) {
      var d = arr[j]
      if (arr[j+1] < arr[j]){
        isSwapped = true
        arr[j] = arr[j+1];
        arr[j+1] = d;
      }
    }
    if (!isSwapped){
      return arr
    }
  }
}


console.log(sort(a))

