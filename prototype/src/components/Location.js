import React from "react";
import { Link } from 'react-router-dom';

import { locations } from "./variables.js";

var start_location = locations[0];
var end_location = locations[0];

const Location = () => {
  return(
    <div class="home-container">
      <div class="center-horizontal">
        <h1 class="text">Input Location</h1>
        <div class="wrapper">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-6">
              <h3 class="text">Start Location</h3>
              <select name="start_loc" onChange={ start_change }>
                { 
                  locations.map((loc) => { 
                    return(
                      <option value={ loc } >{ loc } </option>
                    ) 
                  })
                } 
              </select>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
              <h3 class="text">End Location</h3>
              <select name="end_loc" onChange={ end_change }>
                { 
                  locations.map((loc) => { 
                    return(
                      <option value={ loc } >{ loc } </option>
                    ) 
                  })
                } 
              </select>
            </div>
            <div class="row">
              <Link to="/Game">
                <button class="btn-submit text">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const start_change = (event) => {
  start_location = event.target.value;
}

const end_change = (event) => {
  end_location = event.target.value;
}

export default Location;
export { start_location, end_location };
