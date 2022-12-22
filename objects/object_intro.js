let coffe = {
    name : "Turkish" ,
    strength: "very strong", 
    milk: "no",
    sugar: "yes"
}

let film = {
    title: "Into the wild",
    actors: ["Chris McCandless", "Wayne Westerberg", "Jan Burres"],
    director: "Sean Penn",
    genre: "adventure",
    popularity: 938
}

// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.
function Project (desc, pro_lang, git_repo, in_devolopment) {
    this.desc = desc
    this.pro_lang = pro_lang
    this.git_repo = git_repo
    this.in_devolopment = in_devolopment
}

let myProject = new Project ("Some project", "JavaScript", "https/some_project/..", true)

myProject.printRepo = function () {
    return this.desc
}

myProject.whichLang = function () {
    if (this.pro_lang=="JavaScript") {
        return true 
    } else {
        return false
    }

}

myProject.inDevolpment = function () {
    if (this.in_devolopment) {
        return true 
    } else {
        return false
    }

}

console.log(myProject.printRepo())
console.log(myProject.whichLang())
console.log(myProject.inDevolpment())

/*
4. Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared in under 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients.
*/

function Recepes(name, type_of_cuisine,complexity, listOfing,preparing_time, preparing_instruction) {
this.name =name
this.type_of_cuisine= type_of_cuisine
this.complexity=complexity
this.listOfing=listOfing
this.preparing_time=preparing_time
preparing_instruction=preparing_instruction
}
let recipe = new Recepes ( 
     "Pizza",
     "Italian kitchen",
     3,
     ["dough", "ketchep","cheese"],
     12,
     "3 steps"
)
    recipe.necessaryIng = function () {
        return this.listOfing
    }
    recipe.isUnder = function () {
        return this.preparing_time < 15 ? true : false;
      };
    recipe.changeType = function (newType) {
        this.type = newType;
        return newType
    }
    recipe.deleteIng = function (ing) {
     this.listOfing = this.listOfing.filter(function(el){
        return el !== ing
     })
    }

recipe.deleteIng("dough")

    console.log(recipe.necessaryIng())
    console.log(recipe.isUnder())
    console.log(recipe.changeType("new type"))
    console.log(recipe.listOfing)
// 1.	Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }


function Products(product, quantity, price) {
        this.product = product,
        this.quantity = quantity,
        this.price = price
}

let groceries = function(array) {
    let  sum = 0
    for (let index = 0; index < array.length; index++) {
     sum += array[index].quantity * array[index].price
        
    }
    return sum
}

console.log(groceries([
    {
          product: "Milk",
          quantity: 1,
          price: 4,
        },
        {
            product: "Suger",
            quantity: 2,
            price: 2,
          }
])
)

// 2.	You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price. Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".
// Example:
// mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold watch’, price:250}, …])
// 	- The most expensive one is the diamond Ring.

let jewelry= [ 
   {
        name: 'Golden Earings',
        price: 200
    },
    {
        name: 'Golden Watch',
        price:1145
    },
   {
        name: 'Diamond Bracelet',
        price: 850
    }
     ]
  let jewelryOne = jewelry.slice(0);
    jewelryOne.sort(function(a,b) {
        return b.price - a.price;
         }
    )
    let maxNumber = `The most expensive one is ${jewelryOne[0].name}`
    

console.log(maxNumber)


// 3.	Given a word, create an object that stores the indexes of each letter in an array. Make sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes are stored in an array and those arrays are values.
// Examples:
// mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }

// mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

// mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

function mapLetters(string) {
    
    let splitStr = string.split("")
    let newPair = splitStr.map((item,index) => {
        return `${item}: [${index}]`
    }
    )
    return newPair
}

console.log(mapLetters("Sanja"))


// 4.	And who cursed the most in the fight between you and your spouse? Given an object with three rounds, with nested objects as your scores per round, return a string of who cursed the most: If you, return "ME!" If your spouse, return "SPOUSE!" If a draw, return "DRAW!"
// Examples:
// determineWhoCursedTheMost([{me: 10,    spouse: 5  },  {    me: 5,    spouse: 10  },   
// {    me: 0, spouse: 10,  }]) ➞ "DRAW!"
// determineWhoCursedTheMost([{me: 40,spouse: 5}, {me: 9, spouse: 10}, { me: 9,  spouse: 10}]) ➞ "ME!"
// determineWhoCursedTheMost([{ me: 10,spouse: 5 }, { me: 9,  spouse: 44 }, { me: 10,    spouse: 55}]) ➞ "SPOUSE!"
//  

