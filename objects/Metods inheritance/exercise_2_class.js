
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



class StackCalc {
  constructor() {
    this.stack = []
  }

  run(instructions) {
    if (instructions === '') {
      return 0
    }
    const inst_arr = instructions.split(' ');
    for (let i = 0; i < inst_arr.length; i++) {
      const inst = inst_arr[i]
      if (inst === '+') {
        this.add()
      } else if (inst === '-') {
        this.subtract()
      } else if (inst === '*') {
        this.multiply()
      } else if (inst === '/') {
        this.divide()
      } else if (inst === 'DUP') {
        this.duplicate()
      } else if (inst === 'POP') {
        this.pop()
      } else if (!isNaN(inst)) {
        this.push(parseInt(inst));
      } else {
        return `Invalid instruction: ${inst}`
      }
    }
    return this.getValue()
  }

  add() {
    const num1 = this.stack.pop()
    const num2 = this.stack.pop()
    this.stack.push(num1 + num2)
  }

  subtract() {
    const num1 = this.stack.pop()
    const num2 = this.stack.pop()
    this.stack.push(num1 - num2)
  }

  multiply() {
    const num1 = this.stack.pop()
    const num2 = this.stack.pop()
    this.stack.push(num1 * num2)
  }

  divide() {
    const num1 = this.stack.pop()
    const num2 = this.stack.pop()
    this.stack.push(num1 / num2)
  }

  duplicate() {
    const num = this.stack[this.stack.length - 1]
    this.stack.push(num)
  }

  pop() {
    this.stack.pop()
  }

  push(num) {
    this.stack.push(num)
  }

  getValue() {
    return this.stack[this.stack.length - 1]
  }
}
const calculator_1 = new StackCalc()
console.log(calculator_1.run('5 6 +'))
console.log(calculator_1.run('3 DUP +'))
console.log(calculator_1.run('6 5 5 7 * - /'))
console.log(calculator_1.run('x y +'))


class CoffeShop {
    constructor(name, menu, orders) {
        this.name = name
        this.menu = menu
        this.orders = []
    }

    addOrder = function(some_item) {
        if (this.menu.filter(m => m.item == some_item)) {
            this.orders.push(some_item);
            return "Order added!"
          } else return console.log("This item is currently unavailable!");
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
        let total = 0
    this.orders.forEach(order => {
      let amount = this.menu.find(el => el.item == order)
      total += amount.price
    })
    return total.toFixed(2)
        
    }   
    cheapestItem = function() {
    let cheapest = this.menu[0]
    for (let i = 1; i < this.menu.length; i++) {
      if (this.menu[i].price < cheapest.price) {
        cheapest = this.menu[i]
      }
    }
    return cheapest.item
    }

    drinkOnly = function () {
       
        return this.menu.filter((el) => el.type == "drink")
        .map((el) => el.item)
        
    }

    foodOnly = function () {
       
    return this.menu.filter((el) => el.type == "food")
    .map((el) => el.item)
    
    }
    }


 let coffes_shop = new CoffeShop ("Arabic-Shop",[
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
      ])
  

 console.log( coffes_shop.addOrder("orange juice"))
 console.log( coffes_shop.addOrder("iced coffee"))
 console.log( coffes_shop.orders)
 console.log( coffes_shop.fulfillOrder())
 console.log( coffes_shop.listOfOrders())
 console.log( coffes_shop.dueAmount())
 console.log( coffes_shop.cheapestItem())
 console.log( coffes_shop.drinkOnly())
 console.log( coffes_shop.foodOnly())

