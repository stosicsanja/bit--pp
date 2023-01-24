class Car {
    constructor (brand, model, motion, speed) { 
    this.brand = brand
    this.model = model
    this.motion = motion
    this.speed = speed
}

checkMotion = function () {
    if (this.speed>0) { 
    return "The car is moving at speed " + this.speed + " km/h"
    } else return "The car is not moving"
}

accelerate = function (number) {
    return this.speed = (this.speed + number)
}

break = function (number) {
     this.speed = (this.speed - number)
     if (this.speed < 0) {
        return "The car is not moving anymore"
    } else return "The car is moving at speed " + this.speed + " km/h"
     }
    

statusCar = function () {
        return this.brand + " " + this.model + " is " + this.motion + " "  + this.speed + " km/h, car is moving"
    }   

stop = function () {
    this.speed = 0
    return this.speed + " is speed of car, the car is not moving anymore"
}    
}

let car_1 = new Car ("Toyota", "Camry", "running", 150)
let car_2 = new Car ("Toyota", "Camry", "running", 100)
let car_3 = new Car ("Toyota", "Camry", "running", 200)
console.log(car_1.checkMotion())
console.log(car_2.accelerate(2))
console.log(car_1.break(100))
console.log(car_1.statusCar())
console.log(car_3.stop())

console.log("--------------------------------")

class TV {
    constructor (brand) { 
    this.brand = brand
    this.channel = 1
    this.volume = 50
    //this.tvReset()
}

increase = function () {
      this.volume = this.volume+1
if (this.volume > 100) {
    return false
} else return this.volume
}

decrease = function () {
     this.volume = this.volume-1
if (this.volume < 0) {
  return false
} else return this.volume
}

setChanel = function () {
 if (this.channel >= 1 && this.channel <= 50) {
    return "It is corect channel" 
 } else return "Channel can't never above 50."
}   
tvReset = function() {
    this.channel = 1;
    this.volume = 50;
  }

status = function () {
     return this.brand + " at channel " +  this.channel  + ", volume " + this.volume
}
 }

let tv_1 = new TV ("Samsung")
console.log(tv_1.increase())
console.log(tv_1.decrease())
console.log(tv_1.decrease())
console.log(tv_1.setChanel())
console.log(tv_1.status())


