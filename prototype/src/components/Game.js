import React, {Component} from 'react'
import campusMap from './resources/campusmap.jpg';
import {clockH} from './variables.js';
import {clockM} from './variables.js';
import {buses} from './variables.js';
import {bbaitsStops} from './variables.js';
import {start_submission} from './Location.js';
import {end_submission} from './Location.js';
import {bbb} from './variables.js';
import {pierpont} from './variables.js';
import {lorch} from './variables.js';
import {dude} from './variables.js';
import {idc} from './variables.js';
import {routes} from './variables.js';
import {mapper} from './variables.js';

export default class Game extends Component {

  constructor(props){
    super(props);
    this.currentLocation = start_submission;
    var temp = idc[start_submission];
    if(temp != undefined){
      this.state = {'hour' : clockH, 'minute' : clockM,
                    'css' : {'marginLeft' : temp.left + "%", 'marginTop' : temp.top + "%"},
                    'posX' : 0, 'posY' : 0, 'station': 'ppc-bus',
                    'campus': 'north'};
    }
    else{
      this.state = {'hour' : clockH, 'minute' : clockM,
                    'css' : {'marginLeft' : 0, 'marginTop' : 0},
                    'posX' : 0, 'posY' : 0, 'station': 'ppc-bus',
                    'campus': 'north'};
    }
    this.gameScreen = React.createRef();
    this.showBuses = false;
    this.explore = false;
  }
  
  passTime(minutes){
  
    for(let station in buses){
      for(let bus in buses[station]){
        buses[station][bus][1] -= minutes;
        while(buses[station][bus][1] < 0){
          buses[station][bus][1] += buses[station][bus][0];
        }
      }
    }
  
    let clockM = parseInt(this.state['minute']);
    let clockH = this.state['hour'];
    clockM += minutes;
    if(clockM >= 60){
      clockM = clockM % 60;
      clockH = (clockH + Math.floor(clockH / 60)) % 12 + 1
    }
    if(clockM < 10){
      clockM = "0" + clockM;
    }
    this.setState(prevState => ({
      'minute' : clockM,
      'hour' : clockH
    }));
  }

  goToLoc(loc, event) {
    this.currentLocation = loc;
    this.showBuses = this.currentLocation.includes('bus');

    /*if (dest.id === this.currentLocation) {
      return;
    }
    
    let temp = idc[this.currentLocation];
    let temp2 = temp.options[dest.id];
    console.log(temp2);
    this.passTime(temp2);*/

    /*alert("react offset " + this.gameScreen.current.offsetWidth);
    alert("react client " + this.gameScreen.current.clientWidth);
    alert("react scroll " + this.gameScreen.current.scrollWidth);
    
    return;*/

    let tempX = Math.round(100 * (event.clientX - 250) / (document.getElementById("game-panel").scrollHeight + 30));
    let tempY = Math.round(100 * (event.clientY) / (document.getElementById("game-panel").scrollHeight + 30));
    
    //alert(document.getElementById("game-screen").scrollWidth + " " + tempX);

    let deltaX = Math.abs(tempX - this.state['posX']);
    let deltaY = Math.abs(tempY - this.state['posY']);
    let dist = Math.round(Math.sqrt((deltaX * deltaX) + (deltaY * deltaY)));
    this.passTime(Math.ceil(dist / 14));
    console.log("Traveled a distance of " + dist);

    this.setState(prevState => ({
      'posX': tempX,
      'posY': tempY,
      'css': {'marginLeft': tempX + "%", 'marginTop': tempY + "%"}
    }));
    
    //this.currentLocation = dest.id;
    console.log(this.currentLocation);
    let tempCurLoc = mapper[this.currentLocation];
    if (tempCurLoc === end_submission && this.explore == false) {
      alert("You made it! Feel free to continue exploring North Campus!");
      this.explore = true;
    }
  }
  
  changeStation(event){
    let temp = event.target.value;
    this.setState(prevState => ({
      'station' : temp
    }));
  }
  
  boardBus(station, bus){
    if(this.currentLocation === station){
      alert("Boarded " + bus + " at " + station);
      
    } else {
      alert("You must be at the station to board a bus there.");
    }
  }
  
  busTravel(dest){
    alert("Traveling to " + dest);
  }

  scheduleTable(){
    let table = [];
    for(let i = 0; i < Object.keys(buses[this.state['station']]).length; ++i){
      let row = [];
      row.push(<td onClick={() => {this.boardBus(this.state['station'],                 
                                                 Object.keys(buses[this.state['station']])[i])
                                  }
                           }>
                 <b><u>
                   {Object.keys(buses[this.state['station']])[i]}
                 </u></b>
               </td>);
      row.push(<td>{Object.values(buses[this.state['station']])[i][1]}</td>);
      table.push(<tr>{row}</tr>);
    }
    return table;
  }
  
