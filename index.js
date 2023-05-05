//get access to other file
const coffeeMenu = require("./coffee_data");

//3. Print an array of all the drinks on the menu.

const allofthedrinks = coffeeMenu.map(function (drink) {
  return drink.name;
});

console.log(allofthedrinks);
//4. Print an array of drinks that cost 5 and under.

const underfivedrinks = coffeeMenu.filter(function (drink) {
  return drink.price <= 5;
});

console.log(underfivedrinks);
//5. Print an array of drinks that are priced at an even number.

const evendrinks = coffeeMenu.filter(function (drink) {
  return drink.price % 2 === 0;
});

console.log(evendrinks);
//6. Print the total if you were to order one of every drink.

const totaldrinks = coffeeMenu.reduce(function (add, drink) {
  return add + drink.price;
});

console.log(totaldrinks);
//7. Print an array with all the drinks that are seasonal.

const seasonaldrinks = coffeeMenu.filter(function (drink) {
  return drink.seasonal;
});

console.log(seasonaldrinks);
