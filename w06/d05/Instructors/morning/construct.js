function Vehicle(){
    this.moves = true
}

function Car(){
    this.wheels = 4
}


Car.prototype = new Vehicle();

function Hummer(){
    this.wastesGas = true,
    this.driverIsLikelyAsshole = true
}

Hummer.prototype = new Car()