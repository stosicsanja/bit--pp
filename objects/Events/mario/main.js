
//let game_bg = document.getElementById("mario-bg")
let mario = document.getElementById("mario")
let moveBy = 10

/*
function animation(e) {
 
    if (e.keyCode === 37)  {
        moveBy--
        mario.style.left = moveBy + "px"
     }
 
     if (e.keyCode === 39)  {
         moveBy++
         mario.style.left = moveBy + "px"
     }
}

game_bg.addEventListener("keyup", animation)
*/
/*
window.addEventListener("load" , () => {
    mario.style.position = "absolute"
    mario.style.left = 300
    mario.style.top = 340
})

 window.addEventListener("keyup", (e) => {
        console.log(e)
        if (e.key) { 
         mario.style.left = parseInt(mario.style.left) + moveBy + "px"
             
         }
     }
     ) 

let x = 0

window.onload = function() {
    let mario = document.getElementById("mario")
    setInterval (function (){
        x++
        mario.style.left = x
    },10)
    
}
*/

function move() {
    let mario = document.getElementById("mario")
    let moveBy = 0
    let anim = setInterval(animate,5)

    function animate() {
        moveBy++
        mario.style.left = moveBy + "px"
      
    }


}

