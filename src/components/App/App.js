import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';


const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Little Star Pizza',
  address: '846 Divisadero St',
  city: 'San Francisco',
  state: 'CA',
  zipCode: '94117',
  category: 'Pizza',
  rating: 4.6,
  reviewCount: 840
};

const businesses = [business,business,business,business,business,business];

class App extends React.Component {
  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  };

  render() {
    return (
      <div className="App">
        <h1>Foodie Guide</h1>
        <SearchBar searchYelp = {this.searchYelp} />
        <BusinessList businesses = {businesses} /> 
      </div>
    );
  }
};

export default App;
