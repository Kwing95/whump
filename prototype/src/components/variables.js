import React from "react";

const gameName = "Bus ta Move";

const aboutText = "This game is intended to help teach you how to get to your classes using the Ann Arbor busses quickly so you never have to miss class!";

const locations = ['BBB', 'Dude', 'Pierpont', 'EECS', 'Walgreen'];

let clockH = 1;
let clockM = 15;

/*
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

function User(currLoc, prevLoc, prevTim) {
  this.currLoc = currLoc;
  this.prevLoc = prevLoc;
  this.prevTim = prevTim;
}

// Create busses
let bursleyBaits  = new Bus("Bursley-Baits", 10);
let commuterSouth = new Bus("Commuter South", 15);
*/

function Buildings(id, name, options) {
  this.id      = id;       // Unique ID (maybe should be different from building IDs too?)
  this.name    = name;     // Name of the building
  this.options = options;  // An array of tuples of buildings you can go to and the time it takes to get to them
}

//Create Buildings
let mapper = {"BBB": 0, "Dude":1, "Pierpont":2, "EECS":3, "Walgreen": 4};

// 0
//let bbbOptions = {"Dude":2, "PierpontBBStop":3, "PierpontCSStop": 3};
let bbbOptions = {1:2, 2:2, 3:1, 4:1};
let bbb = new Buildings(0, "BBB", bbbOptions);

// 1
//let pierpontOptions = {"Dude":2, "PierpontBBStop":1, "PierponstCSStop":2}
let pierpontOptions = {0:2, 1:1, 3:4, 4:1};
let pierpont = new Buildings(1, "Pierpont", pierpontOptions);

// 2
//let dudeOptions = {"Pierpont": 2, "BBB": 2, "PierpontBBStop":3, "PierponstCSStop":2};
let dudeOptions = {0:2, 2:1, 3:3, 4:1}
let dude = new Buildings(2, "Dude", dudeOptions);

// 3
let eecsOptions = {0:2, 1:3, 2:4, 4:3};
let eecs = new Buildings(3, "EECS", eecsOptions);

//4
let walgreenOptions = {0:1, 1:1, 2:1, 3:3};
let walgreen = new Buildings(4, "Walgreen", walgreenOptions);

let idc = {0: bbb, 1: dude, 2: pierpont, 3: eecs, 4: walgreen};

function rand(minimum, maximum){
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

let buses = {"ppc-bus": {"Com North": [7, rand(0, 7)],
                         "B-Baits" : [5, rand(0, 5)],
                         "Com South": [7, rand(0, 7)],
                         "Northwood": [7, rand(0, 7)]},
             "cctc-bus": {"Com North": [7, rand(0, 7)],
                          "B-Baits": [5, rand(0, 5)],
                          "Com South": [7, rand(0, 7)],
                          "Northwood": [7, rand(0, 7)]},
             "rackham-bus": {"Com South" : [7, rand(0, 7)],
                             "Northwood" : [7, rand(0, 7)],
                             "B-Baits" : [5, rand(0, 5)]},
             "squad-bus": {"Com South": [7, rand(0, 7)]}};
             
let bbaitsStops = {"ppc-bus": {"rackham": 12, "cctc": 14},
                   "rackham-bus": {"cctc": 2, "ppc": 14},
                   "cctc-bus": {"ppc": 12, "rackham": 24}};

// Each number is the number of minutes to travel from that stop to the next.
// Example: {IMSB: 3} means it takes 3 minutes to go from IMSB to Law Quad
let cnStops = ["Crisler", "Trans Gate", "Facil Serv",
               "Greene/Hoover", "IMSB", "Law Quad",
               "Union", "Kraus", "CCTC: Chemistry",
               "Couzens", "Markley", "Taubman",
               "Cancer Center", "Fuller Rd", "Pierpont",
               "Cooley", "Francois-Xavier", "Hayward/Hubbard",
               "Huron/Hubbard", "Glazier W", "Glazier N"];
let cnTimes = [1, 1, 1, 1, 3, 1, 2, 1, 1, 1, 2, 1, 8, 1, 1, 2, 2, 1, 4, 2, 0];
let csStops = ["Glazier N", "Glazier E", "VA Hospital",
               "Cooley", "Pierpont", "Cancer Center", "Taubman",
               "Mott", "Cardiovascular", "Biomed Sci",
               "Rackham", "CCTC: Chemistry", "East Quad",
               "Shapiro", "Union", "South Quad",
               "IMSB", "Inst Cont Legal Edu", "Crisler SC-5",
               "Crisler SC-7"];
let csTimes = [1, 3, 2, 1, 4, 1, 1, 1, 1, 6, 2, 8, 2, 1, 2, 4, 3, 3, 2, 0];

let routes = {"Com North": [cnStops, cnTimes], "Com South": [csStops, csTimes]};

/*
// 2
let lorchOptions = {"EastQuadStop": 1, "CClittle": 3};
let lorch = new Buildings(2, "Lorch", lorchOptions);

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
*/

export { gameName, aboutText , locations, clockH, clockM,
         bbb, pierpont, dude, eecs, walgreen, mapper, idc, buses, bbaitsStops, routes};
