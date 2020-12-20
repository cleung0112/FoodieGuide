import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'businesses': []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  async searchYelp(term, location, sortBy) {

    axios.get('/api/v1/yelp', { params: { term, location, sortBy } }).then((res) => {
      this.setState({
        'businesses' : res.data.businesses,
      })
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Foodie Guide</h1>
        <SearchBar searchYelp = {this.searchYelp} />
        <BusinessList businesses = {this.state.businesses} /> 
      </div>
    );
  }
};

export default App;
