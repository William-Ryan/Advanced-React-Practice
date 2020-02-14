import React, { Component } from 'react';
import axios from "axios";
import './App.css';

import PlayerCard from "./components/PlayerCard"
import { Nav } from "./components/Nav"

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
        <Nav />
        <div className="container">
        {this.state.players.map(player => (
          <PlayerCard key={player.id} player={player}/>
        ))}
        </div>
      </div>
    );
  }
}

export default App;
