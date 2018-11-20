import React from "react";
import { Link } from 'react-router-dom';

import { gameName } from './variables.js';

const Home = () => {
  return(
    <div class="home-container">
      <div class="home info">
        <h1 class="home-text">Welcome to { gameName }!</h1>
        <Link to="/About">
          <button class="homeButton">Get Started!</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
