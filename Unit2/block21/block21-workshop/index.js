class Car { 
    constructor (make, model, year) { 
        this.make = make;
        this.model = model; 
        this.year = year;
    }
    getDesciption () { 
        return "Cars make is " + this.make + " model is " + this.model + " year created is " + this.year
    }
}

class ElectricCar extends Car { 
    constructor (make, model, year, range) { 
        super (make, model, year); 
        this.range = range; 
    }

    getDesciption () { 
        return super.getDesciption() + "car range is" + this.range;
        
    }

}

const myElectricCar = new ElectricCar ("Tesla", "Model S", 2019, 300)
console.log(myElectricCar.getDesciption());