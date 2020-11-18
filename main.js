alert('This is an autonomous steering body created by Nirmal Thomas. Inspired by steering behaviour illustration by Daniel Shiffman')
var vehicle, target, theif
function setup(){
  vehicle = new Boid(100, 100)
  target = new Boid(200, 200)
  theif = new Boid(250, 250)
  createCanvas(windowWidth, windowHeight)
}

function draw(){
  background(51)
  stroke(color(0, 240, 0))
  vehicle.show()
  vehicle.update()
  vehicle.behaviours()
  stroke(color(240, 0, 0))
  target.show()
  vehicle.target = target.pos
}

function touchStarted(){
  target.pos.x = mouseX
  target.pos.y = mouseY
}

function touchMoved (){
  target.pos.x = mouseX
  target.pos.y = mouseY
}