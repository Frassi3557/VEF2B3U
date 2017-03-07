var pizza = {
  price:"2.795 kr, ",
  size:"medium, ",
  toppings:"pepperoni, skinka, piparostur, beikonkurl ",
  menu: function() {
    document.write(pizza.price + pizza.size + pizza.toppings);
  }
};

pizza.menu();


function Pizza(name, price, size, toppings) {
  this.name = name;
  this.price = price;
  this.size = size;
  this.toppings = topings;
  
  this.pizzaInfo = function() {
    document.write(this.name + this.price + this.size + this.toppings);
  };
}

var festival = new Pizza('Festival ','3.595 kr ','Large ','pepperoni, rjómaostur, jalapeno, nachos flögur, rauðlaukur, fajitas kjúklingur ');
festival.pizzaInfo();


var tokyo = new Pizza('Tokyo ','3.245 kr ','Large ','skinka, hakk, beikonkurl, piparostur, svartur pipar ');
tokyo.pizzaInfo();