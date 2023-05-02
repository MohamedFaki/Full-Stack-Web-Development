const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// Code defines 3 objects with 5 property
// if subscription = True 25% discount
// if coupn = true -10$
// End of script return console.log(Your grand total is $(finalAmount))

function myFinalAmount(prescription) { 
    let total = prescription.pricePerRefill*prescription.refills;
    if(prescription.subscription) { 
        total = total * 0.75;
    }
    if(prescription.coupon) { 
        total = total - 10;
    }
    return total;
}

console.log("Timmy's grand total is $" + myFinalAmount(timmy));
console.log("Sarah's grand total is $" + myFinalAmount(sarah)); 
console.log("rocky's grand total is $" + myFinalAmount(rocky));
