var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var dead1 = false;
var dead2 = false;
var pos1 = [250,0];
var pos2 = [250,0];
var face_direction1 = 'up'; 
var face_direction2 = 'up';
var mover1 = 0
var movel1 = 0
var mover2 = 0
var movel2 = 0

function moveRight1 () {
  if (!mover1) {
    move1(face_direction1)
    mover1++
  }
  if (!dead1) {
    if (face_direction1 === 'up') {
      face_direction1 = 'right'
    }
    else if (face_direction1 === 'right') {
      face_direction1 = 'down'
    }
    else if (face_direction1 === 'down') {
      face_direction1 = 'left'
    }
    else if (face_direction1 === 'left') {
      face_direction1 = 'up'
    }
  }
}

function moveleft1 () {
  if (!movel1) {
    move1(face_direction1)
    movel1++
  }
  if (!dead1) {
    if (face_direction1 === 'up') {
      face_direction1 = 'left'
    }
    else if (face_direction1 === 'right') {
      face_direction1 = 'up'
    }
    else if (face_direction1 === 'down') {
      face_direction1 = 'right'
    }
    else if (face_direction1 === 'left') {
      face_direction1 = 'down'
    }
  }
}

function moveRight2 () {
  if (!mover2) {
    move2(face_direction2)
    mover2++
  }
  if (!dead2) {
    if (face_direction2 === 'up') {
      face_direction2 = 'right'
    }
    else if (face_direction2 === 'right') {
      face_direction2 = 'down'
    }
    else if (face_direction2 === 'down') {
      face_direction2 = 'left'
    }
    else if (face_direction2 === 'left') {
      face_direction2 = 'up'
    }
  }
}

function moveleft2 () {
  if (!mover2) {
    move2(face_direction2)
    mover2++
  }
  if (!dead2) {
    if (face_direction2 === 'up') {
      face_direction2 = 'left'
    }
    else if (face_direction2 === 'right') {
      face_direction2 = 'up'
    }
    else if (face_direction2 === 'down') {
      face_direction2 = 'right'
    }
    else if (face_direction2 === 'left') {
      face_direction2 = 'down'
    }
  }
}

function move1 (direction) {
  direction = face_direction1
  console.log(direction)
  if (!dead1) {
    if (direction === 'up') {
      ctx.moveTo(pos2[0],pos2[1])
      ctx.lineTo(pos2[0],pos2[1] + 10)
      pos1[1] = pos1[1] + 10
    }
    if (direction === 'down') {
      ctx.moveTo(pos2[0],pos2[1])
      ctx.lineTo(pos2[0],pos2[1] + 10)
      pos1[1] = pos1[1] - 10
    }
    if (direction === 'left') {
      ctx.moveTo(pos2[0],pos2[1])
      ctx.lineTo(pos2[0],pos2[1] + 10)
      pos1[0] = pos1[0] - 10
    }
    if (direction === 'right') {
      ctx.moveTo(pos2[0],pos2[1])
      ctx.lineTo(pos2[0],pos2[1] + 10)
      pos1[0] = pos1[0] + 10
    }
    console.log(pos1) 
    setTimeout(move1,1000)
  }
}


function move2 () {
  console.log(face_direction2)
  let direction = face_direction2
  if (!dead2) {
    if (direction === 'up') {
      ctx.beginPath();
      ctx.moveTo(pos2[0],pos2[1])
      ctx.lineTo(pos2[0],pos2[1] + 10)
      ctx.stroke();
      console.log(`draw ${pos2}`)
      pos2[1] = pos2[1] + 10
    }
    if (direction === 'down') {
      ctx.moveTo(pos2[0],pos2[1])
      ctx.lineTo(pos2[0],pos2[1] + 10)
      pos2[1] = pos2[1] - 10
    }
    if (direction === 'left') {
      ctx.moveTo(pos2[0],pos2[1])
      ctx.lineTo(pos2[0],pos2[1] + 10)
      pos2[0] = pos2[0] - 10
    }
    if (direction === 'right') {
      ctx.moveTo(pos2[0],pos2[1])
      ctx.lineTo(pos2[0],pos2[1] + 10)
      pos2[0] = pos2[0] + 10
    }
    ctx.beginPath();
    ctx.strokeStyle = "#FF0000";
    ctx.moveTo(pos2[0],pos2[1])
    ctx.lineTo(pos2[0],pos2[1] + 10)
    ctx.stroke();
    console.log(`draw ${pos2}`)
    console.log(pos2)
    setTimeout(move2,1000)
  }
}

document.addEventListener('keydown', event => {

  console.log('Keydown')
  //movement for player 1
  if (event.code === 'KeyA') {
    moveRight1()

  }

  if (event.code === 'KeyD') {
    moveleft1()
  }

  //movement for player 2
  if (event.code === 'ArrowLeft') {
    moveleft2()
  }

  if (event.code === 'ArrowRight') {
    moveRight2()
  }
})  