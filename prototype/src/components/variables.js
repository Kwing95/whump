import React from "react";

const gameName = "Bus ta Move";

const clickInst = "Click around the map to walk and explore the campus.";

const walkInst  = "Walk to a bus station and select a route to travel.";

const clockInst = "Pay attention to the clock in the top left corner to make sure you get to class on time!";

const locations = ['BBB', 'Dude', 'Pierpont', 'EECS', 'Walgreen'];

let clockH = 4;
let clockM = 20;

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

let centralStops = ["Crisler", "Trans Gate", "Facil Serv",
                    "Greene/Hoover", "IMSB", "Law Quad",
                    "Union", "Kraus", "CCTC: Chemistry",
                    "Couzens", "Markley", "Taubman",
                    "Cancer Center"];

let northStops = ["Fuller Rd", "Pierpont", "Cooley",
                  "Francois-Xavier", "Hayward/Hubbard",
                  "Huron/Hubbard", "Glazier W", "Glazier N"];


let buses = {"Pierpont bus": {"Com North": [7, rand(0, 7)],
                         "B-Baits" : [5, rand(0, 5)],
                         "Com South": [7, rand(0, 7)],
                         "Northwood": [7, rand(0, 7)]},
             "CCTC bus": {"Com North": [7, rand(0, 7)],
                          "B-Baits": [5, rand(0, 5)],
                          "Com South": [7, rand(0, 7)],
                          "Northwood": [7, rand(0, 7)]},
             "Rackham bus": {"Com South" : [7, rand(0, 7)],
                             "Northwood" : [7, rand(0, 7)],
                             "B-Baits" : [5, rand(0, 5)]},
             "South Quad bus": {"Com South": [7, rand(0, 7)]}};


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

let bbStops = [];
let bbTimes = [];

let oxStops = [];
let oxTimes = [];

let nwStops = [];
let nwTimes = [];

let d2Stops = ["MIDDLE OF FUCKING NOWHERE"];
let d2Times = [9999];

let routes = {"Com North": [cnStops, cnTimes], "Com South": [csStops, csTimes],
              "B-Baits": [bbStops, bbTimes], "Oxford": [oxStops, oxTimes],
              "Northwood": [nwStops, nwTimes], "Diag to Diag": [d2Stops, d2Times],
              "Null": [[], []]};

let locList = [];

// (t)ype, (c)ampus, (x), (y), (n)ame
function Location(type, campus, xIn, yIn, name){
  this.t = type;
  this.c = campus;
  this.x = xIn;
  this.y = yIn;
  this.n = name;
  locList.push(this);
}

// (a)bbreviations
let a = new Object();

a.ppc = new Location('STOP', 'NORTH', 24, 61, "Pierpont");
a.cool = new Location('STOP', 'NORTH', 82, 66, "Cooley");

a.walgreen = new Location('BUILDING', 'NORTH', 36, 36, 'Walgreen Drama Center');
a.bbb = new Location('BUILDING', 'NORTH', 50, 17, 'Bob & Betty Beyster');
a.dow = new Location('BUILDING', 'NORTH', 64, 21, 'Dow Engineering');
a.ggbl = new Location('BUILDING', 'NORTH', 80, 18, "GG Brown Laboratory");
a.eecs = new Location('BUILDING', 'NORTH', 78, 30, 'EECS Building');
a.dude = new Location('BUILDING', 'NORTH', 62, 51, 'Duderstadt');
a.ioe = new Location('BUILDING', 'NORTH', 84, 53, 'IOE Building');

export { gameName, clickInst, walkInst, clockInst , locations, clockH, clockM,
         bbb, pierpont, dude, eecs, walgreen, mapper, idc, buses, routes, a, locList};
