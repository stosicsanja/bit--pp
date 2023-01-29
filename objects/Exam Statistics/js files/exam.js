class Student {
    constructor(name, lastname) {
      this.name = name;
      this.lastname = lastname;
    }
  
    getStudentData() {
      return this.name + " " + this.lastname;
    }
  
  }
  class Subject {
    constructor(name) {
      this.name = name;
    }
  
    getSubjectName() {
      return this.name;
    }
  
  }
  
  class Exam {
    constructor(subject, student, grade) {
      this.subject = subject;
      this.student = student;
      this.grade = grade;
    }
  
    getExamInfo() {
      return this.subject.getSubjectName() + " - " + this.student.getStudentData() 
    }
  
    hasPassed() {
      if(this.grade > 5) {
        return true;
      } 
      return false;
    }
  };
  


let student_1 = new Student ("Sanja", "Stosic")
console.log(student_1.getStudentData())


let subject_1 = new Subject ("JavaScript")
console.log(subject_1.getSubjectName())


let exam_1 = new Exam ("Sanja", "Stosic","JavaScript", 7)
let exam_2 = new Exam (subject_1,student_1,7)

console.log(exam_2.getExamInfo())
console.log(exam_2.hasPassed())
/*
let row_passed = 1
let row_failed = 1

function getSelectValue() {
    let language = document.querySelector(".language").value
}

function displayDetails(e) {
    e.preventDefault()
    let language_1 = getSelectValue()
    let name = document.querySelector(".name").value
    let grade = document.querySelector(".grade").value
console.log(name)
console.log(grade)
    if (!name ||!grade) {
        alert("Please fill all the boxes")
    }
     
    if (grade>5){
        let display_passed = document.querySelector("#display_passed")
        let newRow = display_passed.insertRow(row_passed)
    
        let cell_1 = newRow.insertCell(0)
        let cell_2 = newRow.insertCell(1)
        let cell_3 = newRow.insertCell(2)
    
        cell_1.innerHTML = language_1
        cell_2.innerHTML = name
        cell_3.innerHTML = grade
    
        row_passed++
    } else if (grade<5) {
        let display_failed = document.querySelector("#display_failed")
        let newRow = display_failed.insertRow(row_failed)
    
        let cell_1 = newRow.insertCell(0)
        let cell_2 = newRow.insertCell(1)
        let cell_3 = newRow.insertCell(2)
        
    
        cell_1.innerHTML = language_1
        cell_2.innerHTML = name
        cell_3.innerHTML = grade
    
        row_failed++
    }
    

    
}
*/