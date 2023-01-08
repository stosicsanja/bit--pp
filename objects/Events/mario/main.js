let game_bg = document.getElementById("mario-bg")
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

function animation() {
    game_bg.addEventListener("keydown", (e) => {
        console.log(e)
         switch (e.key) {
             case "ArrowLeft":
                 mario.style.left = parseInt(mario.style.left) - moveBy + "px"
                 break;
             case "ArrowRight":
                 mario.style.left = parseInt(mario.style.left) + moveBy + "px"
                 break;
            
         }
     
     }
     )    
}
