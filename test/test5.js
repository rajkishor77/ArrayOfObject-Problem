const getAllAges = require('../p5.js');
const arrayOfObjects = require('../index.js');


try {
    const ages = getAllAges(arrayOfObjects);
    console.log(ages);

} catch (error) {
    console.log(error)
}