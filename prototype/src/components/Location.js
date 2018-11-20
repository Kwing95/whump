import React from "react";

import { locations } from "./variables.js";

const Location = () => {
  return(
    <div class="home-container">
      <div class="center-horizontal">
        <h1 class="text">Input Location</h1>
        <div class="wrapper">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-6">
              <h3 class="text">Start Location</h3>
              <select name="start_loc">
                { 
                  locations.map((loc) => { 
                    return(
                      <option value="{ loc }" >{ loc } </option>
                    ) 
                  })
                } 
              </select>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
              <h3 class="text">End Location</h3>
              <select name="start_loc">
                { 
                  locations.map((loc) => { 
                    return(
                      <option value="{ loc }" >{ loc } </option>
                    ) 
                  })
                } 
              </select>
            </div>
            <div class="row">
              <button class="btn-submit text">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location;
