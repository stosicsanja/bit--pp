//1

var arrays = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for (let index = 1; index < arrays.length; index++) {
    if (arrays[index]%2==0) {
        console.log("Even numbers " + arrays[index]);
            } else {
            console.log("Odds numbers " + arrays[index]);
                }
     }

//2

var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 && x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);



//3

  var arrays1 = [0,1,2,3,4,5,6,7,8,9,10]
  var result = 1

for (let index = 0; index < arrays1.length; index++) {
     result = index*index
     console.log("Kvadrat " + arrays1[index] + " je " + result)
  
      }
    


//4

var arrays2 = [1,2,3,4]
resultPlus = 0
resultMult = 1


for (let index = 0; index < arrays2.length; index++) {
    resultPlus += arrays2[index]

}
console.log(resultPlus)

for (let index = 0; index < arrays2.length; index++) {
    resultMult *= arrays2[index]

}
console.log(resultMult)


//5

var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
result= "";

for (let index = 0; index < x.length; index++) {
    result+=x[index] ;
}
console.log(result);

//6

var a = [

    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
    ];


    for (let index = 0; index < a.length; index++) {
        console.log(index + " element of array is: " + a[index]);   
    
    }

//7


for (let index = 0; index < 20; index++) {
    
    console.log("Element niza " + index )
    
}


//8

  let gradesArray=[80,77,88,95,68];
  let average=0;
  let suma1=0;



  for(let i=0; i<gradesArray.length; i++){
    suma1 += gradesArray[i];
    average = suma1/gradesArray.length;
}console.log("Average grade is: " + average);

    if(average<60){
        console.log("Grade is F.");
    }else if(average>60 && average<70){
        console.log("Grade is D.");
    }else if(average>70 && average<80){
        console.log("Grade is C");
    }else if(average>80 && average<90){
        console.log("Grade is B");
    }else{
        console.log("Grade is A");
    }

 //9 


 for ( var i = 1; i <= 100; i++ )
 {
   if ( i%3 === 0 && i%5 === 0 )
   {
     console.log( i + " FizzBuzz" );
   }
   else if ( i%3 === 0 ) 
   {
     console.log(i+ " Fizz" );
   }
   else if ( i%5 === 0 ) 
   {
     console.log(i+ " Buzz" );
   }}




//LOOPS 2

//1

e = 3
a = [5, -4.2, 3, 7]

for (let index = 0; index < a.length; index++) {
  if ( e === a[index]) 
  { 
    console.log("Yes")
  } else { 
    console.log("No")
} }

//2

b = [-3, 11, 5, 3.4, -8]
result = 1

for (let index = 0; index < b.length; index++) {
    if (b[index]>0) {
      result= b[index]*2
      console.log("Pozitivan broj "+ b[index] + " pomnozen sa dva je " + result)

    } else {
        console.log(b[index] + " nije pozitivan broj")
} }


//3

var c = [4, 2, 2, -1, 6]
var min = 2


for (let index = 0; index < c.length; index++) {
    if (c[index]<min) {
        console.log(c[index] + " jeste najmanji broj i njegov indeks je " + index )
    } else  if (c[index]<min) {
        console.log(c[index] + " jeste najmanji broj i njegov indeks je " + index )
    } else if (c[index]<min) {
        console.log(c[index] + " jeste najmanji broj i njegov indeks je " + index )
         }
         else if (c[index]<min) {
            console.log(c[index] + " jeste najmanji broj i njegov indeks je " + index )
             }
             else if (c[index]<min) {
                console.log(c[index] + " jeste najmanji broj i njegov indeks je " + index )
                 } else {
console.log("Nije manji")
                 }
                }

//4

var c = [4, 2, 2, -1, 6]
var min = -1
var largerMin = 2

for (let index = 0; index < c.length; index++) {
    if (min<c[index] && c[index]===largerMin) {
        console.log(c[index]+ " je prvi veci od " + min)
    } else {
        console.log (c[index] + " nije prvi veci")
    }
    
}





//5     

var d = [3, 11, -5, -3, 2]
sum = 0


for (let index = 0; index < d.length; index++) {
    if (d[index]>0) {
        sum+=d[index]
        }}
    
    console.log(sum + " je zbir svih pozitivnih brojeva")

//6    

var g = [2, 4, -2, 7, -2, 4, 2]
var provera = true

for (let index = 0; index < g.length / 2; index++) {
    if (g[index] === g[g.length -index -1]) {
        console.log("Niz je simetrican")
    } else {
        console.log("Nije simetrican niz")
    }
}


