function Country(name, odds, continent) {
  this.name = name
  this.odds = odds
  this.continent = continent
}


function Continent() {
  this.EUROPE = "EU"
  this.ASIA = "AS"
  this.AFRICA = "AF"
  this.SOUTHAMERICA = "SA"
  this.NORTHAMERICA = "NA"
  this.AUSTRALIA = "AU"
}

function Person(name, surname, dateOfBirth) {
  this.name = name
  this.surname = surname
  this.dateOfBirth = new Date().getFullYear() - dateOfBirth
}


Person.prototype.getData = function () {
  return this.name + "  " + this.surname + " , " + this.dateOfBirth
}


function Player(person, betAmount, country) {
  this.person = person
  this.betAmount = betAmount
  this.country = country

}

Player.prototype.getData = function () {
  return this.country.name + ", " + this.betAmount + ", " + this.person.name + " " + this.person.surname + ", " + this.person.dateOfBirth
}


const Address = function (country, city, postalCode, street, number) {
  this.country = country
  this.city = city
  this.postalCode = postalCode
  this.street = street
  this.number = number
}

Address.prototype.getData = function () {
  return this.street + ", " + this.postalCode + "  " + this.city + ", " + this.country.name
}

function BettingPlace(address) {
  this.address = address;
  this.listOfPlayers = [];

}


BettingPlace.prototype.addPlayer = function (player) {
  return this.listOfPlayers.push(player)


}


BettingPlace.prototype.getData = function () {

  let sum = 0
  this.listOfPlayers.forEach((element) => {
    sum += element.betAmount
  })


  return this.address.street + ", " + this.address.postalCode + "  " + this.address.city + ", sum of all bets: " + sum + " eur"

}



function BettingHouse(competition) {
  this.competition = competition
  this.betting_places = []
}
BettingHouse.prototype.addPlaces = function (place) {
  this.betting_places.push(place)

}

BettingHouse.prototype.allBetingHouseData = function () {

  this.sumOfPlayers = function () {
    let result = 0
    for (var i = 0; i < this.betting_places.length; i++) {
      result += this.betting_places[i].listOfPlayers.length
    }

    return result

  }

  let all_data = this.competition + ", " + this.betting_places.length + " betting places, " + this.sumOfPlayers() + " bets" + "\n"
  for (let i = 0; i < this.betting_places.length; i++) {
    all_data += this.betting_places[i].getData() + "\n";

    for (let j = 0; j < this.betting_places[i].listOfPlayers.length; j++) {
      all_data += this.betting_places[i].listOfPlayers[j].getData() + "\n";
    }
  }

  let counter = 0
  this.betting_places.forEach((place) => {
    place.listOfPlayers.forEach((player) => {
      if (player.country.name === "Serbia") {
        counter++
      }
    })
  })


  return all_data + "\t" + "There are " + counter + " bets on Serbia"
}



function createPlayer(person, betAmount, country) {
  let player = new Player(person, betAmount, country)
  return player
}

function createBettingPlace(address) {
  var bettingPlace = new BettingPlace(address)
  return bettingPlace
}

let person_1 = new Person("Sanja", "Stosic", 1996)
let person_2 = new Person("Sonja", "Stosic", 1986)
let person_3 = new Person("Vanja", "Stosic", 1998)
let person_4 = new Person("Tanja", "Stosic", 1999)

let country_1 = new Country("Serbia", 33, Continent.EUROPE)
let country_2 = new Country("Germany", 45, Continent.EUROPE)

let player_1 = new Player(person_1, 22, country_1)
let player_2 = new Player(person_2, 22, country_1)
let player_3 = new Player(person_3, 22, country_2)
let player_4 = new Player(person_4, 22, country_2)
console.log(player_4)

let address_1 = new Address("Serbia", "Beograd", 11000, "Nemanjina", 4)
let address_2 = new Address("Serbia", "Beograd", 11000, "Nemanjina", 4)

let betting_place_1 = new BettingPlace(address_1)
let betting_place_2 = new BettingPlace(address_2)


betting_place_1.addPlayer(player_1)
betting_place_1.addPlayer(player_2)
betting_place_2.addPlayer(player_3)
betting_place_2.addPlayer(player_4)
console.log(betting_place_1.listOfPlayers)

let beting_house_1 = new BettingHouse("Football World Cup Winner")

beting_house_1.addPlaces(betting_place_1)
beting_house_1.addPlaces(betting_place_2)

//console.log(betting_place_1.listOfPlayers)
//console.log(beting_house_1.betting_places)
//console.log(beting_house_1.listOfPlayers)
console.log(beting_house_1.allBetingHouseData())

//  Football World Cup Winner, 2 betting places, 4 bets
// Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// SR, 1050.00 eur, Pera Peric, 29 years
// SR, 1050.00 eur, Pera Peric, 29 years
// Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// GR, 1050.00 eur, Pera Peric, 29 years
// SR, 1050.00 eur, Pera Peric, 29 years

// There are 3 bets on Serbia