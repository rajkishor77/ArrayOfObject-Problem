const getFirstHobbies = require('../p6.js');
const arrayOfObjects = require('../index.js');

try {
    const hobbies = getFirstHobbies(arrayOfObjects);
    console.log(hobbies);
} catch (error) {
    console.log(error);
}