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
 var cartString = "In your cart, you have";
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  } 
   else if (cart.length === 1) {
    return `${cartString} ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2) {
    return `${cartString} ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else { for (var i = 0; i < cart.length; i++)
  { 
    return `${cartString} ${cart[iiI].itemName} at $${cart[iiI].itemPrice}, ${cart[iiI].itemName} at $${cart[iiI].itemPrice}, and ${cart[iiI].itemName} at $${cart[iiI].itemPrice}.`;
  }
  }console.log(viewCart())
}


function total() {
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++){
    totalPrice = totalPrice + cart[i].itemPrice;
  }
return totalPrice
}

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  } else if (cardNumber) {
return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
} }
