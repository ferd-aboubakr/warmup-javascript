const prenom = "Amina";
const ville = "Casablanca";
let age = 22;
let estEnFormation = true;
let status = " Majeur.";
if (age < 18)
{
    status = "Mineur ."
}

let res =  `${prenom} ${age} ans , habite a ${ville}. \n  Statut : ${status}\n  Formation en cours : ${estEnFormation}  \n\n\n  prenom -> ${typeof(prenom)} \n  age -> ${typeof(age)} \n  estEnFormation -> ${typeof(estEnFormation)} \n ` ;



console.log(res);

