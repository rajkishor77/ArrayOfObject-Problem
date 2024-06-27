//    Implement a loop to access and log the city and country of each individual in the dataset.


function getCityAndCountry(arrayOfObjects){
     let array=[];

    for (let i = 0; i < arrayOfObjects.length; i++) {
        array.push(arrayOfObjects[i].city);
        array.push(arrayOfObjects[i].country);
        
    }
    return array;
}



module.exports = getCityAndCountry;