import React from "react";

const gameName = "Game Name";

const aboutText = "This game is intended to help teach you how to get to your classes using the Ann Arbor busses quickly so you never have to miss class!";

const locations = ['BBB', 'Dude', 'Lorch'];

let clockH = 1;
let clockM = 15;

/*
let ID= 0;

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
 
// Create bus stops
*/
export { gameName, aboutText , locations, clockH, clockM};
