/*
a)Create a Car class with properties (brand, model, motion) and methods (check motion, accelerate, break).
Check motion method should check the speed and returns if the car are in move or not (speed is greater than zero). Accelerate method should increase the speed for some number we provide.
Break method should decrease the speed for the number we provided (pay attention if the speed is negative number after decreasing).
b) Add the status method that displays all current data for the car (model, brand, motion state, speed => something like "Ford Mondeo is running at 150km/h, car is moving").
c) Add a new method to stop the car immediately (set the speed to 0). It doesn't need parameters.
d) Create a 3 car objects and test it!
*/

function Car(brand, model, motion, speed) {
    this.brand = brand
    this.model = model
    this.motion = motion
    this.speed = speed
}

Car.prototype.checkMotion = function () {
    if (this.speed>0) { 
    return "The car is moving at speed " + this.speed + " km/h"
    } else return "The car is not moving"
}

Car.prototype.accelerate = function (number) {
    return this.speed = (this.speed + number)
}

Car.prototype.break = function (number) {
     this.speed = (this.speed - number)
     if (this.speed < 0) {
        return "The car is not moving anymore"
    } else return "The car is moving at speed " + this.speed + " km/h"
     }

Car.prototype.status = function () {
        return this.brand + " " + this.model + " is " + this.motion + " "  + this.speed + " km/h, car is moving"
    }   

Car.prototype.stop = function () {
    this.speed = 0
    return this.speed + " is speed of car, the car is not moving anymore"
}    

let car_1 = new Car ("Toyota", "Camry", "running", 150)
let car_2 = new Car ("Toyota", "Camry", "running", 100)
let car_3 = new Car ("Toyota", "Camry", "running", 200)
console.log(car_1.checkMotion())
console.log(car_2.accelerate(2))
console.log(car_1.break(100))
console.log(car_1.status())
console.log(car_3.stop())

/*
a)Create a TV class with properties like brand, channel and volume. Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
b) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
c) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
d) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
e) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
f) Create a TV object and test it!
*/

function TV(brand) {
    this.brand = brand
    this.channel = 1
    this.volume = 50
    //this.tvReset()
}

TV.prototype.increase = function () {
      this.volume = this.volume+1
if (this.volume > 100) {
    return false
} else return this.volume
}

TV.prototype.decrease = function () {
     this.volume = this.volume-1
if (this.volume < 0) {
  return false
} else return this.volume
}

TV.prototype.setChanel = function () {
 if (this.channel >= 1 && this.channel <= 50) {
    return "It is corect channel" 
 } else return "Channel can't never above 50."
}   

TV.prototype.tvReset = function() {
    this.channel = 1;
    this.volume = 50;
  }

TV.prototype.status = function () {
     return this.brand + " at channel " +  this.channel  + ", volume " + this.volume
}

let tv_1 = new TV ("Samsung")
console.log(tv_1.increase())
console.log(tv_1.decrease())
console.log(tv_1.decrease())
console.log(tv_1.setChanel())
console.log(tv_1.status())


