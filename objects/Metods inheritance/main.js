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




// KOMENTAR: Gde je parent funkcija App? :) 

function WebApp(name, url, technogies, licence, stars) {
    this.name = name
    this.url = url
    this.technogies = technogies
    this.licence = licence
    this.stars = stars
}


WebApp.prototype.getData = function () {
    return this.name + " " + this.url + " " +this.technogies + " " +this.licence + " " + this.stars 
} 

WebApp.prototype.reactBased = function () {
    if (this.technogies === "react") {
        return "Yes, React is used"
    } else return "No, React is not used"
  
} 

WebApp.prototype.isCCLicence = function () {
    if (this.licence === "CC") {
        return "Yes, it is CC licence"
    } else return "No, it is not CC licence"
  
} 
WebApp.prototype.like = function () {
return this.stars = (this.stars+0.01)
  //return this.stars++
  
} 

WebApp.prototype.showStars = function () {
    return this.stars.toFixed(2)
 
    
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
    this.name = name
    this.platforms = platforms
    this.licence = licence
    this.stars = stars
}
MobileApp.prototype.getData = function () {
    return this.name + " " + this.platforms + " " +this.licence + " " + this.stars 
} 

MobileApp.prototype.forAndroid = function () {
    if (this.platforms === "android") {
        return "Yes, Android is used"
    } else return "No, Android is not used"
  
} 
MobileApp.prototype.isCCLicence = function () {
    if (this.licence === "CC") {
        return "Yes, it is CC licence"
    } else return "No, it is not CC licence"
  
} 
MobileApp.prototype.like = function () {
return this.stars = (this.stars+0.01)
  //return this.stars++
  
} 

MobileApp.prototype.showStars = function () {
    return this.stars.toFixed(2)
 
    
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

