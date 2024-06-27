const getCityAndCountry = require('../p8.js');
const arrayOfObjects = require('../index.js');


try {
    const cityAndCountry = getCityAndCountry(arrayOfObjects);
    console.log(cityAndCountry);

} catch (error) {
    console.log(error);
}