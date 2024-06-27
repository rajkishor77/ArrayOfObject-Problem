const getAllEmails = require('../p1.js');
const arrayOfObjects = require('../index.js');


try {
    const emails = getAllEmails(arrayOfObjects);
    console.log(emails);

} catch (error) {
    console.log(error)
}