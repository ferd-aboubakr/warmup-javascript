const titre = " Mon Premier Projet MERN ";
const phrase = "Le JavaScript est la base du stack MERN";
const nomComplet = "amina el idrissi";

// function genererSlug(titre) {


// 	let newArr = "";

// 	newArr = titre.split("");
// 	let j = 0;

// 	if(newArr[j] === " ")
//    		j++;
// 	for (let k= j ; k< titre.length ; k++)
// 			{
// 			 if(newArr[k] <= '95' && newArr[k] >= '65')
// 			 { 
//  				newArr[k] = newArr[k] - '32';
// 			 } 
// 			 else 
// 			 {
// 				newArr[k] = newArr[k] ;
// 			 }


// 			}
// 			console.log(newArr);
// 		}
function genererSlug(titre) {

    const slug = titre.trim().toLowerCase().replaceAll(" ", "-");
    console.log(slug);

};

genererSlug(titre);


