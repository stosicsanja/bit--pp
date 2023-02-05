/*

//VEZBANJE

let json = {
    "name" : "Sanja",
    "email" : "sanjas@gmail.com"
}



let res = JSON.stringify(json)
let received = JSON.parse(res)

console.log(json)
console.log(res)
console.log(received)

let ajaxCall = new XMLHttpRequest()
console.dir(ajaxCall)

ajaxCall.onreadystatechange = function () {

    
    if(this.readyState === 4){
        res = JSON.parse(this.responseText)

        res.forEach((e) =>{
            console.log(e)
        })
    }
    
}
ajaxCall.open("GET", 'https://jsonplaceholder.typicode.com/todos')
ajaxCall.send()


function getSomething() {
    return new Promise((resolve, reject) => {
        //resolve("some data")
      reject("some error")
    })
}

getSomething().then( (data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})

getSomething().then(data => {
    console.log(data)
}).catch (err => {
    console.log(err)
})
*/

/*
//import {axios} from "axios"


async function getUser() {
    try {
        const response = await get('https://randomuser.me/api/')
        return response.data
    } catch (err) {
        console.log(err)
    }

}

getUser().then(response => {
    console.log(JSON.stringify(response.results))
})
*/
/*
const axios = require('axios')
import { get } from "axios"

axios
  .get('https://jsonplaceholder.typicode.com/todos')
  .then(function (response) {
    // handle success
    let todos = response.data;
    console.log(JSON.stringify(todos));
});
*/
/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

    $.get('https://jsonplaceholder.typicode.com/todos', function (response) {
  console.log(response);
});



let request = $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    method: "GET",
});

request.done(function (response) {
    console.log(JSON.stringify(response));
});
*/


//GET COUNTRY

let input = document.getElementById("input_text")
let btn = document.querySelector("button")
let result = document.querySelector("p")
let country
console.log(input)

function getCountry() {
    
    let ajaxCall_1 = new XMLHttpRequest()

    ajaxCall_1.open("GET", "http://www.geoplugin.net/xml.gp?ip=")
    ajaxCall_1.send()

    ajaxCall_1.onload = function () {
    if (ajaxCall_1.status >= 200 && ajaxCall_1.status < 300 && ajaxCall_1.readyState===4) {
        console.log(ajaxCall_1.responseText);
      let id = ajaxCall_1.responseXML.querySelector("geoplugin_request").textContent
    if (input.value === id) {
       country = ajaxCall_1.responseXML.querySelector("geoplugin_countryName") 
       
       result.innerHTML += country.textContent  
}
    }}
}

btn.addEventListener("click", getCountry)

//GET IMAGE

let btn_img = document.getElementById("get_image")
let image_here = document.getElementById("image_here")
console.log(btn,image_here)


function getImage() {
    let ajaxCall_2 = new XMLHttpRequest()
    
    ajaxCall_2.open("GET","https://dog.ceo/api/breeds/image/random",true )
    ajaxCall_2.send()

    ajaxCall_2.onreadystatechange = function() { 
    if (ajaxCall_2.status >= 200 && ajaxCall_2.status < 300 && ajaxCall_2.readyState===4){
      console.log(this.responseText)
      let response = JSON.parse(this.responseText)
      console.log(response)
      console.log(response.message)
      image_here.src = response.message

    }

    }
}

btn_img.addEventListener("click", getImage)

