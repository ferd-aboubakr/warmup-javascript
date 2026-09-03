const titre = " Mon Premier Projet MERN ";
const phrase = "Le JavaScript est la base du stack MERN";
const nomComplet = "amina el idrissi";

function genererSlug(titre) {

	const i = titre.length;

	let newArr = "";

	newArr = titre.split("");
	let j = 0;

	if(newArr[j] === " ")
   		j++;
	for (let k= j , k< i, k++)
			{
			 if(newArr[k] <= 95 && newArr[k] >= 65)
			 { 
 				newArr[k] = newArr[k] + 32;
			 } 


	                 console.log(newArr);


			}

genererSlug(titre);
