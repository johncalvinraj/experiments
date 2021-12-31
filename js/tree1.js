x = {
  val: 5,
  left: {
    val: 6,
    left: {
      val: 5
    },
    right: {
      val: 10
    }
  },
  right: {
    val: 4
  }
}
var count = 0
function total(obj) {
  count += x.val
}

console.log(x.left.val)