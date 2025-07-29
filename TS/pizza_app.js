var menu = [
    { name: "Margherita", price: 8.99 },
    { name: "Pepperoni", price: 9.99 },
    { name: "BBQ Chicken", price: 10.99 },
    { name: "Veggie", price: 7.99 }
];
var cashInRegister = 100;
var nextOrderId = 1;
var orderQueue = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        console.error("{pizzaName} is not on the menu.");
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("Order with ID ".concat(orderId, " not found."));
        return;
    }
    order.status = "completed";
    return order;
}
addNewPizza({ name: "Hawaiian", price: 11.99 });
addNewPizza({ name: "Meat Feast", price: 12.99 });
addNewPizza({ name: "Four Cheese", price: 10.49 });
placeOrder("Margherita");
completeOrder(1);
console.log("Current Menu:", menu);
console.log("Cash in Register:", cashInRegister);
console.log("Order Queue:", orderQueue);
