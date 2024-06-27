//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.


function getNameAndCity(arrayOfObjects, index) {

  let nameAndCity = {};
  
  if(arrayOfObjects.length >= index ){
    nameAndCity.Name = arrayOfObjects[index-1].name;
    nameAndCity.City = arrayOfObjects[index-1].city;
  }
  return nameAndCity;
}







module.exports = getNameAndCity;