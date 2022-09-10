/**
 * 
 * @param {*} arr 
 * @param {*} l 
 * @param {*} r 
 * @param {*} find 
 * @returns index of the element if found. -1 otherwise.
 */
function binarysearch(arr, l, r, find) {
  let koth = Math.floor((l+r)/2)
  console.log(l,r,koth)
  if(arr[koth] === find) {
    return koth
  }

  if(l > r) {
    return -1
  }

  if(arr[koth] > find){
    return binarysearch(arr, l, koth-1, find)
  }
  if(arr[koth] < find) {
    return binarysearch(arr, koth+1, r, find)
  }
  

}

let arr = [10, 15, 22, 33, 45, 78, 99, 102]
let index = binarysearch(arr, 0, arr.length-1, 45)
console.log(index)

index = binarysearch(arr, 0, arr.length-1, 25)
console.log(index)

index = binarysearch(arr, 0, arr.length-1, 120)
console.log(index)

index = binarysearch(arr, 0, arr.length-1, 102)
console.log(index)


index = binarysearch(arr, 0, arr.length-1, 10)
console.log(index)

index = binarysearch(arr, 0, arr.length-1, 0)
console.log(index)
