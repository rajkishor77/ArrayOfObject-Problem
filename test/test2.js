const getHobbies = require('../p2.js');
const arrayOfObjects = require('../index.js');

try {
      
     const hobbies = getHobbies(arrayOfObjects, 97);
     console.log(hobbies);


     
} catch (error) {
    console.log(error);
}


