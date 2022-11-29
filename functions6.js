//1. Write a function that rotates a list by k elements.
//For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

"use strict"


//KOMENTAR: Zadatak nije dobro uradjen jer pise da se lista rotira za K elemenata.
// To znaci da je jedan od ulaznih parametara K, broj mesta za rotaciju.
// Uz tu ispravku ce biti tacan
function rotate(arr = []) {
    let newArr = arr.slice(0, 2);
    let restArr = arr.slice(2);
    return restArr.concat(newArr);
  }
  
  console.log(rotate([1, 2, 3, 4, 5, 6]));

//2. Write a function that takes a number and returns array of its digits.
  function Digit(arr) {
    return arr.toString().split("").map(Number)
    }
  
  console.log(Digit(123));

//3. Write a program that prints a multiplication table for numbers up to 12. 

  function multiplication(number) {
    let result = 0
  
    for(let i = 1; i <= number; i++) {
        const result = i * number;
        console.log(`${number} * ${i} = ${result}`);
    }
  }
  multiplication(12)

//4. Write a function to find the maximum element in array of numbers. Filter out all non-number
//elements.

function maxValue(arr1) {
let newArr = arr1.filter(Number)
return Math.max(...newArr)
}

console.log(maxValue([2, 6, 7, undefined, NaN, null]));

//5. Napisati funkciju koja vraca najveci I najmanji element niza. Rezultat prikazati kao niz.

function minMix(arr) {
  let minArr = Math.min(...arr)
  let maxArr = Math.max(...arr)
  return [minArr,maxArr]
}
console.log(minMix([2,4,6,7]));

/*6. Napisati funkciju koja vraća medijanu niza. (Medijana je “srednji” broj niza kada su brojevi
  poređani od najmanjeg do najvećeg ako niz ima neparan broj elemenata. Ako ima paran
  broj onda se medijana definiše kao aritmetička sredina dve srednje vrednosti).*/


  function medianOfArray(array) {
    var result;
    if (array.length % 2 === 0) {
      result = (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
      return result;
    } else {
      result = array[array.length / 2 - 0.5];
      return result;
    }
  }
console.log(medianOfArray([1, 2, 3, 4, 5,6]));


/*7. Write a function to find and return the first, middle and last element of an array if the array
has odd number of elements. If number of elements is even, return just the first and the
last. In other cases (empty array), input array should be returned.*/

function returnElement (array) {
  var newArr = [];
  if(array.length === 0 ) {
      newArr = array;
  }
  for (var i = 0; i < array.length; i++){
      if (array.length % 2 === 0) {
          newArr[newArr.length] = array[0];
          newArr[newArr.length] = array[array.length-1];
      } else {
          newArr[newArr.length] = array[0];
          newArr[newArr.length] = array[((array.length-1)/2)]; 
          newArr[newArr.length] = array[array.length-1];
      }
      return newArr;
  }
}

console.log(returnElement([1,2,3,4,5]));

/*8. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters.*/


function averageElement () {
  var result = 0
  var average

  for (var i = 0; i < arguments.length; i++) {
      result += arguments[i]
  }
  average = result / arguments.length
  return average
}
console.log(averageElement(1,2,3,4,5))

//9. Write a function to find all the numbers greater than the average.


function greaterThanAverage () {
  var result = 0
  var average
  var greater = []
  
  for (var i = 0; i < arguments.length; i++) {
      result += arguments[i]
  }
  average = result / arguments.length

  for (var j = 0; j < arguments.length; j++) {
      if (arguments[j] > average) {
          greater[greater.length] = arguments[j]
      }
  }
  return greater
}



console.log(greaterThanAverage(1,2,3,4,5))


/*
10. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
 Starvation: less than 15
 Anorexic: less than 17.5
 Underweight: less than 18.5
 Ideal: greater than or equal to 18.5 but less than 25
 Overweight: greater than or equal to 25 but less than 30
 Obese: greater than or equal to 30 but less than 40
 Morbidly obese: greater than or equal to 40*/

function BMI(weight, height) {
  var sqHeight = height * height
  var index = weight / sqHeight
  var result = ""

  if (index < 15) {
      result += "Starvation"
  } else if (index < 17.5) {
      result += "Anorexic"
  } else if (index < 18.5) {
      result += "Underweight"
  } else if (index >= 18.5 && index < 25) {
      result += "Ideal!"
  } else if (index >= 25 && index < 30) {
      result += "Overweight!"
  } else if (index >= 30 && index < 40) {
      result += "Obese!"
  } else if (index >= 40) {
      result += "Morbidly obese!"
  }
  return result
}

console.log(BMI(106, 1.88))

/*11. Write a function that takes a list of strings and prints them, one per line, in a rectangular
frame.:
For example the list [&quot;Hello&quot;, &quot;World&quot;, &quot;in&quot;, &quot;a&quot;, &quot;frame&quot;] gets
printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
**********/
function frame(array) {
  var limiter = 0
  var frame = ""
  var inFrame = ""
  var string = ""

  for (var i = 0; i < array.length; i++) {
    if (array[i].length > limiter) {
      limiter = array[i].length
    }
    inFrame += "* " + array[i] + " *" + "\n"
  }
  for (var j = 0; j < limiter + 4; j++) {
    frame += "*"
  }
  string = frame + "\n" + inFrame + frame
  return string
}


console.log(frame(["Hello", "World", "in", "a", "frame"]));


// KOMENTAR: Ovaj zadatak verovatno nisi dobro iskopirala, ne radi kako je ocekivano. Sta nije dobro? Sam okvir od zvezdica.
// Uporedi sa mojim zadatkom koji sam uradio na casu kako se ispisuje, videces razliku.
