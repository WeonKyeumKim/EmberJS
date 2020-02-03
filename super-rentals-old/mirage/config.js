export default function() {
  //* api 로 시작하는 url 에 대해서만 mirage 에서 fetch 한다 
  //* api/rentals 의 request 만 처리한다. 
  //* /rentald 의 request 는 처리 하지 않는다. 
  this.namespace = '/api';

  //* /rentals 은 routeName
  let rentals = [{
    //* type is model name, rentals and rental are same.
    //* plural becomes singular
    type: 'rental',
    id: 'grand-old-mansion',
    attributes: {
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      category: 'Estate',
      bedrooms: 15,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."      
    }
    },{
    type: 'rentals',
    id: 'urban-living',
    attributes: {
      title: 'Urban Living',
      owner: 'Mike Teavee',
      city: 'Seattle',
      category: 'Condo',
      bedrooms: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
      description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
      }
    },{
    type: 'rentals',
    id: 'downtown-charm',
    attributes: {
      title: 'Downtown Charm',
      owner: 'Violet Beauregarde',
      city: 'Portland',
      category: 'Apartment',
      bedrooms: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
      description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
    }
  }];

  /*
    city 라는 URL query parameter 안에 provide 되어진 string 과 matching 하는
    rentals 을 return 할 것이다.
  */
  this.get('/rentals', function(db, request) {
    if(request.queryParams.city !== undefined) {
        /*
            filter: filtered array 를 return 하는 enumerable function 
            -1: array 에서 찾지 못한 경우
            
            var ages = [32, 33, 16, 40];

            function checkAdult(age) {
              return age >= 18;
            }

            function myFunction() {
              document.getElementById("demo").innerHTML = ages.filter(checkAdult);
            }            
            
            32,33,40           
        */
      let filteredRentals = rentals.filter(function(i){
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });
    // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
    
  */
}