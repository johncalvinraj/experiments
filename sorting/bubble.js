var a = [1,2,3,45,2,6,5,234,9,784,245]
for (var i = 0; i <= a.length; i++) {
  var c = 1
  for (var j = 0; j <= a.length-i; j++) {
    var d = a[j]
	  if (a[j+1] < a[j]){
	    c = 0
	    a[j] = a[j+1];
	    a[j+1] = d;
	  }
  }
  if(c === 1){
    console.log(a)
    break;
  }
}