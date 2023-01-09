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
        e.target.style.border= "1px solid red"
    }
   
    })

    image.addEventListener("click", (e)=> {
        console.log(e.target)
    })
 }




