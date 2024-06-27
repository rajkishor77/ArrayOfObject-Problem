//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.


function getAllEmails(arrayOfObjects){
   
   let emails = [];
   for(let i=0; i<arrayOfObjects.length; i++){
      if(arrayOfObjects[i].email){
         emails.push(arrayOfObjects[i].email);
      }
   }
   return emails;
}





module.exports = getAllEmails;