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
