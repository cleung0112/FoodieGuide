const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const apiKey = 'QDFx-SqbZDOGW2TLXRA-RkNXmpFDUYn0GLverKgNf6Y4enSgocZcpe_8wBFduQa5fnqP9T3FDqeGftoe8P_rv74UqtXDGhMeegrnj4Dt8hxUaZCH96sJsYPiA6aTX3Yx';

router.get('/yelp',  async (req, res, next) => {
    const { term, location, sortBy } = req.query;

    try {
      const businesses = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        'headers': {
          'origin': 'http://localhost:5000',
          'Authorization': `Bearer ${apiKey}`,
        },
      }).then( (response) => {
        return response.json();
      }).then( (jsonResponse) => {
        if( jsonResponse['businesses'] ) {
          return jsonResponse['businesses'].map( (business) => { 
            return {
              'id': business.id,
              'imageSrc': business.image_url,
              'name': business.name,
              'address': business.location.address1,
              'city': business.location.city,
              'state': business.location.state,
              'zipCode': business.location.zipCode,
              'category': business.categories && business.categories.length > 0 ? business.categories[0].title : null,
              'rating': business.rating,
              'reviewCount': business.review_count
            }
          })
        }
      });

      res.status(200).json({
        businesses
      });
    } catch (e) {
      console.log("error", e);
    }
});

module.exports = router;