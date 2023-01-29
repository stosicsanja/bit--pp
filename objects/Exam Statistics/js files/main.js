let add = document.querySelector(".add")

add.addEventListener("click", displayDetails)

let row_passed = 1
let row_failed = 1

function displayDetails(e) {
    e.preventDefault()
    

   //form data 
    let language = document.querySelector("select")
   // console.log(language)
    let name = document.querySelector(".name").value
    let grade = document.querySelector(".grade").value

    //function that checks data entry
    if (!name || !grade) {
        alert("Please fill all the boxes")
        return false
    }
    //function that checks the input of uppercase name and surname
    const validate = {
        nameCheck(name) {
          return name.split(" ").every((s) => s[0].toUpperCase() === s[0]);
        } 
    
      }
      
      const isValidName = validate.nameCheck(name);
     // console.log(isValidName);
      if (!validate.nameCheck(name)) {
        alert ("Please, first and laste name should start with capital letter")
        return false
    }
     
  
    //function that checks if the grade is greater than 0 or less than 10
    if (grade<0 || grade>10) {
         alert("Entry should be gretaer than 0 and less than 10")
         return false
    }
    //a function that checks that the grade is greater than 5 and => the student has passed
    if (grade>=5){
        let display_passed = document.querySelector("#display_passed")
        let newRow = display_passed.insertRow(row_passed)
    
        let cell_1 = newRow.insertCell(0)
        let cell_2 = newRow.insertCell(1)
        let cell_3 = newRow.insertCell(2)
    
        cell_1.innerHTML = language.options[language.selectedIndex].text
        cell_2.innerHTML = name
        cell_3.innerHTML = grade
    
        row_passed++

    } else if (grade<5) {
        let display_failed = document.querySelector("#display_failed")
        let newRow = display_failed.insertRow(row_failed)
    
        let cell_1 = newRow.insertCell(0)
        let cell_2 = newRow.insertCell(1)
        let cell_3 = newRow.insertCell(2)
        
    
        cell_1.innerHTML = language.options[language.selectedIndex].text
        cell_2.innerHTML = name
        cell_3.innerHTML = grade
    
        row_failed++
    }
    
    //function that calculates the total number of passed or failed students
     let number_of_passed = document.querySelector(".number-of-passed")
     number_of_passed.innerHTML =  row_passed-1

     let number_of_failed = document.querySelector(".number-of-failed")
     number_of_failed.innerHTML =  row_failed-1

   //function that calculates the total number of students
     let total = document.querySelector(".total")
     let total_students = ((row_failed-1) + (row_passed-1))
     total.innerHTML = "Total students :" +  total_students 

   //a function that calculates the percentage of people who failed
     let percentage_of_failed = document.querySelector(".percentage-of-failed")
     percentage_of_failed.innerHTML =(
        ((row_failed-1) / (total_students)) *
        100
      ).toFixed(0) + " %"

}
