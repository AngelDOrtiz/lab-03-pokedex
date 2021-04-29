import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeDex extends Component {
  render() {

    const pokemon = this.props.pokemon;
    console.log(pokemon);
    
    return (
      <ul className="PokeDex">
        {/* { pokemon.map(pokemon => (
          <PokeItem key={pokemon.name} pokeProp={pokemon}/>
        )) } */}
      </ul>
    );
  }
}
