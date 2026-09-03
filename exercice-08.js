const inscription = {
 nom: "sdc",
 email: "aminaexample.com",
 motDePasse: "123",
 age: 19
};

function validerInscription(inscription){
//declare empty array to store error messages 
    let erreurs = [];
    let valide = false;
//check name lenght and store error message if lenght is less than 2 
    if (inscription.nom.length < 2 )
    {
        erreurs.push("Le nom doit contenir au moins 2 caracteres.");

    }
// check if the email conatins the charcters "@" and ".'"   

    if (!(inscription.email.includes('@')) || !(inscription.email.includes('.')))
    {
        erreurs.push("L'email n'est pas valide.")
    }
//check if password lenght is larger or equal to 8 characters long       
    if (inscription.motDePasse.length < 8)
    {
        erreurs.push("Le mot de passe doit contenir au moins 8 caracteres.");
    }
//check if age is equal or greater than 18 
     if (inscription.age < 18)
    {
        erreurs.push("Vous devez avoir au moins 18 ans.");
    }
//check if the errors array is empty to set the value of valide var
    if (erreurs.length === 0 )
    {
      valide = true;
    }

return {valide,erreurs};
    
}

console.log(validerInscription(inscription));