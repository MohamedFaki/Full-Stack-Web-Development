class Home { 
    constructor(rooms, bathrooms, squareFeet) { 
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        this.squareFeet = squareFeet
    }
    getModel () { 
        return "This home has " + this.rooms + " rooms, " + this.bathrooms + ", and is " + this.squareFeet + ".";
    }
}

class SingleFamilyHome extends Home { 
    constructor(rooms, bathrooms, squareFeet, yardSize) { 
    super(rooms, bathrooms, squareFeet);
    this.yardSize = yardSize;
    }
    getModel () { 
        return super.getModel() + " It has a " + yardSize + " square foot yard."
    }
}

class Apartment extends Home { 
    constructor (rooms, bathrooms, squareFeet, floor) { 
        super(rooms, bathrooms, squareFeet);
        this.floor = floor;
    }
    getModel () { 
        return super.getModel + "It is on floor " + this.floor +  ".";
    }
}