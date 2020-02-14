import React, { Component } from 'react';
import axios from "axios";
import './App.css';

import PlayerCard from "./components/PlayerCard"

class App extends Component {

  constructor(){
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:5000/api/footballers`)
    .then(res => {
      // console.log(res.data);
      // console.table(res.data);
      this.setState({players: res.data})
      // console.log(this.state.players)
    })
    .catch(err => {
      console.log(err, "Dat aint right boi")
    })
  }

  const 

  render(){
    return (
      <div className ="App">
        <h1>Happy Building!<span role="img" aria-label="Smiling emoji">Happy Building!</span></h1>
        {this.state.players.map(player => (
          <PlayerCard key={player.id} player={player}/>
        ))}
      </div>
    );
  }
}

export default App;
