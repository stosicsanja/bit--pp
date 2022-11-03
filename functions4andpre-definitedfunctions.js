/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no*/

function checkElement(a, e) {
    if (a.includes(e) == true) {
        return "yes";
    } else {
        return "no";
    }
}
console.log(checkElement([5, -4.2, 3, 7], 5))

/*2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

function multiply(arr) {
    var a = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = arr[i] * 2;
        }
        a.push(arr[i]);
    }
    return a
}
console.log( multiply([-3, 11, 5, 3.4, -8]));


/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/


function findMin(arr) {
    var min = Math.min(...arr);
    var index = arr.indexOf(min);
    return min + ", " + index;
}
console.log(findMin([4, 2, 2, -1, 6]));

/*4. Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2*/


function findMin(arr) {
    var min = Math.min(...arr);
    var i = arr.indexOf(min);
    arr.splice(i, 1);
    var min = Math.min(...arr);
    return min;
}
console.log( findMin([4, 2, 2, -1, 6]));

/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/


function sum(arr) {
    var pos = arr.filter(function (a) { return a > 0; });
    var sum = pos.reduce(function (a, b) { return a + b; });
    return sum;
}
console.log( sum([3, 11, -5, -3, 2]));

/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.*/

function symmetricArray(arr) {
    if (arr.length % 2 == 0) {
    var arr1 = arr.slice(0, arr.length / 2);
} else {
    var arr1 = arr.slice(0, arr.length / 2 + 1);
}
    var arr2 = arr.slice(arr.length / 2, arr.length);
    var arr3 = arr2.reverse();
    if (arr1.toString() == arr3.toString()) {
        return "The array is symmetric.";
    } else {
        return "The array isn’t symmetric.";
    }
   
}
console.log(symmetricArray([2, 4, -2, 7, -2, 4, 3 ]))


/*7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

function fullArray() {
    return abc.flatMap(function (val, i) {
      if (one[i]) {
        return [val, one[i]];
      }
      return [val];
    });
  }
var abc = ['a', 'b', 'c', 'd' ];
var one = [1, 2, 3 ];

console.log(fullArray())

/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/

function Conc() {
 arr3 = arr1.concat(arr2)
 return arr3
    
}
 arr1 = [4, 5, 6, 2]
 arr2 = [3, 8, 11, 9]

 console.log(Conc())

/*
9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]*/

function Remove(arr) {
    
    var value = 2

    arr = arr.filter(function(item) {
        return item !== value
    })
    
return arr
}
console.log(Remove([4, 6, 2, 8, 2, 2]))
/*
10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/


function insertElement() {
    let array = [1, 2, 3, 4, 5];
 
    let index = 3;

    let element = 8;
  
    array.splice(index, 0, element);
    console.log(array);
}

insertElement();

//PRE-DEFINED FUNCTIONS
/*
/-1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: [&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity]
Output: [1, 21, 42, 1000]*/


function convertIntoStr(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (isFinite(arr[i])) {
      result.push(+arr[i]);
    }
  }
  console.log(result);
}
convertIntoStr(["1", "21", undefined, "42", "1e+3", Infinity]);
/*
2. Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
Output: “015false-2247” */
function joinElements(array)
{
    var j="";
    for (let i = 0; i < array.length; i++) 
    {
        if (!isNaN(array[i]))
        {
            if (array[i]!=Infinity)
            {
                if (array[i]!=null)
                {
                    if (array[i]!=undefined)
                    {
                        j=j+array[i];
                    }
                }
            }
        }
    }
return j;
}
console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/*
3. Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
Output: [15, -22, 47] */

function filterElem(arr) {
  nums = arr.filter(Number);
  return nums
}
console.log(filterElem([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/*
4. Write a program that calculates aW number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
Output: 3 */
function calcInt(arr) {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
      if (Number.isInteger(arr[i])) {
      newArr.push(arr[i]);
  }
  }
  return newArr
}
console.log(calcInt([NaN, 0, 15, false, -22, '', undefined, 47, null]));



/*
5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
Output: 2*/
function calcFloat(arr) {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
      if (!Number.isInteger(arr[i])) {
      newArr.push(arr[i]);
  }
  }
  nums = newArr.filter(Number);
  return nums.length;
}
console.log (calcFloat([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]) );


