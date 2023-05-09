const coffeeMenu = require("./coffee");

// Prompt 2:

console.table(coffeeMenu.map(drink => drink.name));

// Prompt 3:
console.table(coffeeMenu.filter(drink => drink.price <= 5));

// Prompt 4:
console.table(coffeeMenu.filter(drink => drink.price % 2 === 0));

// Prompt 5:
const totalPrice = coffeeMenu.reduce((acc, drink) => acc + drink.price, 0);
console.log(`Total price for one of each drink: $${totalPrice}.`);

// Prompt 6:
console.table(coffeeMenu.filter(drink => drink.seasonal));

// Prompt 7:
console.table(
  coffeeMenu
    .filter(drink => drink.seasonal)
    .map(drink => ({ name: `${drink.name} with imported beans`, price: drink.price }))
);