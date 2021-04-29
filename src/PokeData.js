import React, { Component } from 'react';
import request from 'superagent';

export default class PokeData extends Component {
    
    getPokemonApi = async () => {
      this.setState({
        loading: true
      });
      const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=24&pokemon=${this.state.query}&sort=${this.state.sortBy}&direction=${this.state.AscOrDesc}`);
      this.setState({
        pokemon: pokeData.body.results,
        loading: false
      });
    }

    render() {
      return (
        <div>
                
        </div>
      );
    }
}


