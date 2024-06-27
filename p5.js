//    Implement a loop to access and print the ages of all individuals in the dataset.


function getAllAges(arrayOfObjects){
   
    let ages = [];
    for(let i=0; i<arrayOfObjects.length; i++){
       if(arrayOfObjects[i].age){
          ages.push(arrayOfObjects[i].age);
       }
    }
    return ages;
 }
 
 
 
 
 
 module.exports = getAllAges;