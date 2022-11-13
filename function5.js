/*1. Find the min and max element in the following array and switch their places. Print out the
modified array in the console.
Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]*/

function minMax(arr) {
  var min = arr[0]; max = arr[0]; minIndex = 0; maxIndex = 0;
  var newArr = arr;
  for (i = 0; i < arr.length; i++) {
      if (min > arr[i]) {
          min = arr[i];
          minIndex = i;
      }
  }
  for (i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
          max = arr[i];
          maxIndex = i;
      }
  }
  newArr[minIndex] = max;
  newArr[maxIndex] = min;
  return newArr.join(", ")
}
 console.log( minMax([ 3, 500, 12, 149, 53, 414, 1, 19 ]));

/*
2. Use the following array to make a new one by dividing its values by two and adding 5. If
a given element&#39;s value is 0, change it to 20.
Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]*/
 
function withTwo(params) {
    let div = [] 
        
    for (let index = 0; index < params.length; index++) {
        
        if (params[index]===0) {
           div[index]=20
        } else {
          div[index]=params[index]/2 + 5
        }
        }
       console.log(div); 
    }
   
withTwo([3, 500, -10, 149, 53, 414, 1, 19 ]);




/*
3. Initialize two arrays. The first one should contain student names, the second one the
number of points for each student. Display students&#39; names with their corresponding
grade. Use the following ranges:
51-60 -&gt; 6,
61-70 -&gt; 7,
71-80 -&gt; 8,
81-90 -&gt; 9,
91-100 -&gt; 10.
Input:
[ &quot;Micahel&quot;, &quot;Anne&quot;, &quot;Frank&quot;, &quot;Joe&quot;, &quot;John&quot;, &quot;David&quot;, &quot;Mark&quot;, &quot;Bill&quot; ], [ 50, 39, 63, 72, 99,
51, 83, 59 ]
Output:
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
the exam.*/

function displayGrade(arr1, arr2) {
    var grades = [];
    var newArr = [];
    for (i = 0; i < arr2.length; i++) {
        switch (true) {
            case (arr2[i] < 51) : 
            newArr[i] = "not passed";
            break;
            case (arr2[i] >= 51 && arr2[i] <= 60) : 
            newArr[i] = 6;
            break;
            case (arr2[i] >= 61 && arr2[i] <= 70) : 
            newArr[i] = 7;
            break
            case (arr2[i] >= 71 && arr2[i] <= 80) : 
            newArr[i] = 8;
            break;
            case (arr2[i] >= 81 && arr2[i] <= 90) : 
            newArr[i] = 9;
            break;
            case (arr2[i] >= 91 && arr2[i] <= 100) : 
            newArr[i] = 10;
            break;
            default : "none";
            break;
        }
    }
    for (i = 0; i < arr1.length; i++) {
        grades.push(arr1[i] + " acquired " + arr2[i] + " points and earned " + newArr[i]);
    }
    return grades
}
 console.log(displayGrade([ "Micahel", "Anne", "Frank", 
 "Joe", "John", "David", "Mark", "Bill" ], 
 [ 50, 39, 63, 72, 99, 51, 83, 59 ])); 


// 4. Sort a previously defined array. Place its sorted values into a new array whose
    // values are equivalent to the first array's values multiplied by 2.
    // Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
    // Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

    function multiplyBy2(arr) {
      var result = [];
      for (var i = 0; i < arr.length; i++) {
        result[i] = arr[i] * 2;
      }
      console.log(
        result.sort(function (a, b) {
          return a - b;
        })
      );
    }
    multiplyBy2([13, 11, 15, 5, 6, 1, 8, 12]);


// 5. Sort a previously defined array in a descending order and display it in the
    // console.
    // Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
    // Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
    function sortDescending(arr) {
      var result = arr.sort(function (a, b) {
        return b - a;
      });
      console.log(result);
    }

    sortDescending([13, 11, 15, 5, 6, 1, 8, 12]);

 // 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
    // subtracts all the odd numbers 1 to 500 from the calculated sum.
    // The result should then be multiplied by 12.5 and displayed in console.
    // Output: 2350000
    function calc() {
      var sum = 0;

      for (var i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
          sum += i;
        }
      }
      for (var j = 1; j <= 500; j++) {
        if (j % 2 !== 0) {
          sum -= j;
        }
      }

      console.log(sum * 12.5);
    }
    calc();


 // 7. Define a 10 element array. Take the first two letters from every string (that has at least 2
    // letters) in the array and create a new string from them. Print it out in the console.
    // Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
    // Output: AnStJoJoDaMa
    function makeAnother(arr) {
      var result = "";

      for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string" && arr[i].length > 1) {
          result += arr[i].slice(0, 2);
        }
      }

   return result
    }

   console.log(makeAnother( [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]));

   // 8. Write a program that takes a string and prints its characters out in reversed order in the
    // console.
    // Input: Belgrade Institute of Technology
    // Output: ygolonhceT fo etutitsnI edargleB
  
function reverseString(str) {

   
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}



console.log(reverseString("Belgrade Institute of Tehnology"));


/*9. Write a program that displays all the combinations of two numbers between 1 and 7.
Don't display two of the same numbers at the same time. Display the number of possible
combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).*/

function displayComb(){
    var counter = 0;
    for (i = 1; i <= 7; i++) {
        for (j = 1; j <= 7; j++) {
            if (i != j) {
                
                counter++;
                console.log( "(" +i + ", " + j + ")" )
            }
        }
    }
    return counter;
}
displayComb();

