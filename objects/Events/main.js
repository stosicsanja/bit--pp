
function toggleBackgroud() {
        document.querySelector(".button-div").classList.toggle("div-bg")
    }
    
let btn_toggle = document.getElementById("button-toggle")
btn_toggle.addEventListener("click", toggleBackgroud)

let button_off = document.getElementById("button-off")
    button_off.removeEventListener("click", toggleBackgroud)

function chatRoom() {
    let input_text = document.getElementById("input-text")
    let btn_send = document.getElementById("btn-send")
    let area_text = document.querySelector(".area-text")

    console.log(input_text.value)
   let text_chat = input_text.value
   area_text.innerHTML += `<p>${text_chat}</p>`
   text_chat = ""
    
    
}   
btn_send.addEventListener("click", chatRoom) 


let field = document.getElementById("field")
let background = document.querySelector(".background")
let player = document.getElementById("player")

function movePlayer (event) {
    let player = document.getElementById("player")

    let x = event.clientX
    let y = event.clientY
    console.log(x,y)
    player.style.top = `${x}px`
    player.style.left = `${y}px`
    

}

field.addEventListener("click", movePlayer)
// ovde se igrac pomera ali ne onako kako bi zelela, verovatno treba neka dodatna f-ja ili sta vec =)


let game_bg = document.getElementById("mario-bg")
let mario = document.getElementById("mario")
let moveBy = 10


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

/*
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
*/

// sto se tice ovog zadatka, na netu sam nasla par resenja, ali mario ni da se makne :D negde gresim, ali nikako da provalim gde
// ako moze pomoc ?

    let gallery = document.querySelectorAll(".gallery img")
    let only_img = document.getElementById("only")

 for(const image of gallery) {
   // console.log(image)
   image.style.width="200px"
   only_img.style.width="300px"
    image.addEventListener("click", (e) => {
     //   console.log(e.target.style.width==="200px")
        if (e.target.style.width==="200px") {
            e.stopPropagation()
        } else {
            e.target.style.border= "1px solid red"
        }
        

       
        })

        image.addEventListener("click", (e)=> {
            console.log(e.target)
        })
     }
  




