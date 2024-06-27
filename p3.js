//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

function getName(arrayOfObjects){
     
   let name = [];

    for(let i=0; i<arrayOfObjects.length; i++){
       if(arrayOfObjects[i].isStudent===true && arrayOfObjects[i].country==='Australia'){
           name.push(arrayOfObjects[i].name);
       }
    }
    return name;
 }


 module.exports = getName;