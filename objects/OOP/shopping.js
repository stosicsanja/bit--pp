// ZA VEZBANJE: Probaj sve ove zadatke da preradis da budu klase. Mislim da ce ti znaciti.



function Product (name, price, expiration_date) {
this.product_id = Math.floor(Math.random()*90000) + 10000;
this.name = name
this.price = price
this.expiration_date = expiration_date

this.getInfo = function () {
    let result = ""
   return result += `${this.name[0].toUpperCase()}${this.name[this.name.length-1].toUpperCase()}${this.product_id}, ${this.name}, ${this.price}`
    
} }

//console.log(someProduct1.getInfo())

function ShoppingBag() {
    this.product_list = []
     this.addProduct = function (product) {
        if (product.expiration_date >= new Date().getFullYear()) {
           return this.product_list.push(product)
         }
    }

    this.totalProduct = function () {
        let sum = 0
        for (let index = 0; index < this.product_list.length; index++) {
            sum += this.product_list[index].price
            }
            return sum
    }

    this.averageSum = function() {
        let sum = 0
        for (let index = 0; index < this.product_list.length; index++) {
            sum += this.product_list[index].price
            }
        let average_sum = 0
        average_sum = sum/this.product_list.length
        return average_sum.toFixed(3)
    }
     this.getMostExpensive = function () {
        this.most_exp = this.product_list.sort((a,b) => {
            return a-b
        })
        return this.most_exp[0].name
     }
    }   

    let someProduct1= new Product ("banana", 23.43, 2024)
    let someProduct2 = new Product ("bread", 12.78, 2025)
    let shoppBag = new ShoppingBag()
   
 
     shoppBag.addProduct(someProduct1)
     shoppBag.addProduct(someProduct2)
   // console.log(shoppBag.product_list)    
    console.log(shoppBag.totalProduct())
   // console.log(shoppBag.averageSum())
   // console.log(shoppBag.getMostExpensive())

function PaymentCard(account_balance, active_or_inactive_status, until_date) {
this.account_balance= account_balance
this.active_or_inactive_status= active_or_inactive_status
this.until_date = until_date
this.checkoutAndBuy = function () {
    let balance_in_the_wallet = shoppBag.totalProduct()
    if (this.account_balance < balance_in_the_wallet ) {
        return "You need more "  + (balance_in_the_wallet - account_balance).toFixed(2) +  " money to buy"    
    } else if (this.active_or_inactive_status==="active")  {
        return "The card is active and have enought funds. Successful purchase!"
    } else return "The card is not active"
}
}
let paymentCard_1 = new PaymentCard(38.45, "active", "30/12/2025")
console.log(paymentCard_1.checkoutAndBuy())
