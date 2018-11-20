import React from "react";
import { Link } from 'react-router-dom';
const Choice = () => {
  return(
    <div>
      <h1>Choice</h1>
      <Link to="/Location">
        <button>Input Locations</button>
      </Link>
      <Link to="/Schedule">
        <button>Input Schedule</button>
      </Link>
      <Link to="/Game">
        <button>Select Random</button>
      </Link>
    </div>
  )
}

export default Choice;