let round1 = [{me: 10,    spouse: 5  },  {me: 5,    spouse: 10  },   
     {    me: 0, spouse: 10,  }]

let round2 = [{me: 40,spouse: 5}, {me: 9, spouse: 10}, { me: 9,  spouse: 10}] 

let round3 = [{ me: 10,spouse: 5 }, { me: 9,  spouse: 44 }, { me: 10,    spouse: 55}]

function me(array) {
    let sumMe = 0
    for (let i = 0; i< array.length; i++)
{
    sumMe += array[i].me
} 
    return sumMe    
}
//console.log(me(round1))

function spouse(array) {
    let sumSpouse = 0
    for (let i = 0; i< array.length; i++)
{
    sumSpouse += array[i].spouse
   }   

    return sumSpouse   
}
//console.log(spouse(round2))

function determineWhoCursedTheMost() {
    let meCursed = me(round2)
    let spouseCursed = spouse(round2)

    if (meCursed>spouseCursed) {
        return "ME" 
    } else if (meCursed<spouseCursed) {
        return "SPOUSE" 
    } else  if (meCursed==spouseCursed) {
        return "DRAW"
    }
}

console.log(determineWhoCursedTheMost())
// 5.	Create a function that converts color in RGB format to Hex format.
// Examples:
// rgbToHex({red: 0, green: 128,  blue: 192}) ➞ "#0080c0"

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
  
  console.log(rgbToHex(0, 51, 255))

// 6.	Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks down the most efficient way that change can be made using USD quarters, dimes, nickels and pennies. Your function should return an object.
// Coin	Value
// Penny	0.01
// Nickel	0.05
// Dime	0.10
// Quarter	0.25

// Examples:
// makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }

// makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }

// makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }


function makeChange(num) {
    var combo = {};
    var count = 0;
    while (num > 25) {
        num = num - 25;
        count++;
    }
    combo.q = count;
    count = 0;
    while (num > 10) {
        num = num - 10;
        count++;
    }
    combo.d = count;
    count = 0;
    while (num > 5) {
        num = num - 5;
        count++;
    }
    combo.n = count;
    count = 0;
    while (num >= 1) {
        num = num - 1;
        count++;
    }
    combo.p = count;
    return combo;
}
console.log(makeChange(92));


// 7.	Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If student has no notes (an empty array) then let's assume avgNote: 0.
// Examples:
// [
//   { name: "John", notes: [3, 5, 4]}
// ] 
// ➞ 
// [
//   { name: "John", avgNote: 4 }
// ]

//let note = [   { name: "John", notes: [3, 5, 4]} ] 

let nameAndNotes = [
    { name: "John", notes: [3, 5, 4]},
    ]
function notesAvg(arr) {
   for (let index = 0; index < arr.length; index++) {
  for (let j = 0; j < nameAndNotes[index].notes.length; j++) {
    const note = nameAndNotes[index].notes.reduce((acc, curV) => acc+curV, 0)
    return `name: ${arr[index].name}, avgNote: ${note/nameAndNotes[index].notes.length} `
  }
   }
}

console.log(notesAvg(nameAndNotes))


// 8.	Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average.
//The key will be the student's name and the value will be an array of their grades. You will only have to return the student's name.
//You do not need to return their Test Average.
// getBestStudent([{  name: ‘John’, grades: [100, 90, 80]}, {name: ‘Bob’, grades: [100, 70, 80]}…]) ➞ "John" // John's avg


function getBestStudent (array) {
    let sum = 0
    let avg = 0
    let maxAvg = 0
    let bestStudent = ""
    let object = {}
    for (let index = 0; index < array.length; index++) {
        
        for (let j = 0; j < array[index].grades.length; j++) {
           sum += array[index].grades[j]
           avg = Math.round (sum/ array[index].grades.length)
           
        }
        object.name = array[index].name
        object.testAverage = avg

        if (avg>maxAvg) {
            maxAvg=avg
            bestStudent = array[index].name
        }
    }

 return bestStudent
}

console.log(
    getBestStudent([
      { name: "John", grades: [100, 90, 80] },
      { name: "Sofi", grades: [100, 70, 70] },
      { name: "Boris", grades: [100, 120, 80] }
    ]))