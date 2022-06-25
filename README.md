# _Pizza Parlor_

#### By _**Tyler Emmerson**_

#### _Choose your toppings, size, then add to cart, and you'll get a price for your order._

## Technologies Used

* CSS
* Javascript
* HTML
* jQuery
* BootStrap
* Git
* Markdown
* GitHub

## Description

_{Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.}_

* Allow the user to choose toppings and size for the pizza they'd like to order.
* Create a pizza object constructor with properties for toppings and size.
* Create a prototype method for the cost of a pizza depending on the selections chosen.

## Setup/Installation Requirements

1. Clone this repository to your desktop.
2. Navigate to the top level of directory.
3. Open index.html in your browser.

## Known Bugs

* _Build Your Own pizza is the only working one_
* _None of the other pizza's have preset toppings and sizes_
* _Other pizzas "Add to cart" buttons don't work_
* _Navbar at the top doesn't work_

## License

_<p><a href="LICENSE.txt">MIT</a></p>_

Copyright (c) 2022  Tyler Emmerson

## TEST

Test1: "Create a global var for the toppings to be pushed into an empty array"
Code: var uniqueArray;
Expected Output: uniqueArray()

Test2: "Create object called pizza that will have "toppings, size."
Code: function Pizza(size) {
  this.size = size;
  this.topping = topping;


Test3: "Create a radio selector for size and toppings."
Code: <input type="radio" name="size" value="small"/>
                        <label for="">Small</label>
      <input type="checkbox" name="topping" value="pepperoni">
                        <label for="">pepperoni</label>

Test4: "Create a function for size that will have fixed pricing of $15 $10 $5."
Code: Pizza.prototype.price = function() {
  if (this.size === "small") {
    return 15);
  }
  if (this.size === "medium") {
    return 10);
  }
  if (this.size === "large") {
    return 5);
  }
}

Test 5: "Create a way to take the inputted toppings, add them to an array, then to a string."
Code: const selectedToppings = [];
      
      $('input[name="topping"]:checked').each(function(){
        toppings = $(this).val();
        selectedToppings.push(toppings)
        uniqueArray = selectedToppings.filter(function(item, pos) {
          return selectedToppings.indexOf(item) == pos;
        })
        var uniqueString = uniqueArray.join(", ")

Test 6: "Create a way to take the inputted size and output it to the cart."
Code: ```var selectedSize = $("input:radio[name=size]:checked").val();
      $(".size-pizza").text(selectedSize);```

Test 7: "Create function to take the inputted toppings and output it to the cart."
Code: $(".toppings").text(uniqueString);

Test 8: "Combine size additive $15 $10 $5 and toppings values into a total price."
Code : var newPizza = new Pizza(selectedSize, selectedToppings);
      $(".price").text(newPizza.price());