// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, 1-2, -2, 1, 1]


let duplicate = function (array) {
  let newArr = []
  for (let index = 0; index < array.length; index++) {
    newArr.push(array[index])
    newArr.push(array[index])
  }
return newArr
}

let arr1 = [2, 4, 7, 11, -2, 1]
console.log(duplicate(arr1))


//2.	Write a functional expression that removes all duplicates in a given array.

//Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
//Output: [1, 4, 8, 9, 12, 13]

let deleteDuplicates = (array) => {
  let newArr = [];

  return (newArr = array.filter(
    (value, index) => array.indexOf(value) === index
  )).sort(function (a, b) {
    return a - b;
  })

}

console.log(deleteDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

//3.
//a.	Write a function that checks if a given array has odd number of elements.
//Input: [1, 2, 9, 2, 1]
//Output: true


function checkOddNumber(array) {
  if (array.indexOf(array[array.length - 1]) % 2 == 0) {
    return true;
  } else return false;
}

console.log(checkOddNumber([1, 2, 9, 2, 25]));

//b.	Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message.

//Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
//Output: 4

function lessThanMiddle(array) {
  let numberOfElementsLessThanMiddleValue = 0;
  if (array.length % 2 == 0) {
    return `ERROR`;
  }

  let middleValue = array[(array.length - 1) / 2];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < middleValue) {
      numberOfElementsLessThanMiddleValue++;
    }
  }
  return numberOfElementsLessThanMiddleValue;
}
console.log(lessThanMiddle([-1, 8.1, 3, 6, 44, 2.3, 2.11, 5, 0]));

//4.	Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.

//Input: [1, 4, -2, 11, 8, 1, -2, 3]​
//Output:  { minValue: -2, minLastIndex: 6 }

function smallestElement(array) {
  let minimum;
  minimum = array[0];
  let object = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
    }
  }
  let minLastIndex;
  minLastIndex = array.lastIndexOf(minimum);
  object.minValue = minimum;
  object.minLastIndex = minLastIndex;
  return object;
}

console.log(smallestElement([1, 4, -2, 11, 8, 1, -2, 3]));

// 5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]


function lessThan(array, el) {
  let newArr = []
  for (let index = 0; index < array.length; index++) {
    if (array[index] < el) {
      newArr.push(array[index])

    }
  }


  return newArr
}
var input = [2, 3, 8, -2, 11, 4];
var el = 6;

var output = lessThan(input, el);
console.log(output);

/*
function lessThan(array,el) {
    let newArr = []
    array =array.filter(function(elem) {
        return elem<el
             })
             return newArr.push(array)
}
var input = [2, 3, 8, -2, 11, 4];
var el = 6;

var output1 = lessThan(input, el);
console.log(output1);
*/
// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

var someArray = ["JavaScript", "Programming", "fun", "product"];

function substringElements (array) {
    var newArr = array.filter(function (element) {
        var lower = element.toLowerCase();
        return (lower.slice(0, 3) === "pro");
    });
    return newArr;
}

var res = substringElements(someArray);
console.log(res);


// *c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it


/*6.
a. 
Write a list (array) of products you usually buy in the supermarket. Write a price
and name for each product. For example,
[{name: ‘apples’, price: 100}, {name: ‘milk’, price: 80}, {name:’bananas’, price: 150}]*/


products = [{name: "apples", price: 100},
 {name: "milk", price: 80},
  {name:"bananas", price: 150}]

 // b. Write a function that calculates the total price of your shopping list.

 function totalPrice(array) {
    let sum = 0
   for (let index = 0; index < array.length; index++) {
    sum +=array[index].price

   }
   return sum
 }
 let priceTotal = totalPrice(products);
console.log(priceTotal);

//c. Write a function that calculates the average product price of your shopping list.
//Print this value with the precision of three decimals.


function threeDecimals(array) {
  let avg;
  let sum = 0;
  let index;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].price;
    index = i;
  }
  avg = sum / (index + 1);

  return avg.toFixed(3);
}

console.log(
  threeDecimals([
    { name: "apples", price: 100 },
    { name: "milk", price: 80 },
    { name: "bananas", price: 150 },
  ])
);

//d.	Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase.

function mostExpensive(array) {
  let productName;
  let maxPrice = array[0].price;
  for (let i = 0; i < array.length; i++) {
    if (array[i].price > maxPrice) {
      maxPrice = array[i].price;
      productName = array[i].name;
    }
  }
  return productName.toUpperCase();
}

console.log(
  mostExpensive([
    { name: "apples", price: 100 },
    { name: "milk", price: 80 },
    { name: "bananas", price: 150 },
  ])
);

//7

//a.	Write a function that checks if a given string is written in all capitals.

function isItAllUppercase(string) {
  let check;
  check = string.toUpperCase();
  if (string === check) {
    return true;
  } else return false;
}

console.log(isItAllUppercase("BEOgraD"));
console.log(isItAllUppercase("BEOGRAD"));

//b.	Write a function that checks if a given string contains any digits.

function containsNumbers(string) {
  let result;
  let numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < string.length; i++) {
    if (numberArr.includes(string[i])) {
      //   console.log(string[i]);
      result = true;
      break;
    } else {
      //   console.log(string[i]);
      result = false;
    }
  }
  return result;
}

console.log(containsNumbers("Javascripti"));
console.log(containsNumbers("Javascripti13"));

//c.	Write a function that checks if a given string is a valid hexadecimal color.

