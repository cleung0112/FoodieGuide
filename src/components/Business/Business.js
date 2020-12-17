import React from 'react';
import './Business.css'


class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
            <img src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80' alt='buffalo pizza'/>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
            <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.state} {this.props.business.zipCode}</p>
            </div>
            <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{this.props.business.rating}</h3>
            <p>{this.props.business.reviewCount} reviews</p>
            </div>
        </div>
      </div> 
    )
  }
}

export default Business; 