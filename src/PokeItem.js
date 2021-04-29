import React, { Component } from 'react';

export default class PokeItem extends Component {
  render() {
    const pokemon = this.props.pokeProp;

    return (
      <li className="PokeItem">
        <h2>{pokemon.name}</h2>
        <img alt={pokemon.name} src={pokemon.url}/>
        <p>{pokemon.type_1} {pokemon.type_2}</p>
        
                
      </li>
    );
  }
}


