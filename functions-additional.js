/*
 6. Write a function that replaces the elements of the given array between two positions with their doubled values. 
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
*/
/*
 function replaceArrayElement(array, startIndex, endIndex) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        if (i < startIndex || i > endIndex) {
            newArray[i] = array[i];
        }
        else {
            newArray[i] = (array[i]*2);
        }
    }
  return newArray
}

console.log(replaceArrayElement([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6))
*/


let replaceArrayElement = (function(array, startIndex, endIndex) {
        var newArray = [];
  
        for (var i = 0; i < array.length; i++) {
            if (i < startIndex || i > endIndex) {
                newArray[i] = array[i];
            }
            else {
                newArray[i] = (array[i]*2);
            }
        }
        console.log(newArray);
    }
  );
console.log(replaceArrayElement([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6))

/*
    7. Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true
*/
/*function contains(arr1,arr2) {
    var result = true;
  for (let i = 0; i < arr1.length; i++) {
    var counter=0;
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i]===arr2[j]) {
            counter++;
        }
    }
    if(counter===0){
        result = false;
    break;
    }
  }
    return result;
  }
  */
 
let contains = (function (arr1,arr2) {
    var result = true;
  for (let i = 0; i < arr1.length; i++) {
    var counter=0;
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i]===arr2[j]) {
            counter++;
        }
    }
    if(counter===0){
        result = false;
    break;
    }
  }
    return result;
  })
  console.log(contains([1,3,11,11], [8, 9, 3, 1, 11, 4, 3])); //i ova mi daje "true", iako nemam dve "11" u drugoj?
  console.log(contains([1,4,1,3], [8, 9, 3, 1, 11, 4, 3]));

/*
    8. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]
*/
/*
    9. Write a function that prints out the date of the next day. 
Output:  25. 10. 2018. 
*/
/*
function dateNextDay() {
    const today=new Date();
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    return tomorrow
}
console.log(dateNextDay()); 
*/

let dateNextDay = (function() {
    const today=new Date();
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    return tomorrow
})
console.log(dateNextDay()); 
/*
    10. Write a function that prints out the date of the previous day. 
Output:  23. 10. 2018. 
*/
/*
function dateNextDay() {
    const today=new Date();
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() - 1)

    return tomorrow
}
console.log(dateNextDay()); 
*/
let datePreviousDay = (function() {
    const today=new Date();
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() - 1)

    return tomorrow
})
console.log(datePreviousDay()); 

/*
    11. Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output: 
  78
 111 
   4
4321
*/
/*
function numbers(arr) {
    let strArr = [];
    let result = "";
    let longestInd = 0;
    let diference = 0;
  
    for (let i = 0; i < arr.length; i++) {
      strArr[i] = String(arr[i]);
      console.log(strArr)
  
      if (strArr[i].length > longestInd) {
        longestInd = strArr[i].length;
        console.log(longestInd)
      }
    }
  
    for (let i = 0; i < strArr.length; i++) {
      diference = longestInd - strArr[i].length;
      
      result += " ".repeat(diference) + strArr[i] + "\n";
    }
    return result;
  }
  
  console.log(numbers([78, 111, 4, 4321]));
*/
 let numbers = (function(arr) {
    let strArr = [];
    let result = "";
    let longestInd = 0;
    let diference = 0;
  
    for (let i = 0; i < arr.length; i++) {
      strArr[i] = String(arr[i]);
      console.log(strArr)
  
      if (strArr[i].length > longestInd) {
        longestInd = strArr[i].length;
        console.log(longestInd)
      }
    }
  
    for (let i = 0; i < strArr.length; i++) {
      diference = longestInd - strArr[i].length;
      
      result += " ".repeat(diference) + strArr[i] + "\n";
    }
    return result;
  })
  
  console.log(numbers([78, 111, 4, 4321]));