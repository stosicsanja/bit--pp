
function toggleBackgroud() {
        document.querySelector(".button-div").classList.toggle("div-bg")
    }
    
let btn_toggle = document.getElementById("button-toggle")

btn_toggle.addEventListener("click", toggleBackgroud)

function btnOff() {
    btn_toggle.removeEventListener("click", toggleBackgroud )
}


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



   
