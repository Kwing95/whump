import React from "react";
import { Link } from 'react-router-dom';
import { mapper } from './variables.js';
import { locations } from "./variables.js";

let start_submission = locations[4];
let end_submission = locations[1];

const Location = () => {
  return(
    <div class="home-container">
      <div class="center-horizontal">
        <h1 class="text">Input Location</h1>
        <div class="wrapper">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-6">
              <h3 class="text">Start Location</h3>
              <select name="start_loc" onChange={ (event) => {start_submission = event.target.value;} } required>
                <option value="" disabled selected>...</option>
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
              <select name="end_loc" onChange={ (event) => {end_submission = event.target.value;} } required>
                <option value="" disabled selected>...</option>
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

export default Location;
export { start_submission, end_submission };
