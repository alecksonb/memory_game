import React, { Component } from 'react';
//import Underscore from 'underscore';
import Board from './Board';

class App extends Component {
  state = {
    squares : [
      {id:0, userSelected: false, systemSelected: false},
      {id:1, userSelected: false, systemSelected: false},
      {id:2, userSelected: false, systemSelected: false},
      {id:3, userSelected: false, systemSelected: false},
      {id:4, userSelected: false, systemSelected: false},
      {id:5, userSelected: false, systemSelected: false},
      {id:6, userSelected: false, systemSelected: false},
      {id:7, userSelected: false, systemSelected: false},
      {id:8, userSelected: false, systemSelected: false},
      {id:9, userSelected: false, systemSelected: false},
      {id:10, userSelected: false, systemSelected: false},
      {id:11, userSelected: false, systemSelected: false},
      {id:12, userSelected: false, systemSelected: false},
      {id:13, userSelected: false, systemSelected: false},
      {id:14, userSelected: false, systemSelected: false},
      {id:15, userSelected: false, systemSelected: false}
    ],
    text : "someText"
  }
  // loadSquares = () => {
  //   const arr = [];
  //   for(let i = 0; i < 16; i++)
  //   {
  //     arr.push({id:i, userSelected: false, systemSelected: false})
  //   }
  //   this.setState({squares:arr});
  // }
  render() {
    // if(this.state.squares.length === 0)
    //   this.loadSquares();
    return (
      <div className="App">
        <h1>Memory Game</h1>
        <Board squares={this.state.squares}/>
      </div>
    );
  }
}

export default App;
