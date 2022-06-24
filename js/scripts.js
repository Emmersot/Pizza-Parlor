// BUSINESS LOGIC
function Pizza(toppings, size, sauce, price) {
  this.toppings = toppings;
  this.size = size;
  this.sauce = sauce;
  this.price = price;
  this.cartTotal = price;
}
// UI LOGIC
  $(document).ready(function() {
    $("form#pizza-order-form").submit(function(event) {
      event.preventDefault();
      const selectedSize = document.getElementById("sizeList");
      const selectedSauce = document.getElementById("sauceList");
      const selectedToppings = [];
      $('input[name="toppingList"]:checked').each(function(){
        selectedToppings.push($(this).val());
      });
      //set price based on size
      if (selectedSize === "small") {
        sizePrice = 4;
      }
      else if (selectedSize === "medium") {
        sizePrice = 6;
      }
      else if (selectedSize === "large") {
        sizePrice = 8;
      }
      //set price based on sauce selected
      if (selectedSauce === "marinara") {
        saucePrice = 2;
      }
      else (sizePrice = 3);
      //set price based on number of toppings selected
      toppingsPrice = 10;
      //calculate total price
      totalPrice = sizePrice + saucePrice + toppingsPrice;
      //create pizza with selected options
      let newPizza = Pizza(selectedToppings, selectedSize, selectedSauce, totalPrice)

      //create text label to display in-cart
      addedPizza += newPizza.size + ", " + newPizza.sauce + ", " + newPizza.totalPrice + "<br>"+ toString(newPizza.toppings) + "<br><br>"


      $("#newPizza").html(addedPizza);
  });
});
// will have the cart-button append the added toppings/sizes/sauce to the cart