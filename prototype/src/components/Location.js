import React from "react";

const Location = () => {
  return(
    <div>
      <h1>Location</h1>
      <p>Start Location</p>
      <select name="start_loc">
        {this.locations.map((loc) => "<option value=\""+loc+"\" >"+loc+"</option>")} 
      </select>
      <p>End Location</p>
      <select name="end_loc">
        {this.locations.map((loc) => "<option value=\""+loc+"\" >"+loc+"</option>")} 
      </select>
      <button>Submit</button>
    </div>
  )
}

export default Location;
