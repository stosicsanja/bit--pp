//1. Write a program that calculates the maximum of two given numbers.
function Maximum(num,num2)
{
if (num>num2) {
    console.log(num + " je veci od " + num2)
    
} else {
    console.log(num + " je manji od " + num2)
    
}
}
Maximum(2,4)




//2. Write a program that checks if a given number is odd.

function Odd(number) {
    if (number%2===1) {
        console.log (number + " je neparan broj")
    } else {
        console.log (number + " je paran broj")
        
    }
}
Odd(4)


//3. Write a program that checks if a given number is a three digit long number.

function Three(params) {

    if ( params > 99 && params < 1000 ) 

    {
        console.log(params + " jeste trocifren")
    } else {
        console.log(params + " nije trocifren")
    }
    
}
Three(46)


//4. Write a program that calculates an arithmetic mean of four numbers.

function Arithemetic(n1, n2, n3, n4) {

    var sum = n1+n2+n3+n4
    var result = 0
    var result = sum/4
    return result
   
}

console.log(Arithemetic(1,2,3,4))

/*5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
* *
* *
* *
*****

//6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * * */


function valueStars(char, val1,val2, val3){
    if(val1>0 && val2>0 && val3>0){
        return char.repeat(val1)+"\n"+char.repeat(val2)+"\n"+char.repeat(val3);
        }
   else{
        return '';
    }
}console.log(valueStars('*',5,3,7));

//7. Write a program that calculates a number of digits of a given number.

function countDigit(n)
{
    let zbir = 0;
    while (n != 0)
    {
        n = Math.floor(n / 10);
        zbir++
    }
    return zbir;
}

console.log(countDigit(3457))


//8.Write a program that calculates a number of appearances of a given number in a givenarray.
//Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
//Result: 3


function Occurrence(array,element){
    
    let counter=0;
    for(let i=0; i<array.length;i++){
        if(array[i] == element){
            counter++
        }
    }
       return "Broj se pojavljuje: " + counter;
  }
  
  console.log(Occurrence([2, 4, 7, 8, 7, 7, 1],7));

  //9. Write a program that calculates the sum of odd elements of a given array.


  function sumOfOddElements(array){
    sum=0;
    for(let i=0; i<array.length;i++){
        if(array[i]%2 !== 0){
            sum += array[i];
        }
    }
    return "Zbir neparnih bojeva u nizu je: " +sum;
  }
  console.log(sumOfOddElements([1,2,3,4,5,6,7,8,9]));

  //10. Write a program that calculates the number of appearances of a letter a in a given string.
//Modify the program so it calculates the number of both letters a and A.

  function appearenceOfLetter(string,letter){

    numberOfAppearence=0;
     
    for(let i=0; i<string.length; i++){
        if(string[i]==letter){
            numberOfAppearence += 1;
        }
    }
    return "Broj javljanja: " + numberOfAppearence;
    }   
    result = appearenceOfLetter('AnavoliMilovanA'.toLowerCase(), 'a');

    console.log(result);

    //11. Write a program that concatenates a given string given number of times. For example, if
//“abc” and 4 are given values, the program prints out abcabcabcabc*/

    function repeatString(str,num){

       if(num > 0){
        return str.repeat(num);
       }else{
        return '';
       }
        
    }

          console.log(repeatString('abc', 3));
