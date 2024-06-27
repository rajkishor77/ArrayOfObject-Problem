const getNameAndCity = require('../p4.js');
const arrayOfObjects = require('../index.js');

try {
      
     const nameAndCity = getNameAndCity(arrayOfObjects, 14);
     console.log(nameAndCity);


} catch (error) {
    console.log(error);
}


