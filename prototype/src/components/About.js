import React from "react";
import { Link } from 'react-router-dom';

import { clickInst, walkInst, clockInst } from './variables.js';

const About = () => {
  return(
    <div class="home-container">
      <div class="about center">
        <h2 class="about-text text">
          Instructions: <br/> 
          - { clickInst } <br/>
          - { walkInst }  <br/>
          - { clockInst } 
        </h2>
        <Link to='/Choice'>
          <button class="homeButton">I&apos;m ready!</button>
        </Link>
      </div>
    </div>
  )
}

export default About;
