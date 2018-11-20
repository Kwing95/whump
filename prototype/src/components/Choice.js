import React from "react";
import { Link } from 'react-router-dom';
const Choice = () => {
  return(
    <div class="home-container">
      <div class="center-horizontal">
        <h1 class="text">Input Choice</h1>
        <div class="choices-container">
          <Link to="/Location">
            <button class="btn-choice text">Input start and end location</button>
          </Link>
          <Link to="/Schedule">
            <button class="btn-choice text">Input your schedule</button>
          </Link>
          <Link to="/Game">
            <button class="btn-choice text">Play with random Locations!</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Choice;
