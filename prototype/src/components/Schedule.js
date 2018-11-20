import React from "react";

import { locations } from "./variables.js";

const Schedule = () => {
  return(
    <div>
      <h1>Schedule</h1>
      <div class="row">
        <div class="col">
          <p>Subj/Num</p>
        </div>
        <div class="col">
          <p>Location</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <input type="text"/>
        </div>
        <div class="col">
          <select name="location">
            { 
              locations.map((loc) => { 
                return(
                  <option value="{ loc }" >{ loc } </option>
                ) 
                }
              )
            } 
          </select>
        </div>
      </div>
    </div>
  )
}

export default Schedule;
