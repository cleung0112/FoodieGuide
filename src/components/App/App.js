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

    // const r = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
    //     'headers': {
    //       'Authorization': `Bearer ${apiKey}` ,
    //     },
    //   }).then( (response) => {
    //     const json = response.json();
    //     console.log("test", json);
    //       return json;
    //   }).then( (jsonResponse) => {
    //     console.log("test2", jsonResponse);
    //       if( jsonResponse['businesses'] ) {
    //         return jsonResponse['businesses'].map( (business) => { 
    //           return {
    //             'id': business.id,
    //             'imageSrc': business.image_url,
    //             'name': business.name,
    //             'address': business.location.address1,
    //             'city': business.location.city,
    //             'state': business.location.state,
    //             'zipCode': business.location.zipCode,
    //             'category': business.categories[0].title,
    //             'rating': business.rating,
    //             'reviewCount': business.review_count
    //           }
    //         })
    //       }
    //   });

    //   console.log(r)

    axios.get('/api/v1/yelp', { params: { term, location, sortBy } }).then((res) => {
      console.log(res);

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
