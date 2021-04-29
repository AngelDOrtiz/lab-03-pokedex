import { Component } from 'react';
import './App.css';
import React from 'react';
import PokeDex from '../PokeDex';
import PokeData from '../PokeData';
import PokeSearch from '../PokeSearch';
import request from 'superagent';


class App extends Component {

  state = {
    pokemon: [],
    query: '',
    sortBy: 'pokemon',
    ascOrDesc: 'asc'
  }

  getPokemonApi = async () => {
    // this.setState({
    //   loading: true
    // });
    const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=24&pokemon=${this.state.query}&sort=${this.state.sortBy}&direction=${this.state.ascOrDesc}`);
    
    this.setState({
      pokemon: pokeData.body.results,
      // loading: false
    });
  }

  componentDidMount() {
    this.getPokemonApi();
  }
  // handleSearch = ({ nameFilter, sortField }) => {
  //   const nameRegex = new RegExp(nameFilter, 'i');

  //   const searchedData = PokeData
  //     .filter(pokemon => {
  //       return !nameFilter || pokemon.pokemon.match(nameRegex);
  //     })
  //     .sort((a, b) => {
  //       if (a[sortField] < b[sortField]) return -1;
  //       if (a[sortField] > b[sortField]) return 1;
  //       return 0;
  //     });
  //   this.setState({ pokemon: searchedData });
  // }

  render() {
    const { pokemon } = this.state;
   
    return (
      <div className="App">
        
  
        <main>
          <PokeDex pokemon={pokemon}/>
          <PokeSearch onSearch={this.handleSearch}/>
        </main>
        
      
      </div>
    );
  }

}

export default App;
