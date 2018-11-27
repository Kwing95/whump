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

export default class Game extends Component {

  constructor(props){
    super(props);
    this.state = {'hour' : clockH, 'minute' : clockM,
                  'css' : {'marginLeft' : 0, 'marginTop' : 0},
                  'posX' : 0, 'posY' : 0, 'station': 'ppc',
                  'campus': 'north'};
    this.currentLocation = start_submission;
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

  goToLoc(dest, event) {
    if (dest.id === this.currentLocation) {
      return;
    }
    
    let temp = idc[this.currentLocation];
    let temp2 = temp.options[dest.id];
    console.log(temp2);
    this.passTime(temp2);

    let tempX = Math.round(100 * (event.clientX - 250) / document.getElementById("game-screen").scrollWidth);
    let tempY = Math.round(100 * (event.clientY) / document.getElementById("game-screen").scrollHeight);

    let deltaX = Math.abs(tempX - this.state['posX']);
    let deltaY = Math.abs(tempY - this.state['posY']);
    let dist = Math.round(Math.sqrt((deltaX * deltaX) + (deltaY * deltaY)));
    console.log("Traveled a distance of " + dist);

    this.setState(prevState => ({
      'posX': tempX,
      'posY': tempY,
      'css': {'marginLeft': tempX + "%", 'marginTop': tempY + "%"}
    }));
    
    this.currentLocation = dest.id;
    console.log(this.currentLocation);
    console.log(start_submission);
    console.log(end_submission);
    if (this.currentLocation === end_submission) {
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
      alert("Boarded " + bus + " at " + station);
    } else {
      alert("You must be at the station to board a bus there.");
    }
  }
  
  busTravel(){
  
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
  
  stopTable(){
    let table = [];
    for(let busStop in bbaitsStops[this.currentLocation]){
      let row = [];
      row.push(<td onClick={() => {this.busTravel();
                                  }
                           }>
                 <b><u>
                   {bbaitsStops[this.currentLocation]}
                 </u></b>
               </td>);
      row.push(<td>{bbaitsStops[this.currentLocation][busStop]}</td>);
    }
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
                  <td>Destination</td>
                  <td>{end_submission}</td>
                </tr>
              </table>
            </div>
            <div class="sidebar-header">
              <h3>Buses</h3>
              <select style={{"color" : "black"}} onChange={(event) => {this.changeStation(event);}}>
                <option value="ppc">Pierpont Commons</option>
                <option value="cctc">CCTC: Chemistry</option>
                <option value="rackham">Rackham Building</option>
                <option value="squad">South Quad</option>
              </select>

              <table class="schedule">
                {this.scheduleTable()}
              </table>
            </div>
          </nav>
          <div class="map-panel" id="game-screen">
            <div class="north-img"
                 style={{'visibility': (this.state['campus'] === 'north' ? 'visible' : 'hidden')}}>
              
              <div class="bbb-box user-here" id="0" onClick={(event) => {console.log(event.target.id); this.goToLoc(idc[event.target.id], event)}}></div>
              <div class="dude-box user-here" id="2" onClick={(event) => {console.log(event.target.id); this.goToLoc(idc[event.target.id], event)}}></div>
                <div class="walgreen-box user-here" id="4" onClick={(event) => {console.log(event.target.id); this.goToLoc(idc[event.target.id], event)}}></div>
              <div class="eecs-box user-here" id="3" onClick={(event) => {console.log(event.target.id); this.goToLoc(idc[event.target.id], event)}}></div>
              <div class="pier-box user-here" id="1" onClick={(event) => {console.log(event.target.id); this.goToLoc(idc[event.target.id], event)}}></div>
              
              <div class="bus-ppc bus-stop" onClick={(event) => {this.goToLoc(idc[event.target.id], event)}}></div>
              
              <div class="dot" style={this.state['css']}></div>

            </div>
            
            <div class="central-img"
                 style={{'visibility': (this.state['campus'] === 'central' ? 'visible' : 'hidden')}}>
              <div class="bus-stop"></div>
            </div>
            
            <div class="bus-panel">
              <h4><b>Select your destination</b></h4>
            </div>
            
          </div>
        </div>
      </div>
    )
  }

}
