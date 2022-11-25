
/*1. Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]*/

(function (arr) {
 [arr[0], arr[arr.length-1]]=[arr[arr.length-1],arr[0]]
 console.log(arr)
 return arr  
}
)([4, 5, 11, 9])


  /*2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20*/
 var calculate = (function(a, b){
  return a*b;
 })(5,6)

 console.log(calculate)


/*
3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
number of replacements.
Input: prograMming
Output: progra**ing, 2
*/

let appearances = (function (str) {
    let changed = ""
    let counter = 0
   
  for (let index = 0; index < str.length; index++) {
    if (str[index]==="m" || str[index] === "M") {
      changed+= "*"
      counter++
    } else {
      changed +=str[index]
    }
  }
  console.log(changed, counter)
  return [changed,counter]
})("prograMming")



/*
  4. Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com*/

let nameSurname = (function (name, surname) {
 return `${name}.${surname}@gmail.com `
  
})("pera","peric")

console.log(nameSurname) 

/*
5. Write a function that returns a function that calculates a decimal value of the given octal
number.
Input: 034
Output: 28
*/

let octal = (function (num) {
  let octalNumber = parseInt(num);
   return octalNumber;

 })(034)
 
 console.log(octal);

/*
6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool!*/

function successCallback() {
  console.log("Your password is cool!");
}

function errorCallback() {
  console.log("Your password is invalid!");
}


function validPassword(str,successCallback,errorCallback) {
for (let index = 0; index < str.length; index++) {
  if (str.length > 5 && /\d/.test(str)) {
    return successCallback() 
  } else {
    return errorCallback()
  }
}
}

validPassword("JSG3",successCallback,errorCallback)



/*
7. Write a function that filters elements of the given array so that they satisfy a condition
given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] 
*/
 

function check(numbers) {
  let oddAr = []
  for (let index = 0; index < numbers.length; index++) {
  if(numbers[index]%2===1) {
     oddAr.push(numbers[index])
  } 
  }
  return oddAr
} 

//console.log(check([12,3,4]))

function filter(arr, callback) {
  console.log(callback(arr))
  
}

filter([2, 8, 11, 4, 9, 3],check)

/* EXTRA PART */
/**
     * Take a look at this common scenario–you have a function that returns a value,
     * which you then pass to another function. In our example, the first function,
     * multiplyByTwo(), loops through passed input array, multiplies each element
     * by two, and returns an array containing the result. The second function,
     * addOne(), takes a value, adds one to it, and returns it
     */

    function addOne(a) {
      return a + 1;
    }

    function multiplyByTwo(inputArray) {
      var newArray = [];

      for (var i = 0; i < inputArray.length; i++) {
        var element = inputArray[i];
        newArray[i] = element * 2;
        newArray[i] = addOne(newArray[i]); // one array used
      }

      return newArray;
    }

    // Let's test these functions:
    var inputOne = [1, 2, 3];
    var outputArray = multiplyByTwo(inputOne);
    console.log(outputArray); // [2, 4, 6]

    // var outputNum = addOne(100);
    // console.log(outputNum); // 101

    // Now, let's say you want to have an array, myarr,
    // that contains three elements, and each of the elements
    // is to be passed through both functions
    var inputTwo = [10, 20, 30];
    var myarr = multiplyByTwo(inputTwo);
    console.log(myarr);

    // Now, loop through each element, passing it to addOne()
    // for (var i = 0; i < 3; i++) {
    //   myarr[i] = addOne(myarr[i]);
    // }
    // console.log(myarr); // [21, 41, 61]

    // As you can see, everything works fine, but there's room for improvement.
    // For example, there were two loops. Loops can be expensive if they go through
    // a lot of repetitions. You can achieve the same result with only one loop.

     /*1. Write a function that checks if a given string contains 5 digits.
    Input: “1b895abd”
    Output: true
    Input: “1bser9re”
    Output: false
    */
 
  

   function check5Digits(str) {
    var counter = 0;

    for (var i = 0; i < str.length; i++) {
      if (
        str[i] === "0" ||
        str[i] === "1" ||
        str[i] === "2" ||
        str[i] === "3" ||
        str[i] === "4" ||
        str[i] === "5" ||
        str[i] === "6" ||
        str[i] === "7" ||
        str[i] === "8" ||
        str[i] === "9"
      ) {
        counter++;
      }
    }
    if (counter === 5) {
      return true;
    } else {
      return false;
    }
  }
  console.log(check5Digits("1b895abd"));

  /* 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!” */

 function replaceAll (string=""){

    return string.replaceAll("JS","**");   
   
 }
console.log(replaceAll ("Programming in JS is super interesting!")) 

/*3. Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’ 
Output: “Good morning” */

function insert(str, index,ch) {

  return str.substr(0, index-1) + ch + str.substr(index-1)
}

console.log(insert("Goo morning", 4, "d"))

/* 4. Write a function that deletes a character from the given position in the string. 
Input: “Goodd morning!”, 3 
Output: “Good morning!”*/

function deletes(str, index) {

 return str.slice(0,index) + str.slice(index +1)
}

console.log(deletes("Goodd morning", 3))

/*5. Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]*/

function removeEveryOther(arr){
  let anotherArr = []
  if(arr.length <= 2) return arr;
  for(let i = 0; i < arr.length; i +=2){
      anotherArr.push(arr[i])
  }
  return anotherArr;
}

console.log(removeEveryOther([3, 5, 1, 8, 90, -4, 23, 1, 67]))
