/*
function Person(name, surname){
    this.name = name
    this.surname = surname
}

function Employee(name, surname, job, salary) {
    Person.call(this, name,surname)
    this.job = job
    this.salary = salary
}

Employee.prototype = Object.create(Person.prototype)
Employee.prototype.constructor = Employee

Employee.prototype.getData = function () {
    return this.name + " " + this.surname + " " + this.salary
}

Employee.prototype.getSalary = function () {
    return this.salary
}

Employee.prototype.increaseSalary = function () {
    this.salary = this.salary + (this.salary * 10/100)
    return this.salary
}

let employee_1 = new Employee ("Sanja", "Stosic", "front-end dev", 2000)
console.log(employee_1.getData())
console.log(employee_1.getSalary())
console.log(employee_1.increaseSalary())
console.log(employee_1.getSalary())

function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary)
    this.specialization = specialization

}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    return this.specialization
}

let developer_1 = new Developer("Sanja", "Stosic", "developer", 1.000, "JS developer")
console.log(developer_1.getSpecialization())


function Manager(name, surname, job, salary, specialization, department) {
    Developer.call(this, name, surname, job, salary, specialization)
    this.department = department

}
Manager.prototype = Object.create(Developer.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
    return this.department
}

Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment
    return newDepartment
   
}

let manager_1 = new Manager("Sanja", "Stosic", "developer", 1.000, "JS developer", "front-end developer")
console.log(manager_1.getDepartment())
console.log(manager_1.changeDepartment("back-end dev"))
console.log(manager_1.getDepartment())
*/
function App(name, licence, stars) {
  this.name = name
  this.licence = licence
  this.stars = stars
}

App.prototype.isCCLicence = function () {
    if (this.licence === "CC") {
        return "Yes, it is CC licence"
    } else return "No, it is not CC licence"
  
} 
App.prototype.like = function () {
return this.stars = (this.stars+0.01)
  //return this.stars++
  
} 

App.prototype.showStars = function () {
    return this.stars.toFixed(2)
 
    
  } 
function WebApp(name, url, technogies, licence, stars) {
    App.call(this, name, licence, stars)
    this.url = url
    this.technogies = technogies
}

WebApp.prototype = Object.create(App.prototype)
WebApp.prototype.constructor = WebApp

WebApp.prototype.getData = function () {
    return this.name + " " + this.url + " " +this.technogies + " " +this.licence + " " + this.stars 
} 

WebApp.prototype.reactBased = function () {
    if (this.technogies === "react") {
        return "Yes, React is used"
    } else return "No, React is not used"
  
} 



let webApp_1 = new WebApp("facebook", "http://www.facebook.com", "react", "CC0", 4.0 )
console.log(webApp_1.getData())
console.log(webApp_1.reactBased())
console.log(webApp_1.isCCLicence())
console.log(webApp_1.like())
webApp_1.like()
webApp_1.like()
webApp_1.like()
console.log(webApp_1.showStars())

function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars)
    this.platforms = platforms
}

MobileApp.prototype = Object.create(App.prototype)
MobileApp.prototype.constructor = MobileApp

MobileApp.prototype.getData = function () {
    return this.name + " " + this.platforms + " " +this.licence + " " + this.stars 
} 

MobileApp.prototype.forAndroid = function () {
    if (this.platforms === "android") {
        return "Yes, Android is used"
    } else return "No, Android is not used"
  
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

