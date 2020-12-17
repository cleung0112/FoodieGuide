import React from 'react';
import './Business.css'

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

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
            <img src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80' alt='buffalo pizza'/>
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
            <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.state} {business.zipCode}</p>
            </div>
            <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating}</h3>
            <p>{business.reviewCount} reviews</p>
            </div>
        </div>
      </div> 
    )
  }
}

export default Business; 