/*10. Write a program that checks if the entered number is a prime number (i.e. divisible only
by 1 and by itself).
Input: 17 | 15
Output: true | false*/

function prime(num) {
   let root = Math.ceil(Math.sqrt(num))
   console.log(root)
    for (i = 2; i<=root ; i++) {
      
        if ( num % i === 0 ) {
     
            return "The number " + num + " is not prime number!";
        }  else {
            return "The number " + num + " is prime number!";
        }
    }
}

console.log(prime(41));


// 11. Check if a given string is a palindrome (spaces are ignored).
// Input: eye | Geek | a nut for a jar of tuna
// Output: true | false | true
function isPalindrome(str)
{
    let reverse =false;
    reverse=str.split('').reverse().join('');
    if(reverse==str)
    {
    reverse=true;
    }
return reverse;
}
console.log(isPalindrome("eye"));
/*
12. Write a program that calculates the greatest common divisor of two integers. Note: The
greatest common divisor of two non-zero integers is the greatest positive number that
divides both numbers with no remainder.
Input: 192 42 | 81 9
Output: 6 | 9*/

function commonDiv(num1, num2) {
    var result = 0;
    for (i = 1; i <=num2 && i <= num1; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            result = i;
        }  
    }
    return result;
}

console.log(commonDiv(81, 9))

// 1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
// ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
// pokrene.

function Quote(array) 
{
    const citat =array[Math.floor(Math.random() * array.length)];
    return citat;
}
console.log(Quote(["Prvi autor; prvi citat", "Drugi autor; drugi citat", "Treci autor; prvi citat",  
"Cetvrti autor; prvi citat", "Peti autor; prvi citat", "Sesti autor; prvi citat" ]))


/*2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako
nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta
godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je
prestupna).*/

function year(year) {
    if ( year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        
        return "Ovo je prestupna godina!";
    
    } else {
        return "Ovo nije prestupna godina!";
    }
}

console.log(year(1900));

// 3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
// samoglasnika i koliko suglasnika.

function samoglasnici(string) {
  counter = 0
  let samoglasnici = ["a", "i", "o","u","e"]
  for (const letter of string.toLowerCase()) 
  {
    if (samoglasnici.includes(letter)) 
    {
      counter++
    }
  }
  return counter
} 

console.log(samoglasnici("Nekistring"))

// 4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
// podataka pojedinačnih elemenata ulaznog niza.
function tipEl(array) 
{
    var tipoviPodataka=[];
    for (let i = 0; i < array.length; i++) 
    {
        tipoviPodataka[i]=typeof array[i];
    }
    return tipoviPodataka;
}
console.log(tipEl([12,'pp',true, 'as23s','00sd']) )

/*5. Kreirati funkciju koja prijvata niz stringova kao ulayni parametar, a na izlazu
ispisuje samo stringove koji u sebi ne sadrže brojeve. Primer: ulazni niz [“12bb”,
“pp”, “as23s”, “00sd”] => rezultat [“pp”].*/

function stringWithoutNumbers(arr) {
    var newArr = arr.filter(function (a) {return !/[0-9]/.test(a);});
   return newArr
}

console.log(stringWithoutNumbers(["12bb", "pp", "as23s", "00sd"]));

/*6. Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako
string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran
broj znakova, indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ”
ili “not found” ako nema ponavljanja.
Primer 1: ""Computer""="" [8, ""C"", ""r"", ""pu"";, ""not found""] ,
Primer 2: ""Science"" ="" [7, ""S"", ""e"", ""e"", ""@ index 5""]*/

  function strLength(string = "") {
    let newAr = [];
    newAr.push(string.length);
    newAr.push(string.substring(0, 1));
    newAr.push(string.substr(string.length - 1, 1));
  
    if (string.length % 2 === 0) {
      const i = string.length / 2 - 1;
      newAr.push(string.substr(i, 2));
    } else {
      const i = Math.floor(string.length / 2);
      newAr.push(string.substr(i, 1));
    }
  
    const char = string[1];
    let output = "not found";
    string.split("").forEach((item, i) => {
      if (char === item && i !== 1) {
        output = "@ index " + i;
      }
    });
    newAr.push(output);
    return newAr;
  }
  
  console.log(strLength("Computer"));
  console.log(strLength("Science"));
  
  /*7. Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja
bar jednom osim dva elementa. Kreirati funkciju koja ispisuje dva elementa koja
se ne ponavljaju.  
*/

  function noRepeat(arr) {
    for (let index = 0; index < arr.length; index++) {
      const currNumber = arr[index];
      const length = arr.filter((item) => item === currNumber).length;
      if (length <= 1) {
        console.log(currNumber);
      }
    }
  }
  
  noRepeat([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]);


/*8. Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
Primer 1: ([2, 3, 4, 5], N=2) => [[2, 3], [4, 5]]
Primer 2: ([2, 3, 4, 5, 6], N=3) => [[2, 3, 4], [5, 6]]*/

function splitArray(arr, n) {
  var arr1 = arr.slice(0, n);
  var arr2 = arr.slice(n, arr.length);
  return "[" + "[" +  arr1.join(", ") + "]" + ", " + "[" + arr2.join(", ") + "]" + "]";
}
console.log(splitArray([2, 3, 4, 5, 6], 3))
