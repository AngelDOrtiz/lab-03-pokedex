import { Component } from 'react';
import './App.css';
import React from 'react';
import PokeDex from '../PokeDex';
import PokeData from '../PokeData';

class App extends Component {

  state = {
    pokemon: PokeData
  }

  render() {
    const { pokemon } = this.state;
    return (
      <div className="App">
        
  
        <main>
          <PokeDex pokemon={pokemon}></PokeDex>
        </main>
        
      
      </div>
    );
  }

}

export default App;
