import React, { Component } from 'react';

export default class PokeSearch extends Component {
    state = {
      nameFilter: '',
      sortField: '',
      query: ''
    }

    handleNameFilter = ({ target }) => {
      this.setState({ nameFilter: target.value });
    }
    
    handleSortField = ({ target }) => {
      this.setState({ sortField: target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSearch(this.state);
    }

    componentDidUpdate(prevProp, prevState) {
      if (prevState !== this.state) {
        this.props.onSearch(this.state);
      }
    }

    render() {
      const { nameFilter, sortField } = this.state;
      return (
        <form className="PokeSearch" onSubmit={this.handleSubmit}>
        
          <input name="nameFilter" value={nameFilter} onChange={this.handleNameFilter}></input>
          <select name="sortField" value={sortField} onChange={this.handleSortField}>
            <option value="">All</option>
            <option value="name">Name</option>
            <option value="type">Type</option>
          </select>
        
          <button>Search</button>
      
        </form>
      );
    }
}
