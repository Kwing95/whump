import React from "react";

const gameName = "Game Name";

const aboutText = "This game is intended to help teach you how to get to your classes using the Ann Arbor busses quickly so you never have to miss class!";

const locations = ['BBB', 'Dude', 'Lorch', 'Pierpont'];

let clockH = 1;
let clockM = 15;


function Bus(name, freq) {
  this.name = name; // Name of the bus
  this.freq = freq; // Frequency of bus arrival
  //this.time = time; // Start time of the bus
}

function BusStop(id, name, weight, busses, options) {
  this.id      = id;     // Unique ID (maybe should be different from building IDs too?)
  this.name    = name;   // Name of the bus station
  this.weight  = weight; // Weight of the bus station
  this.busses  = busses; // An Array of busses
  this.options = options;  // An array of tuples of buildings you can go to and the time it takes to get to them
}

function Buildings(id, name, options) {
  this.id      = id;       // Unique ID (maybe should be different from building IDs too?)
  this.name    = name;     // Name of the building
  this.options = options;  // An array of tuples of buildings you can go to and the time it takes to get to them
}

function User(currLoc, prevLoc, prevTim) {
  this.currLoc = currLoc;
  this.prevLoc = prevLoc;
  this.prevTim = prevTim;
}

// Create busses
let bursleyBaits  = new Bus("Bursley-Baits", 10);
let commuterSouth = new Bus("Commuter South", 15);
 

//Create Buildings


// 0
let bbbOptions = {"Dude":2, "PierpontBBStop":3, "PierpontCSStop": 3};
let bbb = new Buildings(0, "BBB", bbbOptions);

// 1
let pierpontOptions = {"Dude":2, "PierpontBBStop":1, "PierponstCSStop":2}
let pierpont = new Buildings(1, "Pierpont", pierpontOptions);

// 2
let lorchOptions = {"EastQuadStop": 1, "CClittle": 3};
let lorch = new Buildings(2, "Lorch", lorchOptions);

// 3
let dudeOptions = {"Pierpont": 2, "BBB": 2, "PierpontBBStop":3, "PierponstCSStop":2};
let dude = new Buildings(3, "Dude", dudeOptions);


// Create Bus Stops
// 4
let pierpontBBStopOptions = {"BBB": 3, "Pierpont":1, "Dude": 3};
let pierpontBBStopBuses = [bursleyBaits];
let pierpontBBBusStop = new BusStop(4, "Pierpont BB Bus Stop",0,pierpontBBStopBuses,pierpontBBStopOptions);

//5
let pierpontCStopOptions = {"BBB": 3, "Pierpont":1, "Dude": 3};
let pierpontCSBusStopBuses = [commuterSouth];
let pierpontCSBusStop = new BusStop(4, "Pierpont CS Bus Stop",0,pierpontCSBusStopBuses,pierpontCStopOptions);

//6
let ccLittleBusStopOptions = {"Lorch": 2, "EastQuadStop": 2};
let ccLittleBusStopBuses = [commuterSouth];
let ccLittleBusStop = new BusStop(4, "CC Little Bus Stop",0,ccLittleBusStopBuses,ccLittleBusStopOptions);

//7
let eastQuadBusStopOptions = {"CClittle": 2, "Lorch": 1};
let eastQuadBusStopBuses = [commuterSouth];
let eastQuadBustStop = new BusStop(4, "East Quad Bus Stop",0,eastQuadBusStopBuses,eastQuadBusStopOptions);


export { gameName, aboutText , locations, clockH, clockM};
