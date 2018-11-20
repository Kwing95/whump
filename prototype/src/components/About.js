import React from "react";
import { Link } from 'react-router-dom';

import { aboutText } from './variables.js';

const About = () => {
  return(
    <div class="home-container">
      <div class="about info">
        <h1 class="about-text text">{ aboutText }</h1>
        <Link to='/Choice'>
          <button class="homeButton">I&apos;m ready!</button>
        </Link>
      </div>
    </div>
  )
}

export default About;
