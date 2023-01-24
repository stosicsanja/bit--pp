/*
class Person{
  constructor(name,surname){ 
    this.name = name
    this.surname = surname
}
}


class Employee extends Person {
    constructor (name, surname, job, salary) { 
    super(name,surname)
    this.job = job
    this.salary = salary
} 

getData = function () {
    return this.name + " " + this.surname  + " " + this.salary
}

getSalary = function () {
    return this.salary
}

increaseSalary = function () {
    this.salary = this.salary + (this.salary * 10/100)
    return this.salary
}
}
let person_1 = new Person ("Sanja", "Stosic")
let employee_1 = new Employee ("Sanja", "Stosic", "front-end dev", 2000)
console.log(employee_1.getData())
console.log(employee_1.getSalary())
console.log(employee_1.increaseSalary())
console.log(employee_1.getSalary())

class Developer extends Employee {
    constructor (name, surname, job, salary, specialization) { 
    super( name, surname, job, salary)
    this.specialization = specialization

}

getSpecialization = function () {
    return this.specialization
}
}

let developer_1 = new Developer("Sanja", "Stosic", "developer", 1.000, "JS developer")
console.log(developer_1.getSpecialization())


class Manager extends Developer{
    constructor (name, surname, job, salary, specialization, department) { 
    super(name, surname, job, salary, specialization)
    this.department = department

}

getDepartment = function () {
    return this.department
}

changeDepartment = function (newDepartment) {
    this.department = newDepartment
    return newDepartment
}
}

let manager_1 = new Manager("Sanja", "Stosic", "developer", 1.000, "JS developer", "front-end developer")
console.log(manager_1.getDepartment())
console.log(manager_1.changeDepartment("back-end dev"))
console.log(manager_1.getDepartment())

*/
class App {
    constructor (name, licence, stars) { 
    this.name = name
    this.licence = licence
    this.stars = stars
  }
  
  isCCLicence = function () {
      if (this.licence === "CC") {
          return "Yes, it is CC licence"
      } else return "No, it is not CC licence"
    
  } 
  like = function () {
  return this.stars = (this.stars+0.01)
    //return this.stars++
    
  } 
  
  showStars = function () {
      return this.stars.toFixed(2)
   
       }
    } 


  class WebApp extends App {
    constructor(name, licence, stars, url,technogies) { 
      super(name, licence, stars)
      this.url = url
      this.technogies = technogies
  }
  
 
  
  getData = function () {
      return this.name + " " + this.url + " " +this.technogies + " " +this.licence + " " + this.stars 
  } 
  
  reactBased = function () {
      if (this.technogies === "react") {
          return "Yes, React is used"
      } else return "No, React is not used"
    
  } 
}
  
  
  let webApp_1 = new WebApp("facebook", "http://www.facebook.com", 4.0, "CC0", "react" )
  console.log(webApp_1.getData())
  console.log(webApp_1.reactBased())
  console.log(webApp_1.isCCLicence())
  console.log(webApp_1.like())
  webApp_1.like()
  webApp_1.like()
  webApp_1.like()
  console.log(webApp_1.showStars())
  
  class MobileApp extends App {
    constructor(name, platforms, licence, stars) { 
      super( name, licence, stars)
      this.platforms = platforms
  }
 
  
getData = function () {
      return this.name + " " + this.platforms + " " +this.licence + " " + this.stars 
  } 
  
forAndroid = function () {
      if (this.platforms === "android") {
          return "Yes, Android is used"
      } else return "No, Android is not used"
    
  } 
}
  
  let mobileApp_1  = new MobileApp("facebook", "android", "CC0", 3.9 )
  console.log(mobileApp_1.getData())
  console.log(mobileApp_1.forAndroid())
  console.log(mobileApp_1.isCCLicence())
  console.log(mobileApp_1.like())
  mobileApp_1.like()
  mobileApp_1.like()
  mobileApp_1.like()
  console.log(mobileApp_1.showStars())
  
  