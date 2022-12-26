function bgColor() {
  let bg_color = window.document.querySelector('.li-sec-f');
  bg_color.classList.add("ul-second-bg");
  
}
bgColor()

function bgColorLists() {
    let colorsAll = window.document.querySelectorAll("ul")
    colorsAll.forEach(element => {
      element.classList.add("li-sec-f-col")
    });
}
bgColorLists()

function thirdLi() {
  let third_li = window.document.querySelector(".li-third").classList.add("li-third-bg-upper")
}
thirdLi()

function fourthUl() {
 // let fourth_li = document.querySelector(".active").classList.remove("active")
 let fourth_li = document.querySelector(".active").parentElement.parentElement.previousElementSibling.childNodes[1].childNodes[1].classList.add("active")
console.log(fourth_li)
}
fourthUl()

/*function alertText(params) {
  let alert_text = alert(document.querySelector("nav").firstElementChild.firstElementChild.textContent)
  console.log(alert_text)
}
alertText()*/
/*
function changeText(params) {
  let alert_text = alert(document.querySelector("nav").lastElementChild.textContent=params)
  console.log(alert_text)
}
changeText("Changed text")
*/

function selectList(options, divsToAdd) {
  let lists = document.getElementById("lists-first")
  console.log(lists)
  let option = ""
  
  for (let index = 0; index < options.length; index++) {
 option += ` <option value="">${options[index]}</option>`
    
  }
lists.innerHTML = option
divsToAdd.innerHTML = lists
}

selectList(["React", "Angular", "Vue"], ".dropdown-first")

/*function selectList(options, divsToAdd) {
  let lists = document.getElementById("lists-second")
  console.log(lists)
  let option = ""
  
  for (let index = 0; index < options.length; index++) {
 option += ` <option value="${options[index]}">${options[index]}</option>`
    
  }
lists.innerHTML = option
divsToAdd.innerHTML = lists
}
selectList(["Music", "Play football", "Bycling"], ".dropdown-second")
*/


function validateForm() {

let inputs =document.getElementsByTagName("input")
let form = document.querySelector(".form")

form.addEventListener("submit", (e) => {

  e.preventDefault()
 

  for (let i = 0; i < inputs.length; i++) {
   
    let input = inputs[i];
    console.log(input)
  console.log(form)
  if (input.hasAttribute("required") && input.value.length>0 ){
     input.style.border="3px solid green"
  } else {
    input.style.border="3px solid red"
   
  }

  }
})

}



