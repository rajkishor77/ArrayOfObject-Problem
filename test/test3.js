const getName = require('../p3.js');
const arrayOfObjects = require('../index.js');

try {
      
     const name = getName(arrayOfObjects);
     console.log(name);


} catch (error) {
    console.log(error);
}


