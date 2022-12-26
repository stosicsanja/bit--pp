// 1. Write a JavaScript function that reverses a number. typeof result of the function should
// be “number”.
// 12345 -&gt; 54321

function reverseNumber(params) {
   return params.toString().split("").reverse().join("")
}
 
console.log(reverseNumber(12345))



// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -&gt; “abeemrstw”

function alphaOrder(params) {
    return params.toLowerCase().split("").sort().join("")
}

console.log(alphaOrder("Webmaster"))

// 3. Write a function to alphabetize words of a given string. Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.
// &quot;Republic Of Serbia&quot; -&gt; &quot;Rbceilpu Of Sabeir&quot;

function alphaOrderTwo(params) {
 
   let splitedStr = params.split(" ")
    splitedStr.forEach((element,index) => {
       let splitedWord = element.split("").sort()
       splitedStr[index] = splitedWord.join("")
      
    });
    return splitedStr.join(" ")
}

console.log(alphaOrderTwo("Republic Of Serbia"))
// 4. Write a function to split a string and convert it into an array of words.
// &quot;John Snow&quot; -&gt; [ &#39;John&#39;, &#39;Snow&#39; ]

function returnArr(params) {
    return params.split(" ")
}

console.log(returnArr("John Show"))
// 5. Write a function to convert a string to its abbreviated form.
// &quot;John Snow&quot; -&gt; &quot;John S.&quot;

function convertString(params) {

    let newArr = params.split(" ")
 for (let index = 0; index < newArr.length; index++) {
    
    return `${newArr[0]} ${newArr[1].substring(1, -1)}. `
 }
}

console.log(convertString("John Show"))
// 6. Write a function that adds string to the left or right of string, by replacing it’s characters.
// &#39;0000&#39;, ‘123’, &#39;l&#39; -&gt; &#39;0123&#39;
// &#39;00000000&#39;, ‘123’, &#39;r&#39; -&gt; &#39;12300000&#39;

function addString(str, add, side) {
    let str1 =str.length
    let str2 =add.length
    let deff = str2-str1
   
   if (side==="left") {
    return `${add}${str.slice(deff)}`
   } else if (side==="right") {
    return `${str.slice(0,deff)}${add}`
   }
}

console.log(addString("012312", "950", "right"))


// 7. Write a function to capitalize the first letter of a string and returns modified string.
// &quot;js string exercises&quot; -&gt; &quot;Js string exercises&quot;

function capitalizeFirstLet(params) {
   return `${params[0].toUpperCase()}${params.slice(1)}`
}

console.log(capitalizeFirstLet("js string exercises"))
// 8. Write a function to hide email addresses to protect them from unauthorized users.
// &quot;somerandomaddress@example.com&quot; -&gt; &quot;somerand...@example.com&quot;

function hideEmail(params) {       
   let newEmail = params.slice(4, params.indexOf("@"))
   return params.replace(newEmail,"*****")
}
console.log(hideEmail("somerandomaddress@example.com"))
// 9. Write a program that accepts a string as input and swaps the case of each character. For
// example, if you input &#39;The Quick Brown Fox&#39;, the output should be &#39;tHE qUICK bROWN fOX&#39;.
// var UPPER = &#39;ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;;
// var LOWER = &#39;abcdefghijklmnopqrstuvwxyz&#39;;
// &quot;The Quick Brown Fox&quot; -&gt; &quot;tHE qUICK bROWN fOX&quot;

function lowerAndUpper(params) {
    let upper = params.toUpperCase()
    let lower = params.toLowerCase()
    let output = ""
    console.log(upper,lower)
    for (let index = 0; index < params.length; index++) {
     if (upper[index]===params[index]) {
        output += params[index].toLowerCase();
    }else {
        output += params[index].toUpperCase();
    }
}
return output;
}

console.log(lowerAndUpper("The Quick Brown Fox"))