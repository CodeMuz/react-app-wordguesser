// Define Vehicle
function Vehicle(){}

// Define Car
function Car(){}
Car.prototype = new Vehicle();

// Define Ford
function Ford(){}
Ford.prototype = new Car();

// Create a Ford
var myFord = new Ford();

// let's see the price of it
Vehicle.prototype.price = 2;
myFord.price;


// F --> C --> V --> Object.prototype --> null
var V = {};
var C = Object.create(V);
var F = Object.create(C);

V.size = 'big';