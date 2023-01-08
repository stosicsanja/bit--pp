
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

    let x = event.offsetX
    let y = event.offsetY
    console.log(x,y)
    player.style.left = `${x-10}px`
    player.style.top = `${y+330}px`
    

}

let btn_stop = document.getElementById("stop-move")
btn_stop.addEventListener("click", (e) => {
    field.removeEventListener("click", movePlayer)
})

field.addEventListener("click", movePlayer)



    let gallery = document.querySelectorAll(".gallery img")
    let only_img = document.getElementById("only")

 for(const image of gallery) {
    console.log(image)
   image.style.width="200px"
   only_img.style.width="300px"
    image.addEventListener("click", (e) => {
       console.log(e.target.style.width==="200px")
        if (e.target.style.width==="200px") {
            e.stopPropagation()
        } else {
            e.target.style.border= "3px solid red"
        }
       
        })

        image.addEventListener("click", (e)=> {
            console.log(e.target)
        })
     }
  




