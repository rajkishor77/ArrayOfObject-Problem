const getNameAndEmail = require('../p7.js');
const arrayOfObjects = require('../index.js');


try {
    const nameAndEmails = getNameAndEmail(arrayOfObjects, 15);
    console.log(nameAndEmails);

} catch (error) {
    console.log(error)
}