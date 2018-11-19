import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Home     from "./components/Home.js";
import About    from "./components/About.js";
import Choice   from "./components/Choice.js";
import Location from "./components/Location.js";
import Schedule from "./components/Schedule.js";
import Game     from "./components/Game.js";

class App extends Component{
   render(){
      return(
        <BrowserRouter>
          <div>
            <Route path="/"         component={Home} exact/>
            <Route path="/About"    component={About}/>
            <Route path="/Choice"   component={Choice}/>
            <Route path="/Location" component={Location}/>
            <Route path="/Schedule" component={Schedule}/>
            <Route path="/Game"     component={Game}/>

          </div>
        </BrowserRouter>
      );
   }
}
export default App;
