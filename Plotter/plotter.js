var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var m = 0

document.querySelector('#add').addEventListener('click', function () {
  var o = document.querySelector('#container')
  var z = document.createElement('input')
  var color = document.querySelector('#i' + m)
  z.setAttribute('id', 'equation' + m)
  z.setAttribute('type', 'text')
  z.setAttribute('placeholder', 'Type your equation here.')
  z.setAttribute('style', color)
  z.setAttribute('class', 'input')
  var q = document.createElement('input')
  q.setAttribute('id', m + '')
  q.setAttribute('type', 'color')
  var b = document.createElement('br')
  var b2 = document.createElement('br')
  var t = document.createElement('small')
  t.textContent = '    Choose color (for equation)'
  o.appendChild(b)
  o.appendChild(b2)
  o.appendChild(z)
  o.appendChild(q)
  o.appendChild(t)
  m++
  console.log(m)
});

function plot() {
  ctx.rect(0,0,1900,1900)
  ctx.fillStyle = 'white'
  ctx.fill()
  ctx.font = " 3 px 'PT Sans', sans-serif";
  ctx.fillText("x", 200, 100)
  ctx.beginPath();
  ctx.moveTo(750, 0);
  ctx.lineTo(750, 1500);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, 750);
  ctx.lineTo(1500, 750);
  ctx.stroke();
  ctx.fillStyle = 'black'
  for (var i = 0; i <= 55 ;i++) {
    ctx.beginPath()
    ctx.font = " 3 px 'PT Sans', sans-serif"
    ctx.fillText(5*i + '', 735, 770 + -65 * i)
  
    ctx.beginPath()
    ctx.font = " 3 px 'PT Sans', sans-serif"
    ctx.fillText(-5*i + '', 735 + -65 * i,770)
  }
  
  for (var i = 55; i >= 00000; i--) {
    ctx.beginPath()
    ctx.font = " 3 px 'PT Sans', sans-serif"
    ctx.fillText(-5*i + '', 735, 770 + 65 * i)
  
    ctx.beginPath()
    ctx.font = " 3 px 'PT Sans', sans-serif"
    ctx.fillText(5*i + '', 735 + 65 * i,770)
  }

  var cnt = 0
  for (var l = 0; l <= m; l++) {
    var id = '#equation'
    if (l) {
      var id = '#equation' + (l - 1)
    }
    console.log(id)
    var equation = document.querySelector(id).value
    console.log(equation)
    var pos = equation.indexOf('x')
    for (var i = 0; i < 1501; i += 0.05) {
      var x = i + ''
      if (x.length === 1) {
        equation[pos] = x
      }
      if (x.length === 2) {
        equation[pos] = x[0]
        equation[pos + 1] = x[1]
      }
      if (x.length === 2) {
        equation[pos] = x[0]
        equation[pos + 1] = x[1]
        equation[pos + 2] = x[2]
      }
      var y = eval(equation)
      let x1 = -i + 750
      let y1 = -y + 750
      ctx.beginPath();
      ctx.arc(x1, y1, 1, 0, 2*Math.PI);
      ctx.fillStyle = document.querySelector('#i' + cnt).value;
      ctx.fill()
    }
    if (l == m) {
      cnt++
    }
  }
}

ctx.beginPath();
ctx.moveTo(750, 0);
ctx.lineTo(750, 1500);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 750);
ctx.lineTo(1500, 750);
ctx.stroke();

for (var i = 0; i <= 55;i++) {
  ctx.beginPath()
  ctx.font = " 3 px 'PT Sans', sans-serif"
  ctx.fillText(5*i + '', 735, 770 + -65 * i)

  ctx.beginPath()
  ctx.font = " 3 px 'PT Sans', sans-serif"
  ctx.fillText(-5*i + '', 735 + -65 * i,770)
}

for (var i = 55; i >= 00000; i--) {
  ctx.beginPath()
  ctx.font = " 3 px 'PT Sans', sans-serif"
  ctx.fillText(-5*i + '', 735, 770 + 65 * i)

  ctx.beginPath()
  ctx.font = " 3 px 'PT Sans', sans-serif"
  ctx.fillText(5*i + '', 735 + 65 * i,770)
}