import React from "react";
import { Link } from 'react-router-dom';

import { gameName } from './variables.js';

const Home = () => {
  return(
    <div>
      <h1>Welcome to { gameName }!</h1>
      <Link to="/About">
        <button>Get Started!</button>
      </Link>
    </div>
  )
}

export default Home;
