import React, {Component} from 'react'
import campusMap from './resources/campusmap.jpg';
import {clockH} from './variables.js';
import {clockM} from './variables.js';
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
                  'posX' : 0, 'posY' : 0};
    this.currentLocation = start_submission;
  }
  
  passTime(minutes){
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

  render(){
    return(
      <div>
        <div class="wrapper">
          <nav class="sidebar">
            <div class="sidebar-header">
              <h3>Clock</h3>
              <h3> { this.state['hour'] } : { this.state['minute'] } </h3>
            </div>
            <div class="sidebar-header">
              <h3>Class Schedule</h3>
            </div>
            <div class="sidebar-header">
              <h3>Buses</h3>
            </div>
          </nav>
          <div class="map-panel" id="game-screen">
            <div class="north-img">
              
              <div class="bbb-box user-here" id="0" onClick={(event) => {console.log(event.target.id); this.goToLoc(idc[event.target.id], event)}}></div>
              <div class="dude-box user-here" id="2" onClick={(event) => {console.log(event.target.id); this.goToLoc(idc[event.target.id], event)}}></div>
                <div class="walgreen-box user-here" id="4" onClick={(event) => {console.log(event.target.id); this.goToLoc(idc[event.target.id], event)}}></div>

              <div class="eecs-box user-here" id="3" onClick={(event) => {console.log(event.target.id); this.goToLoc(idc[event.target.id], event)}}></div>

              <div class="pier-box user-here" id="1" onClick={(event) => {console.log(event.target.id); this.goToLoc(idc[event.target.id], event)}}></div>
              
              <div class="bus-ppc bus-stop" onClick={(event) => {console.log(event.target.id);}}></div>
              
              <div class="dot" style={this.state['css']}></div>

            </div>
            <div class="central-img">
              <div class="bus-stop"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
