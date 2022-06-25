//Global Variable
//empty array to push toppings into for final result listing
var uniqueArray;
// BUSINESS LOGIC
function Pizza(size) {
  this.size = size;
  this.topping = uniqueArray.length;
}

Pizza.prototype.price = function() {
  if (this.size === "small") {
    return 15 + uniqueArray.length;
  }
  if (this.size === "medium") {
    return 10 + uniqueArray.length;
  }
  if (this.size === "large") {
    return 5 + uniqueArray.length;
  }
}

// UI LOGIC
  $(document).ready(function() {
    $("#pizza-append").submit(function(event) {

      event.preventDefault();
      // open array for toppings to go into
      const selectedToppings = [];
      
      $('input[name="topping"]:checked').each(function(){
        toppings = $(this).val();
        selectedToppings.push(toppings)
        uniqueArray = selectedToppings.filter(function(item, pos) {
          return selectedToppings.indexOf(item) == pos;
        })
        //return the string as an array with ", "
        var uniqueString = uniqueArray.join(", ")
        //create text label for toppings to display in-cart
        $(".toppings").text(uniqueString);
      });
      var selectedSize = $("input:radio[name=size]:checked").val();
      //create text label for size to display in-cart
      $(".size-pizza").text(selectedSize);
      
      //calculate total price
      var newPizza = new Pizza(selectedSize, selectedToppings);
      //create text label for price to display in-cart
      $(".price").text(newPizza.price());
    });
});