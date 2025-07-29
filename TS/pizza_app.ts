type Pizza ={
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza: Pizza,
    status: string
}

const menu: Pizza[] = [
    {name: "Margherita", price: 8.99},
    {name: "Pepperoni", price: 9.99},
    {name: "BBQ Chicken", price: 10.99},
    {name: "Veggie", price: 7.99}
]

let cashInRegister: number = 100
let nextOrderId: number = 1
const orderQueue: Order[] = []

function addNewPizza(pizzaObj: Pizza){
    menu.push(pizzaObj);
}

function placeOrder(pizzaName: string){
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`{pizzaName} is not on the menu.`)
        return
    }

    cashInRegister += selectedPizza.price

    const newOrder = {id: nextOrderId++, pizza: selectedPizza, status: "ordered"}

    orderQueue.push(newOrder)
    return newOrder;
}

function completeOrder(orderId: number){
    const order = orderQueue.find( order => order.id === orderId)

    if (!order) {
        console.error(`Order with ID ${orderId} not found.`)
        return
    }

    order.status = "completed"

    return order
}

addNewPizza({name: "Hawaiian", price: 11.99})
addNewPizza({name: "Meat Feast", price: 12.99})
addNewPizza({name: "Four Cheese", price: 10.49})

placeOrder("Margherita")

completeOrder(1)

console.log("Current Menu:", menu)
console.log("Cash in Register:", cashInRegister)
console.log("Order Queue:", orderQueue)

