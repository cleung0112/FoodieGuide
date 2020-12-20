const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/yelp',  async (req, res, next) => {
    const { term, location, sortBy } = req.query;

    try {
      const businesses = await fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        'headers': {
          'Authorization': `Bearer ${process.env.YELP_KEY}`,
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
        businesses: businesses || []
      });
    } catch (e) {
      console.log("error", e);
    }
});

module.exports = router;