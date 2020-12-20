const apiKey = 'QDFx-SqbZDOGW2TLXRA-RkNXmpFDUYn0GLverKgNf6Y4enSgocZcpe_8wBFduQa5fnqP9T3FDqeGftoe8P_rv74UqtXDGhMeegrnj4Dt8hxUaZCH96sJsYPiA6aTX3Yx';

const Yelp = {
  search(term,location,sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      'headers': {
        'Authorization': `Bearer ${apiKey}` 
      }
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
              'category': business.categories[0].title,
              'rating': business.rating,
              'reviewCount': business.review_count
            }
          })
        }
    });
  }
};

export default Yelp;