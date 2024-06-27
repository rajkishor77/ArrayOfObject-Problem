//    Create a function to retrieve and display the first hobby of each individual in the dataset.


function getFirstHobbies(arrayOfObjects) {

   let firstHobbies = [];

   for (let i = 0; i < arrayOfObjects.length; i++) {
      if (arrayOfObjects[i].hobbies) {
         firstHobbies.push(arrayOfObjects[i].hobbies[0]);
      }
   }
   return firstHobbies;
}


module.exports = getFirstHobbies;