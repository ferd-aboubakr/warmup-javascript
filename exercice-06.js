const panier = [
 { nom: "Souris", prix: 150, quantite: 2 },
 { nom: "Casque", prix: 400, quantite: 1 },
 { nom: "Tapis", prix: 60, quantite: 3 },
 { nom: "Webcam", prix: 520, quantite: 1 }
];

const names = panier.map(item =>item.nom);

console.log(`Noms				: ${JSON.stringify(names)} \n`);


const Tot_Lignes = panier.map(item  =>    
[item.nom + " " + item.prix * item.quantite]);


console.log(`Totaux lignes	: ${Tot_Lignes} \n`);

const list = panier.filter(item => item.prix > 100);

const namelist  = list.map(item => item.nom);
console.log(`Prix >100		: ${namelist} \n`);

const TotPanier = panier.reduce((acc,item) => (acc+ item.prix* item.quantite) ,0);

console.log(`Total panier		: ${TotPanier} \n`);

const TotArticles = panier.reduce((acc, curr) => (acc + curr.quantite) ,0);

console.log(`Nombres d'articles	: ${TotArticles} \n`);


