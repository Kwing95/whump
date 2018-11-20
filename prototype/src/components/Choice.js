import React from "react";
import { Link } from 'react-router-dom';
const Choice = () => {
  return(
    <div>
      <h1>Choice</h1>
      <Link to="/Location"><button>Input Locations</button></Link>
      <Link to="/Schedule"><button>Input Schedule</button></Link>
      <button>Select Random</button>
    </div>
  )
}

export default Choice;
