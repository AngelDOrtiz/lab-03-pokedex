import React, { Component } from 'react';

export default class PokeItem extends Component {
  render() {
    const pokemon = this.props.pokeProp;

    return (
      <li className="PokeItem">
        <h2>{pokemon.pokemon}</h2>
        <img alt={pokemon.pokemon} src={pokemon.url_image}/>
        <p>{pokemon.type_1} {pokemon.type_2}</p>
        
                
      </li>
    );
  }
}


