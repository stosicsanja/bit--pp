"use strict"

function Person(name,surname) {
    this.name = name
    this.surname = surname
    this.getData = function () {
      let name_and_surname = ""
      return name_and_surname = this.name + " " + this.surname
    }
}
let person_1 = new Person("Sanja", "Stosic")
console.log(person_1.getData())

function Seat(number,category) {
    this.number = number
    this.category = category
    this.getData = function () {
        let number_and_category = ""
        return number_and_category = this.number + " , " + this.category.toUpperCase()
      }
}

let seat_1 = new Seat (4, "b")
console.log(seat_1.getData())

function Passenger(person,seat) {
    this.person = person.getData()
    this.seat = seat.getData()
    this.getData = function () {
        let person_and_seat = ""
        return person_and_seat= this.seat + ", " + this.person
      }

}

function createPassenger(name, last_name, seat_number, category) {
    let person = new Person (name, last_name)
    let seat = new Seat (seat_number,category)
        return new Passenger(person,seat)
    
}

function Flight (relation,date) {    
    this.relation = relation
    this.date = new Date().toLocaleDateString("en-US")
    this.passengers = []
}


function createFlight(relation,date){
  return new Flight(relation,date)
}  


   Flight.prototype.addPassenger = function (pass) {
       return this.passengers.push(pass)
        }
        
        Flight.prototype.getData =  function () {
            let string = this.date + ", " + this.relation + "\n\t"
            for (let index = 0; index < this.passengers.length; index++) {
               string +=  "\n\t" + this.passengers[index].getData()
             }  
             return string;
          }

        Flight.prototype.totalPass =  function () {
             return this.passengers.length
          }
        




function Airport(name) {
this.name = "Nikola Tesla"  
this.list_of_flight = []  
}

Airport.prototype.addFlight = function (flight) {
  return this.list_of_flight.push(flight)
   }


Airport.prototype.getData =  function () {
 //funkcija za ukupan broj putnika
  var allPassengers = 0;
  for (var i = 0; i < this.list_of_flight.length; i++) {
      allPassengers += this.list_of_flight[i].totalPass()
  }


  let string = 'Airport: '+this.name  + ", total passengers: " + allPassengers
+'\n' 
  for (let index = 0; index < this.list_of_flight.length; index++) {
     string +=  "\n\t" + this.list_of_flight[index].getData()+'\n'
   }  
   return string;
}


let passenger1 = createPassenger("Sanja", "Stosic", 4, "G")
let passenger2 = createPassenger ("Milica", "Mitic", 5, "b")
let passenger3 = createPassenger ("Mila", "Matic", 3, "c")
let passenger4 = createPassenger ("Mina", "Milic", 2, "c")

let flight1=createFlight('Belgrade - New York');
let flight2=createFlight('Barcelona - Bg');

flight1.addPassenger(passenger1)
flight1.addPassenger(passenger2)
flight2.addPassenger(passenger3)
flight2.addPassenger(passenger4)


let airport1 = new Airport ()
airport1.addFlight(flight1)
airport1.addFlight(flight2)


console.log(airport1.getData())