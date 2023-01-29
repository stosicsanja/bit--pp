class Book {
constructor (title, autor, copyrightDate, ISBN, numberOfpages, numberOfchecked, discarded ) {
    this.title = title
    this.autor = autor
    this.copyrightDate = copyrightDate
    this.ISBN = ISBN
    this.numberOfpages = numberOfpages
    this.numberOfchecked = numberOfchecked
    this.discarded = discarded
}   
checkedOut = function (number) {
    this.numberOfchecked = this.numberOfchecked + number
    
}

}

class Manual extends Book {
    super (title, autor, copyrightDate, ISBN, numberOfpages, numberOfchecked, discarded ) {

    }

    olderThan5 = function (year) {
        if (year-this.copyrightDate>5) {
            return "Book is older more than 5 years" 
        } else {
            return "Book is not older more than 5 years"
        }
    }
}

let manual_1 = new Manual ("When Nietzsche wept", "Irvin Jalom",1992, "978-92-95055-12", 323, 50, false)
console.log(manual_1.olderThan5(2023))

class Novel extends Book {
    super (title, autor, copyrightDate, ISBN, numberOfpages, numberOfchecked, discarded ) {
    }
checkedOutThan100 = function (numberOfchecked = 1) {
    if (this.numberOfchecked>100) {
        return "Book is checked out more than 100 times" 
    } else {
        return "Book is not checked out more than 100 times"
    }
}
}

let novel_1 = new Novel ("When Nietzsche wept", "Irvin Jalom",1992, "978-92-95055-12", 323,false)


novel_1.checkedOut(99)


console.log(novel_1.checkedOutThan100())
/*
class Calculator {
    constructor(stack) {
        this.stack = []
    }
  plus = function (num1, num2, operation) {
    operation = num1+num2
    return this.stack.push(operation)   

  }
}

let test_1 = new Calculator ()
test_1.plus("2 3 +")
console.log(test_1.stack)
*/

class CoffeShop {
    constructor(name_) {
        this.name_ = name_
        this.menu = [
            {item: "tuna sandwich", type: "food", price: 3.50},
            {item: "ham and cheese sandwich", type: "food", price: 4.00},
            {item: "bacon and egg", type: "food", price: 4.50},
            {item: "steak", type: "food", price: 6.50},
            {item: "hamburger", type: "food", price: 5.00},
            {item: "cinnamon roll", type: "food", price: 2.00},
            {item: "orange juice", type: "drink", price: 1.50},
            {item: "lemonade", type: "drink", price: 1.25},
            {item: "cranberry juice", type: "drink", price: 2.00},
            {item: "pineapple juice", type: "drink", price: 2.50},
            {item: "lemon iced tea", type: "drink", price: 2.50},
            {item: "vanilla chai latte", type: "drink", price: 3.50},
            {item: "hot chocolate", type: "drink", price: 2.75},
            {item: "iced coffee", type: "drink", price: 2.00}
              ]
        this.orders = []

    }
    addOrder = function (some_item) {
        
    let order = this.menu.filter(el => some_item === el.item);
    if (order) {
      this.orders.push(order)
      return "Order added!"
    } else return this.name_ + " coffee shop does not sell " + some_item
  
}
    fulfillOrder = function () {
        if (this.orders.length === 0) {
            return "All orders have been fulfilled!"
        } else {
             {
                return this.orders.length + " items is ready"
                
            }
            
        }
    }
    listOfOrders = function() {
        return this.orders
      }
    
    dueAmount = function () {
        let sum = 0
        this.orders.forEach(function(element){
         sum+=element.price;
        })
      
          return  sum.toFixed(2)
        
}   
   cheapestItem = function() {
    let cheapest = this.menu[0];
    for (let i = 1; i < this.menu.length; i++) {
      if (this.menu[i].price < cheapest.price) {
        cheapest = this.menu[i];
      }
    }
    return cheapest.item;
  }
}

 let coffes_shop = new CoffeShop ("Arabic-Shop")
  
 coffes_shop.addOrder("steak")
 coffes_shop.addOrder("orange juice")
 console.log( coffes_shop.addOrder("orange juice"))
 console.log( coffes_shop.orders)
 console.log( coffes_shop.fulfillOrder())
 console.log( coffes_shop.listOfOrders())
 console.log( coffes_shop.dueAmount())
 console.log( coffes_shop.cheapestItem())

