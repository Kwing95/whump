import React from "react";
import { locations } from "./variables.js";


const Location = () => {
  return(
    <div>
      <h1>Location</h1>
      <p>Start Location</p>
      <select name="start_loc">
        { locations.map((loc) => "<option value=\""+loc+"\" >"+loc+"</option>/n") } 
      </select>
      <p>End Location</p>
      <select name="end_loc">
        { locations.map((loc) => "<option value=\""+loc+"\" >"+loc+"</option>/n") } 
      </select>
      <button>Submit</button>
    </div>
  )
}

export default Location;
