//Write a function to check whether the `input` is a string or not.


function String(params) {
    if (typeof params == "string")
 console.log("My random string " + params)
    else {
        return false
    }
}

console.log(String("Yes, I am a string"))



//2. Write a function to check whether a string is blank or not.


function Blank (input) {
if (input.length == 0)
return true
else  { 
return false;
} }
console.log(Blank("G"));


//3. Write a function that concatenates a given string n times (default is 1).


function repeatString(str,num){

    if(num > 0){
     return str.repeat(num);
    }else{
     return str;
    }
     
 }

    console.log(repeatString('Ha',3));


//4. Write a function to count the number of letter occurrences in a string.


function appearenceOfLetter(string,letter){

    numberOfAppearence=0;
     
    for(let i=0; i<string.length; i++){
        if(string[i]===letter){
            numberOfAppearence += 1;
        }
    }
    return "Broj javljanja 'n': " + numberOfAppearence;
    }  

    result = appearenceOfLetter('Everything is okey', 'n');
    console.log(result);


//5.Write a function to find the position of the first occurrence of a character in a string. The
//result should be the position of character. If there are no occurrences of the character, the
//function should return -1.

var rec = "Danas je subota"

console.log(rec.indexOf("a"))
console.log(rec.indexOf("g"))

//ili sledeci nacin

function positionChar(string, p)
{
    var h =-1;
    for(l=0;l<string.length;l++)
    {
        if(string[l]==p)
        {
        h=l+1;
        break;
        }
    }
return h;
}
console.log(positionChar("Danas je subota","a"));



//6. Write a function to find the position of the last occurrence of a character in a string. The
//result should be in human numeration form. If there are no occurrences of the character,
//function should return -1.


var s=-1;

function positionCharLast(string2, p1)
{
    for(l1=0; l1<string2.length; l1++)
    {
    if(string2[l1]==p1)
    {
    s=l1+1;
    }
}
return s;
}
console.log(positionCharLast("Danas je subota","a"));
   


//7. Write a function to convert string into an array. Space in a string should be represented as
//“null” in new array.


function split (ulazniString){
   var result=[];
   for(var i=0; i<ulazniString.length;i++){
    if(ulazniString[i]==" "){
        result.push("null");
    }
    else{
        result.push(ulazniString[i]);
    }
   }
   return result;
}
console.log(split("Danas je subota"))





//8. Write a function that accepts a number as a parameter and checks if the number is prime or
//not.
//Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
//divisors other than 1 and itself.

 function Prime(params) {
    if (params>0) {
        if (params/params == 1) {
            if (params/1 == params) {
            return res = "Its prime number"
            }
          
    }
 }     
 return res = "Its not prime number"
}

 res = Prime (4)
 console.log(res)




//9. Write a function that replaces spaces in a string with provided separator. If separator is not
//provided, use “-” (dash) as the default separator.


function replaceOp(string4, operat)
{
    if(operat)
    {
        string4=string4.replaceAll(" ",operat);
    }
    else
    {
    string4=string4.replaceAll(" ","-"); 
    }
return string4;
}
console.log(replaceOp("Danas je subota","+"));

//10. Write a function to get the first n characters and add “...” at the end of newly created string.


function firstNCharacters(string5, n3)
{
    var k8="";
    for(t=0; t<n3; t++)
    {
        k8+= string5[t];
    }
    return  k8+"...";
}
console.log(firstNCharacters("Danas je subota", 5));


//11. Write a function that converts an array of strings into an array of numbers. Filter out all
//non-numeric values.

function toNumArray(arr) {
    var result = [];
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === null) {
        continue;
      } else if (isNaN(arr[i])) {
        continue;
      } else if (arr[i] === undefined) {
        continue;
      } else if (arr[i] === Infinity) {
        continue;
      } else {
        result[counter] = +arr[i];
        counter++;
      }
    }
    console.log(result);
  }

  toNumArray(["1", "21", undefined, null, "42", "1e+3", Infinity]);

//12. Write a function to calculate how many years there are left until retirement based on the
//year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
//already retired, a proper message should be displayed.

var penzijaM = 65
var penzijaZ = 60


function Date(dateM) {
  
 if (2022-dateM > penzijaM )
 {
  return res = (2022-dateM)-penzijaM + " godina ste vec u penziji"
    
 }
 else if (2022-dateM < penzijaM) {
    return res = penzijaM- (2022-dateM) + " godina vam treba do penzije"
 }}

