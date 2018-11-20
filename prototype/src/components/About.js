import React from "react";
import { Link } from 'react-router-dom';

import { aboutText } from './variables.js';

const About = () => {
  return(
    <div>
      <h1>{ aboutText }</h1>
      <Link to='/Choice'>
        <button>I&apos;m ready!</button>
      </Link>
    </div>
  )
}

export default About;
