function Boid(x, y){
  this.pos = createVector(x, y)
  this.vel = createVector()
  this.acc = createVector()
  this.target = createVector(200, 200)
  this.maxSpeed = 5
  this.maxForce = 0.3
}

Boid.prototype.show = function(){
  strokeWeight(8)
  point(this.pos.x, this.pos.y)
}

Boid.prototype.update = function(){
  this.pos.add(this.vel)
  this.vel.add(this.acc)
  this.acc.mult(0)
}

Boid.prototype.applyForce = function(force){
  this.acc.add(force)
}

Boid.prototype.behaviours = function(){
  var seek = this.arrive(this.target)
  this.applyForce(seek)
}

Boid.prototype.arrive = function(target){
  var desired = p5.Vector.sub(target, this.pos)
  var speed = this.maxSpeed
  var distance = desired.mag()
  if (distance < 100) {
    speed = map(distance, 0, 100, 0, this.maxSpeed)
  }
  desired.setMag(speed)
  var steer = p5.Vector.sub(desired, this.vel)
  steer.limit(this.maxForce)
  return steer
}

Boid.prototype.seek = function(target){
  var desired = p5.Vector.sub(target, this.pos)
  desired.setMag(this.maxSpeed)
  var steer = p5.Vector.sub(desired, this.vel)
  steer.limit(this.maxForce)
  return steer
}

Boid.prototype.flee = function(target){
  var desired = p5.Vector.sub(target, this.pos)
  desired.setMag(this.maxSpeed)
  desired.mult(-1)
  var steer = p5.Vector.sub(desired, this.vel)
  steer.limit(this.maxForce)
  return steer
}