import React, {Component} from 'react'
import campusMap from './resources/campusmap.jpg';
import {clockH} from './variables.js';
import {clockM} from './variables.js';
import {buses} from './variables.js';
import {start_submission} from './Location.js';
import {end_submission} from './Location.js';
import {bbb} from './variables.js';
import {pierpont} from './variables.js';
import {lorch} from './variables.js';
import {dude} from './variables.js';
import {idc} from './variables.js';
import {routes} from './variables.js';
import {a} from './variables.js';
import {locList} from './variables.js';
import {mapper} from './variables.js';
export default class Game extends Component {

  constructor(props){
    super(props);
    this.state = {'hour' : clockH, 'minute' : clockM,
                  'css' : {'marginLeft' : 0, 'marginTop' : 0},
                  'posX' : 0, 'posY' : 0, 'station': 'Pierpont bus',
                  'campus': 'north', 'route': 'Null',
                  'showBuses': false};
    this.posX = 0;
    this.posY = 0;
    this.currentLocation = start_submission;
    this.gameScreen = React.createRef();
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
    this.setState(prevState => ({
      'showBuses' : this.currentLocation.includes('bus')
    }));

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

    //let ratio = this.gameScreen.current.scrollWidth / this.gameScreen.current.scrollHeight;
    //alert((event.clientX - 250) + " / " + this.gameScreen.current.scrollWidth);

    let tempX = 2 * Math.round(100 * (event.clientX - 250) / document.getElementById("game-screen").scrollWidth);
    let tempY = Math.round(100 * (event.clientY) / document.getElementById("game-screen").scrollHeight);
    let deltaX = Math.abs(tempX - this.posX);
    let deltaY = Math.abs(tempY - this.posY);
    this.posX = tempX;
    this.posY = tempY;
    tempX = event.clientX - 260;
    tempY = event.clientY - 10;
    
    //alert(document.getElementById("game-screen").scrollWidth + " " + tempX);


    let dist = Math.round(Math.sqrt((deltaX * deltaX) + (deltaY * deltaY)));
    this.passTime(Math.ceil(dist / 14));
    console.log("Traveled a distance of " + dist);

    // Use this to pinpoint building locations 
    //alert(tempX + ", " + tempY);

    this.setState(prevState => ({
      'posX': tempX,
      'posY': tempY,
      'css': {'marginLeft': tempX, 'marginTop': tempY}
    }));

    //this.currentLocation = dest.id;
    console.log(this.currentLocation);
    let tempCurLoc = mapper[this.currentLocation];
    if (tempCurLoc === end_submission) {
      alert("You made it!");
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
      this.setState(prevState => ({
        'route': bus,
      }));
    } else {
      alert("You must be at the station to board a bus there.");
    }
  }
  
  busTravel(dest){
    for(let i = 0; i < locList.length; ++i){
      if(locList[i].n == dest){
        alert("Traveling to " + dest);

        // passTime(bus_eta + travel_time);
        this.setState(prevState => ({
          'posX': locList[i].x,
          'posY': locList[i].y,
          'css': {'marginLeft': locList[i].x + "%", 'marginTop': locList[i].y + "%"}
        }));
        return;
      }
    }
    alert("This location has not been implemented yet.");
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

    let route = this.state["route"];
    // default: Com North


    let indexOfCurrentStop = routes[route][0].indexOf("Pierpont"); // FIXME
    //alert(indexOfCurrentStop);
    let table = [];
    for(let i = indexOfCurrentStop + 1; i < routes[route][0].length; ++i){
      let row = [];
      row.push(<td onClick={() => {this.busTravel(routes[route][0][i]);
                                  }
                           }>
                 <b><u>
                   {routes[route][0][i]}
                 </u></b>
               </td>);
      let travelTime = 0;
      for(let j = indexOfCurrentStop; j < i; ++j){
        travelTime += routes[route][1][j];
      }
      row.push(<tr>{travelTime}</tr>);
      table.push(<tr>{row}</tr>);
    }
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
                <option value="Pierpont bus">Pierpont Commons</option>
                <option value="CCTC bus">CCTC: Chemistry</option>
                <option value="Rackham bus">Rackham Building</option>
                <option value="South Quad bus">South Quad</option>
              </select>

              <table class="schedule" id="schedule-table">
                {this.scheduleTable()}
              </table>
            </div>
          </nav>
          <div class="map-panel" id="game-screen" ref={this.gameScreen}>
            <div class="north-img"
             id="north"
             onClick={(event) => {this.goToLoc('none', event)}}
             style={{'visibility': (this.state['campus'] === 'north' ? 'visible' : 'hidden')}}>
              
              <div class="bbb-box user-here" id="0" onClick={(event) => {console.log(event.target.id); this.goToLoc("BBB", event); event.stopPropagation();}}></div>
              <div class="dude-box user-here" id="2" onClick={(event) => {console.log(event.target.id); this.goToLoc("Dude", event); event.stopPropagation();}}></div>
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
                 style={{'visibility': (this.state['showBuses'] ? 'visible' : 'hidden')}}>
              <div style={{'text-align': 'right'}} onClick={(event) => {
                    this.setState(prevState => ({
                      'showBuses': false,
                    }));
                  }}>
                Close
              </div>
              <h4><b>Select your destination</b></h4>
              <div>
                <p>Click a route to see available stops.</p>
                <table class="schedule" id="stop-table">
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
