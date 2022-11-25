/*1. Write a function named tellFortune that:
 takes 4 arguments: number of children, partner&#39;s name, geographic location, job title.
 outputs your fortune to the screen like so: &quot;You will be a X in Y, and married to Z with N kids.&quot;
Call that function 3 times with 3 different values for the arguments.*/

function tellFortune(numberofchildren, partner, geoloc, job) {
    return `You will be a ${job} in ${geoloc}, and married to ${partner} with ${numberofchildren} kids`;
  }
  console.log(tellFortune("4", "John", "London", "developer"));
  console.log(tellFortune("2", "George", "Lisabon", "dentist"));
  console.log(tellFortune("3", "Louis", "Germany", "singer"));

  /*2. Write a function named calculateDogAge that:
 takes 1 argument: your puppy&#39;s age.
 calculates your dog&#39;s age based on the conversion rate of 1 human year to 7 dog years.
 outputs the result to the screen like so: &quot;Your doggie is NN years old in dog years!&quot;
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
years.*/

function calculateDogAge(yourPuppyAge, humanConv) {
    let puppyAge = yourPuppyAge * humanConv;
    return `Your doggie is ${puppyAge} years old in dog years!`;
  }
  console.log(calculateDogAge(12, 7));
  console.log(calculateDogAge(4, 7));
  console.log(calculateDogAge(10, 7));

  /*3. Write a function named calculateSupply that:
 takes 2 arguments: age, amount per day.
 calculates the amount consumed for rest of the life (based on a constant max age).
 outputs the result to the screen like so: "You will need NN to last you until the ripe old age of
X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.*/

function calculateSupply(age, amountPerDay) {
    let maxAge = 100
    let result = (maxAge - age) * 365 * Math.round(amountPerDay)
    return `You will need ${result} to last you until the ripe old age of
    ${maxAge}`
   
}
console.log(calculateSupply(50, 1))
console.log(calculateSupply(25, 1))
console.log(calculateSupply(1, 2.4))

/*4. Create a function called celsiusToFahrenheit:
 Store a celsius temperature into a variable.
 Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
 Now store a fahrenheit temperature into a variable.
 Convert it to celsius and output "NN°F is NN°C.""
*NN is actual temperature you need to convert*/

function celsiusToFahrenheit(tempInC) {
    let fahrenheit = tempInC * 1.8 + 32
    return `${tempInC}℃ is ${fahrenheit}℉`

}

console.log(celsiusToFahrenheit(2));

function fahrenheitToCelsius(tempInF) {
   let celsius = (tempInF - 32) / 1.8
   return  `${tempInF}℉ is ${celsius}℃`

}

console.log(fahrenheitToCelsius(2))


/*
/     5. Create a function that validates a password to conform to the following rules:
//     • Length between 6 and 24 characters,
//     • At least one uppercase letter (A-Z).
//     • At least one lowercase letter (a-z).
//     • At least one digit (0-9).
//     • Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
//     •
: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , .
//     • Examples:  validatePassword("P1zz@") ➞ false  // Too short.
//     • validatePassword("iLoveYou") ➞ false      // Missing a number.
//     • validatePassword("Fhg93@") ➞ true       // OK!

function passwordCheck (password) {
    let result = "";
    let oneDigit = false;

    
    for (i = 0; i <= password.length; i++) {
        if (password.length > 6 || password.length > 24 && isFinite(password[i]) === true )  {
            oneDigit = true;
        }
        if (oneDigit === true) {
            result = "Your password is correct!"
        } else {
            result = "Your password is invalid!"
        }
    } return result;
};
console.log(passwordCheck("GZTFZTDGGSG5546"));

function testLowerAndUpper(password) {
    if (password.toUpperCase() != password && password.toLowerCase() != password)
    {
        return true
    }
return false
    
}
let password = "DDDgeges"
console.log(testLowerAndUpper(password))

 

function maxRepetition(password){
    let maxRepetitionMess = "Password mustn't contain 3 repeated characters!";
    for(i=0;i<password.length;i++){
        if(password[i]===password[i+1] && password[i]===password[i+2]){
            console.log(maxRepetitionMess);
            return false;
        }else{
            return true; 
        }
}
}
console.log(maxRepetition("111"));


//...

/*6. Create a function that finds how many prime numbers there are, up to the given integer.
Examples: primeNumbers(10) ➞ 4 // 2, 3, 5 and 7
primeNumbers(20) ➞ 8 // 2, 3, 5, 7, 11, 13, 17 and 19
primeNumbers(30) ➞ 10 // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29*/

function isPrime(primeNumber) {
    let result = true;

    for(let i = 2; i <= primeNumber; i++) {
        if(primeNumber % i == 0 && primeNumber != i) {
            result = false;
            break;
            
        } 
    }

    return result;
}

//console.log(isPrime(12));

function primeNumbers(inputNumber) {
    let counter = 0;
    let resultArray=[];

       for(let i = 2; i < inputNumber; i++) {
        let isPrime1 = isPrime(i);
    
        if(isPrime1 == true) {
            counter = counter + 1;
            resultArray.push(i);
            
        }
    }

     return `There are ${counter} prime numbers up to the given integer, and those numbers are ${resultArray}.`;
}
    //return [counter, resultArray];



    console.log(primeNumbers(7));
    console.log(primeNumbers(20));



/*7. Create a function that returns an array that expands by 1 from 1 to the value of the input, and then
reduces back to 1. Items in the arrays will be the same as the length of the arrays.
Examples:
diamondArrays(1) ➞ [1],
diamondArrays(2) ➞ [1, 2, 2, 1]
diamondArrays(5) ➞ [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1] */



function diamondsArray(input){
    let diamondArray = [];
    
   for (i=1; i<=input*2-1; i++)
    if (i<=input)
     for(j=0; j<i; j++)
      diamondArray.push(i);
    else
     for (j=0; j <2*input-i; j++)
      diamondArray.push(2 * input-i);
   
   
   return diamondArray;
   }
   console.log(diamondsArray(5));

   /*8.Create a function that returns the sum of missing numbers.
Examples: sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29  // 2 + 4 + 6 + 8 + 9
sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29
sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575*/

   function findMissing(num) {
    let max = Math.max(...num)
    let min = Math.min(...num)
    let missing = []
    let sum = 0
    for(let i=min; i<= max; i++) {
      if(!num.includes(i)) { 
        missing.push(i);
        sum = missing.reduce((a, b) => a + b, 0);
        
    }
  }
  return sum
   }
   console.log(findMissing([10, 7, 5, 3, 1])) 

   /*9.Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise. 
Arrays do not have to be sorted (see example #2). Arrays should concatenate to create the final array exactly (examples #3 and #4).
Examples: canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true
canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true
canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false // Duplicate 7s not found in target array.
canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false // Missing 6 from target array. */