Date(1962)
console.log(res)


//13. Write a function to humanize a number (formats a number to a human-readable string) with
//the correct suffix such as 1st, 2nd, 3rd or 4th.



function humanize(number) 
{
    if(number % 100 >= 11 && number % 100 <= 13)
    {
        return number + "th";
    }
    switch(number % 10) 
    {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
    }
    
    return number + "th";
}
console.log(humanize(4500));

//EXERCISE FUNCTIONS  3


  // 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
    // [NaN, 0, 15, false, -22, '', undefined, 47, null]

    
function joinInStr(arr) {
    var result = "";

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === null) {
        continue;
      } else if (isNaN(arr[i])) {
        continue;
      } else if (arr[i] === undefined) {
        continue;
      } else if (arr[i] === Infinity) {
        continue;
      
      } else {
        result += arr[i];
      }
    }

    console.log(result);
  }

  joinInStr([NaN, 0, 15, false, -22, "", undefined, 47, null]);


//3. Write a program to filter out falsy values from the array.
function bouncer(arr) {
    return arr.filter(item => item);
    }
console.log("3. Zadatak: " + bouncer([NaN, 0, 15, false, -22, undefined, 47, null]));



var a = "My random string";
var b = " JS";
var position = 9;
var output = [a.slice(0, position), b, a.slice(position)].join('');
console.log(output);

// 4. Write a function that reverses a number. The result must be a number.
    // 12345 -> 54321 // Output must be a number

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(12345)))

 // 5. Write a function to get the last element of an array.
    // Passing a parameter 'n' will return the  last 'n' elements of the array.
    // [7, 9, 0, -2] -> -2
    // 4
    // [7, 9, 0, -2], 2 -> [0, -2]

function last(array,n){
    if(array == null)
    return 0;
    if(n == null)
    return array[array.length-1];
    return array.slice(Math.max(array.length-n,0))
  }
  
  console.log(last([7, 9, 0, -2]));
  console.log(last([7, 9, 0, -2],2));
  
// 6. Write a function to create a specified number of elements with pre-filled numeric value array.
    // 6, 0 -> [0, 0, 0, 0, 0, 0]
    // 2, "none" -> ["none", "none"]
    // 2 -> [null, null]


  function preFilledNumeric(array,n)
{
    array=Array(n).fill(array);
    return array;
}
console.log("6. Zadatak: " + preFilledNumeric(false,7));

//7. Write a function that says whether a number is perfect.
//28 -&gt; 28 is a perfect number.
//Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
//of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
//as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
//(including itself).
//E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.
    
//Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
//perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function perfectN(n)
{
    var b=0;
    for (let i = 1; i < n; i++) 
    {
        if(n%i==0)
        {
        b+=i;
        }
    }
    if(b==n)
    {
    return "Number is perfect!";
    }
    else
    {
    return "Number is NOT perfect!";
    }
}
console.log(perfectN(28));

 // 8. Write a function to find a word within a string.
    // 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
    // 'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

    function search_word(text, word)
    {    
        var x = 0, y=0;  
        for (i=0;i< text.length;i++)
        {
            if(text[i] == word[0])
            {
                for(j=i;j< i+word.length;j++)
                {
                    if(text[j]==word[j-i])
                      {
                        y++;
                      }
                    if (y==word.length)
                    {
                        x++;
                    }
                }
                y=0;
            }
        }
       return "'"+word+"' was found " + x + " times.";
    }
    
    console.log(search_word('The quick brown fox', 'fox'));

    
    // 9. Write a function to hide email address.
    // "myemailaddress@bgit.rs" -> "mye...@bgit.rs"

    function hideEmail(email) 
    {
        email1=email.replace(/(.{2})(.*)(?=@)/, "..." )
        return email1; 
    } 
      console.log("9. Zadatak: " + hideEmail("myemailaddress@bgit.rs"));

      // 10. Write a program to find the most frequent item of an array.

function mostFrequent(arr1){
  var mf = 1;
  var m = 0;
  var item;
  for (var i=0; i<arr1.length; i++)
  {
          for (var j=i; j<arr1.length; j++)
          {
                  if (arr1[i] == arr1[j])
                   m++;
                  if (mf<m)
                  {
                    mf=m; 
                    item = arr1[i];
                  }
          }
          m=0;
  }
  return item+" ( " + mf +" times ) ";
  }
  console.log(mostFrequent([3, 2 , 2, 4, 3, 9, 3]));