function validChar(string) {
  let numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let letterArr = ["a", "b", "c", "d", "e", "f"];

  for (let i = 1; i < string.length; i++) {
    if (numberArr.includes(string[i])) {
      continue;
    }
    if (letterArr.includes(string[i])) {
      continue;
    }
    if (
      letterArr.includes(string[i]) == false &&
      numberArr.includes(string[i]) == false
    ) {
      return `INVALID COLOR`;
    }
  }
  return true;
}

function validHexColor(string) {
  let hash, longString;

  string[0] === "#" ? (hash = true) : (hash = false);
  string.length == 7 ? (longString = true) : (longString = false);
  //   string.filter(function (element, index) {
  //     return element == numberArr[index];
  //   });
  let character = validChar(string);

  if (hash == true && longString == true && character == true) {
    return true;
  } else return false;
}

console.log(validHexColor("#ffffff"));

//d.	Write a function that checks if a given number belongs to the interval from 1900 to 2018.

function belongsToInterval(number) {
  if (number > 1900 && number < 2018) {
    return true;
  } else return false;
}

console.log(belongsToInterval(1524));

//e.	Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

function Validator(string, numberString, color, number) {
  this.stringValidator = isItAllUppercase(string);
  this.passwordValidator = containsNumbers(numberString);
  this.colorValidator = validHexColor(color);
  this.yearValidator = belongsToInterval(number);
}

let validate = new Validator("JAVASCRIPt", "javsc13ipt", "#f0f0f", 1997);

console.log(validate);

//8.	Write a function that calculates a number of days to your birthday.
//Input: 25 February
//Output: 5 days

function daysUntilBirthday(date) {
  let date_1 = new Date(date);
  let date_2 = new Date();
  console.log(date_2);
  //   console.log(date_2.getTime() / (24 * 60 * 60 * 1000));

  let difference = date_1.getTime() - date_2.getTime();
  difference = Math.round(difference / (24 * 60 * 60 * 1000));
  return difference;
}
console.log(daysUntilBirthday("04/13/2023"));

//9.	Write a function that for a given departure and arrival time calculates the time the trip takes.

//Input: 8:22:13 11:43:22

//Output: 3 hours 21 minutes 9 seconds

function tripTime(departure, arrival) {
  let diffArr = [];
  let partsOfTime = [];
  let hoursInSeconds;
  let minutesInSeconds;
  let seconds;
  let string = "";
  let timeArr = [departure, arrival];
  for (let i = 0; i < timeArr.length; i++) {
    let time = timeArr[i];
    console.log(time);
    time = time + ":";
    for (let j = 0; j < time.length; j++) {
      if (time[j] != ":") {
        string += time[j];
      } else if (time[j] == ":") {
        partsOfTime.push(string);
        string = "";
        console.log(partsOfTime);
      }
    }
    hoursInSeconds = Number(partsOfTime[0]) * 60 * 60;
    minutesInSeconds = Number(partsOfTime[1]) * 60;
    seconds = Number(partsOfTime[2]);
    let sumSeconds = hoursInSeconds + minutesInSeconds + seconds;
    diffArr.push(sumSeconds);
    console.log(diffArr);
    partsOfTime = [];
  }

  let diff = diffArr[1] - diffArr[0];
  console.log(diff);
  let newHours = Math.floor(diff / 3600);
  diff = diff - newHours * 3600;
  let newMinutes = Math.floor(diff / 60);
  diff = diff - newMinutes * 60;
  let newSecond = diff;

  return `${newHours} hours ${newMinutes} minutes ${newSecond} seconds`;
}
console.log(tripTime("8:22:13", "11:43:22"))



/*10.
a. Write a constructor function that creates points in space. Each point in space has
its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.*/


function Point(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

let pointsSpace = new Point(3, 5, 1);
let secondPoint = new Point(4, 2, 9);

//b. Write a function that calculates the distance between two points in the space.

function distance(p1, p2) {
  let result = Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y) + (p1.z - p2.z) * (p1.z - p2.z));
  return result.toFixed(3);
}
let pointResult = distance(pointsSpace, secondPoint);
console.log(pointResult);

//5
//a. Write a function that generates a random integer value between 5 and 20.

function randomInteger (min, max) {
  return ((max - min) * Math.random()) + min;

}

var result = randomInteger(5, 20);

//b. Write a function that generates a random integer value between 50 and 100.

var result1 = randomInteger(50, 100);
console.log(Math.floor(result1));

//c. Write a function which expects a number and a callback generator function and
//returns an array of numbers produced by the generator function.

function returnArr(num, callback) {
  let newArr = []

  for (let index = 0; index < num; index++) {
  let thisNumber =Math.floor( callback(2, 10))
   newArr.push(thisNumber)
  }
  return newArr
}

console.log(returnArr(4, randomInteger))

// 12. Write a function that shuffles the elements of a given array.

// Input: [3, 6, 11, 2, 9, 1]

// Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)

function shuffle(arr) {
  let newArr = []
   newArr = arr.sort(function() {
        return Math.random() - 0.5;
    });
   return newArr
}
console.log(shuffle([3, 6, 11, 2, 9, 1]));

function shuffle(array) {
  // debugger;
  let newArr = [];
  let i = 0;
  let numberOfLoops = 0;
  while (newArr.length != array.length || newArr.includes(undefined)) {
    numberOfLoops++;
    let j = Math.floor(Math.random() * array.length);
    if (newArr[j] != undefined) {
      continue;
    } else if (newArr[j] == undefined) {
      newArr[j] = array[i];
    }
    i++;
    if (i >= 6) {
      i = 0;
    }
  }
  console.log("number of loops is " + numberOfLoops);
  return newArr;
}

console.log(shuffle([3, 6, 11, 2, 9, 1]));