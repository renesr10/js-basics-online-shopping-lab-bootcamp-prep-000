var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) { 
var price = Math.floor(Math.random()*100)
var itemCart = {itemName: item, itemPrice: price};
cart.push(itemCart)
return `${item} has been added to your cart.`;
} 

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
  } var cartString = "In your cart, you have";
  if (cart.length === 1) {
    return `${cartString} ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
}


function total() {
  var totalPrice = 0;
  for (let i = 0; i < cart.length; i++){
    totalPrice = totalPrice + cart[i].itemPrice;
  }
return totalPrice
}

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    
  }
return `Your total cost is ${total()} which will be charged to the card ${placeOrder()}.`
}
