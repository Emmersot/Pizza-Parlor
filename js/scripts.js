// BUSINESS LOGIC
function Pizza(toppings, size, price, totalPrice) {
  this.toppings = [];
  this.size = 0;
  this.sauce = 0;
  this.price = 0;
  this.cartTotal = 0;
}
const size = [
  {size: "8", price: 4},
  {size: "12", price: 6},
  {size: "20", price: 10}
]
const sauce = [
  {sauce: "marinara", price: 1},
  {sauce: "pesto", price: 1},
  {sauce: "alfredo", price: 1}
]

Pizza.prototype.cartTotal = function() {
  let cartTotal = 0;
  for (let i = 0; i < size.length; i++) {
    if (this.size === size[i].size){
      cartTotal += size[i].price;
    }
  }
  for (let i = 0; i < sauce.length; i++) {
    if (this.sauce === sauce[i].sauce){
      cartTotal += sauce[i].price;
    }
  }
  for (let i = 0; i < this.toppings.length; i++) {
    cartTotal += this.toppings[i].length;
  }
  console.log(cartTotal);
  return cartTotal;
}
// UI LOGIC
$(document).ready(function() {

}
// add to cart button
$("#cart-button").click(function(event) {
  event.preventDefault();
  // will have the cart-button append the added toppings/sizes/sauce to the cart