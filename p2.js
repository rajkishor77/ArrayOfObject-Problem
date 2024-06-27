//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

function getHobbies(arrayOfObjects, age){
      
   let hobbies = [];

    for(let i=0; i<arrayOfObjects.length; i++){
       if(arrayOfObjects[i].age===age){
          hobbies.push(arrayOfObjects[i].hobbies);
       }
    }
    return hobbies;
 }


 module.exports = getHobbies;