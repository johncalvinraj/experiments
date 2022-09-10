function string (a, b, placea, placeb, result) {
  console.log(a,b,result,placea, placeb)
  if(a[placea] < b[placeb]) {
    return string(a, b, placea + 1, placeb, result + a[placea])
  }
  if(b[placeb] < a[placea]) {
    return string(a, b, placea, placeb + 1, result + b[placeb])
  }
  if(b[placeb] === a[placea]) {
    return tiebreaker(a, b, placea+1, placeb+1, result)
  }
  if(typeof b[placeb] === 'undefined' && typeof a[placea] === 'undefined') {
    return result
  }
}

function tiebreaker (a, b, placea, placeb, result) {
  if(b[placeb] === a[placea]) {
    return tiebreaker(a, b, placea+1, placeb+1, result)
  }
  if (b[placeb] === )
}

let a = 'CREASHANKS'
let b = 'ORGANSINED'
console.log(string(a, b, 0, 0, ''))