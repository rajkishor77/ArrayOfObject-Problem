//    Write a function that accesses and prints the names and email addresses of individuals aged 25.


function getNameAndEmail(arrayOfObjects, age){
     let nameAndEmail ={};

    for (let i = 0; i < arrayOfObjects.length; i++) {
        if(arrayOfObjects[i].age >= age ){
            nameAndEmail.Name = arrayOfObjects[i].name;
            nameAndEmail.Email = arrayOfObjects[i].email;
        }
        
    }
    return nameAndEmail;
}


module.exports = getNameAndEmail;