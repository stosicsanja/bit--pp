
let field = document.getElementById("field")
let background = document.querySelector(".background")
let player = document.getElementById("player")

function movePlayer (event) {
    let player = document.getElementById("player")

    let x = event.offsetX
    let y = event.offsetY
    console.log(x,y)
    player.style.left = `${x-10}px`
    player.style.top = `${y-10}px`

}
let btn_stop = document.getElementById("stop-move")
btn_stop.addEventListener("click",() => {
    field.removeEventListener("click", movePlayer)
})

//field.addEventListener("click", movePlayer)