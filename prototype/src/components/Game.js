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
    this.state = {'hour' : clockH, 'minute' : clockM};
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

  goToLoc(dest) {
    let temp = idc[this.currentLocation].options[dest];
    this.passTime(temp);
     
    this.currentLocation = dest;
    
  }

  moveClick(event) {
    console.log(event.target.id);
    this.goToLoc(idc[event.target.id])
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
          <div class="map-panel" onClick={() => {this.passTime(10)} }>
            <div class="north-img">
              <div class="bbb-box user-here" id="0" onClick={(event) => {console.log(event.target.id); this.goToLoc(idc[event.target.id])}}></div>
              <div class="dude-box user-here" id="2" onClick={this.moveClick}></div>
                <div class="walgreen-box user-here" id="4" onClick={this.moveClick}></div>
              <div class="eecs-box user-here" id="3" onClick={this.moveClick}></div>
              <div class="pier-box user-here" id="1" onClick={this.moveClick}></div>
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
