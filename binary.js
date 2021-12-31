function genStr(str, n) {
  if (n == 0) {
    console.log(str)
    return
  }

  genStr('0' + str, n-1)
  genStr('1' + str, n-1)
}

genStr('' , 2)