  stopTable(currentStop){
    let stop = "Com North";
    console.log(routes[stop]);
    let indexOfCurrentStop = routes[stop][0].indexOf("Pierpont");
    //alert(indexOfCurrentStop);
    let table = [];
    for(let i = indexOfCurrentStop + 1; i < routes[stop][0].length; ++i){
      let row = [];
      row.push(<td onClick={() => {this.busTravel(routes[stop][0][i]);
                                  }
                           }>
                 <b><u>
                   {routes[stop][0][i]}
                 </u></b>
               </td>);
      let travelTime = 0;
      for(let j = indexOfCurrentStop; j < i; ++j){
        travelTime += routes[stop][1][j];
      }
      row.push(<tr>{travelTime}</tr>);
      table.push(<tr>{row}</tr>);
    }
    /*for(let busStop in bbaitsStops[this.currentLocation]){
      let row = [];
      row.push(<td onClick={() => {this.busTravel(busStop);
                                  }
                           }>
                 <b><u>
                   {busStop}
                 </u></b>
               </td>);
      row.push(<td>{bbaitsStops[this.currentLocation][busStop]}</td>);
      table.push(<tr>{row}</tr>);
    }*/
    return table;
  }

  render(){
    return(
      <div>
        <div class="wrapper">
          <nav class="sidebar">
            <div class="clock-header">
              <h3> { this.state['hour'] } : { this.state['minute'] } </h3>
            </div>
            <div class="sidebar-header">
              <h3>Class Schedule</h3>
              <table class="schedule">
                <tr>
                  <td>Starting</td>
                  <td>{start_submission}</td>
                </tr>
                <tr>
                  <td>Current</td>
                  <td>{this.currentLocation}</td>
                </tr>
                <tr>
                  <td>Destination</td>
                  <td>{end_submission}</td>
                </tr>
              </table>
            </div>
            <div class="sidebar-header">
              <h3>Buses</h3>
              <select style={{"color" : "black"}} onChange={(event) => {this.changeStation(event);}}>
                <option value="ppc-bus">Pierpont Commons</option>
                <option value="cctc-bus">CCTC: Chemistry</option>
                <option value="rackham-bus">Rackham Building</option>
                <option value="squad-bus">South Quad</option>
              </select>

              <table class="schedule">
                {this.scheduleTable()}
              </table>
            </div>
          </nav>
          <div class="map-panel" id="game-screen" ref={this.gameScreen}>
            <div id="game-panel" class="north-img" onClick={(event) => {this.goToLoc('none', event)}}
                 style={{'visibility': (this.state['campus'] === 'north' ? 'visible' : 'hidden')}}>
              
              <div class="bbb-box user-here" id="0" onClick={(event) => {console.log(event.target.id); this.goToLoc("BBB", event); event.stopPropagation();}}></div>
              <div class="dude-box user-here" id="2" onClick={(event) => {console.log(event.target.id); this.goToLoc("DUDE", event); event.stopPropagation();}}></div>
                <div class="walgreen-box user-here" id="4" onClick={(event) => {console.log(event.target.id); this.goToLoc("Walgreen", event); event.stopPropagation();}}></div>
              <div class="eecs-box user-here" id="3" onClick={(event) => {console.log(event.target.id); this.goToLoc("EECS", event); event.stopPropagation();}}></div>
              <div class="pier-box user-here" id="1" onClick={(event) => {console.log(event.target.id); this.goToLoc("Pierpont", event); event.stopPropagation();}}></div>
              
              <div class="bus-ppc bus-stop" onClick={(event) => {this.goToLoc("Pierpont bus", event); event.stopPropagation();}}></div>
              <div class="bus-cooley bus-stop" onClick={(event) => {this.goToLoc("Cooley bus", event); event.stopPropagation();}}></div>
              
              <div class="dot" style={this.state['css']}></div>

            </div>
            
            <div class="central-img"
                 style={{'visibility': (this.state['campus'] === 'central' ? 'visible' : 'hidden')}}>
              <div class="bus-stop"></div>
            </div>
            
            <div class="bus-panel"
                 style={{'visibility': (this.showBuses ? 'visible' : 'hidden')}}>
              <div onClick={() => {this.showBuses = false;}}>Close</div>
              <h4><b>Select your destination</b></h4>
              <div>
                <p>Click a route to see available stops.</p>
                <table class="schedule">
                  {this.stopTable()}
                </table>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }

}
