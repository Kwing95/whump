
import React, {Component} from 'react'

export default class Game extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div class="wrapper">
          <nav id="sidebar">
            <div class="sidebar-header">
              <h3>Clock</h3>
            </div>
            <div class="sidebar-header">
              <h3>Class Schedule</h3>
            </div>
            <div class="sidebar-header">
              <h3>Buses</h3>
            </div>
          </nav>
        </div>
      </div>
    )
  }

}

/*
const Game = () => {
  return(
    <div>
      <h1>Game</h1>
      <Sidebar side='left' isVisible={ this.state.isVisible } onHide={ () => this.updateModal(false) }>
                    <Nav>
                      <NavItem href="#">Link 1</NavItem>
                      <NavItem href="#">Link 2</NavItem>
                      <NavItem href="#">Link 3</NavItem>
                      <NavItem href="#">Link 4</NavItem>
                    </Nav>
                  </Sidebar>
    </div>
  )
}

export default Game;*/
