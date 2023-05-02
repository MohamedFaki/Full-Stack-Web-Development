let customer = {
    firstName : "jake",
    lastName : "smith", 
    email : "jaekSmih!aol.com", 
    phone : undefined, 
    zipCode : "631",
    favoriteFlavors : 32,
    cupSize : "medium",
    favoriteStore : "target", 
    firstVisit : false, 

};


customer["email"] = "jak35mith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "Matcha"];


delete customer["zipCode"];
delete customer["favoriteStore"];


customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

console.log(customer);