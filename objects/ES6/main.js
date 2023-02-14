//Write a function that capitalizes the first letter of each string argument it receives.
//Function arguments: ["hello", "there", "ES", 6]
//Output: ["Hello", "There", "ES"]


let array = ["hello", "there", "ES", 6]

function CapitalizesFirst(arr) {
    let newArr = []
     arr.forEach((element) => {
            if (typeof element == "string") {
       newArr.push(element[0].toUpperCase() + element.slice(1))
     }})
     return newArr
   
}

console.log(CapitalizesFirst(array))

// Write a function that calculates sale tax that should be paid for the product of the given price.
// Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
// Input: [{ name: “Banana”, price: 120 }, {name: “Orange”, price: 100}]
// Output: [{ name: “Banana”, price: 144 }, { name: “Orange”, price: 120 }] // product full price
// Output2: [ 24, 20 ] // tax only



function calculateSaleTax(obj) {
    const tax = 0.2
    let taxOnly =[]
    let productPrice= []
    obj.forEach((element) => {
       
        productPrice.push({
            name: element.name,
            price: element.price + (element.price*tax )
          })
          taxOnly.push(element.price*tax )
})
    
    return [productPrice, taxOnly]
}
const [productPrice, taxOnly] = calculateSaleTax([{ name: "Banana", price: 120 }, {name: "Orange", price: 100}]
)
console.log(productPrice)
console.log(taxOnly)

// Write a function that increases each element of the given array by the given value. If the value is
// omitted, increase each element of the array by 1.
// Input: [4, 6, 11, -9, 2.1], 2
// Output: [6, 8, 13, -7, 4.1]

function increaseBy(array, number) {
    let newArr = []
    array.forEach((element) => {
        if(!number) {
         element = element+1
         } else { 
         element = element+number
        }

      newArr.push(element)
     })
    return newArr

    

}
console.log(increaseBy([4, 6, 11, -9, 2.1], 2))
console.log(increaseBy([4, 6, 11, -9, 2.1]))



// Write a function that filters all even elements of the array.
// Input: [6, 11, 9, 0, 3]
// Output: [6, 0]

function filterEven(array) {
   let newArr = array.filter((element) => 
        element%2===0
    )
    return newArr
}

console.log(filterEven([6, 11, 9, 0, 3]))


// Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// 	Output: ['babel.js, 'JS standard']

function filterJS(array) {
    let newArr = array.filter((element) => 
         element.toUpperCase().includes("JS")
     )
     return newArr
 }
 
 console.log(filterJS( ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']))



// Write a function that filters all integer numbers from the given array. 
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]


function filterInteger (arr) {
  return arr.filter((number) => 
  number === Number.parseInt(number))
}

console.log(filterInteger([1.6, 11.34, 9.23, 7, 3.11, 8]))

// Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
// 	Output: [45, 553]
function filterFigit5 (arr) {
    let newArr = []
    arr.forEach((number) => { 
    if ( number === parseInt(number) && number.toString().includes(5)) {
      newArr.push((number))
    }

}
) 
   return newArr
  }
  
  console.log(filterFigit5([ 23, 11.5, 9, 'abc', 45, 28, 553]))

//   Write a function that returns indexes of the elements greater than 10. 
// 	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// 	Output: [1, 2, 5]

function indexGreaterThan10(arr) {
    let newArr = []
    arr.forEach((element,index) => {
       if (element>10) {
        newArr.push(index)
       }
    })
    return newArr
}

console.log(indexGreaterThan10([1.6, 11.34, 29.23, 7, 3.11, 18]))

// a. Create an array of persons. A person should be an object with name and age properties.
// Experiment with enhanced object literals.

const persons = [
    {
      name: "Sanja",
      age: 25,
    },
    {
      name: "Marija",
      age: 37,
    },
    {
      name: "Jelena",
      age: 41,
    },
    {
      name: "Romana",
      age: 18,
    },
    {
      name: "Tanja",
      age: 48,
    },
  
  ]


// b. Write a function that prints out the names of persons older than 25.

function namesOlderThan25(array) {
    let newArr = []
    array.filter((element) => {
      if(element.age>25) {
        newArr.push(element.name)
      }
    })
    return newArr
}

console.log(namesOlderThan25(persons))

// c. Write a function that check if there is a person older than 40.

function namesOlderThan40(array) {
    return array.find((element) => 
      element.age>40
    
    )
}

console.log(namesOlderThan40(persons))

// d. Write a function that checks if all persons are older than 20.

function personsOlderThan20(array) {
    return array.every((element) => 
      element.age>20
    )
}

console.log(personsOlderThan20(persons))

// Write a function that checks if the given array is an array of positive integer values. 
// 	Input: [3, 11, 9, 5, 6]
// 	Output: yes
// 	Input: [3, -12, 4, 11]
// 	Output: no

function positiveInteger(array) {

 return array.every((number) =>  
 number === Number.parseInt(number) && number>0) 
    

}
console.log(positiveInteger([3, 11, 9, 5, 6.6]))
console.log(positiveInteger([3, -11, 9, 5, 6]))

// Write a function that calculates the product of the elements of the array. 
// Input: [2, 8, 3]
// Output:  48

function calculatesProduct (arr) {
    return arr.reduce((value, acc) => 
    (value *= acc), 1)
  }
  
  console.log(calculatesProduct([2, 8, 3]))

//   Write a function that calculates the maximum of the given array. 
// Input: [2, 7, 3, 8, 5.4] 
// 	Output: 8

function maximum(arr) {
    arr.sort((a, b) => b - a)
   return arr[0]
    //return Math.max(...arr)
}
console.log(maximum([2, 7, 3, 8, 5.4]))