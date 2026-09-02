const produit = {
 nom: "Clavier mecanique",
 prix: 450,
 stock: 12,
 categorie: "Informatique"
};

console.log(`${produit.nom} -- ${produit.prix}DH -- ${produit.stock} en stock -- (${produit.categorie})`);

produit.prix *= 1.1;

console.log(`Nouveau prix : ${produit.prix}`);

produit.enPromotion = false;

console.log(produit.enPromotion);

for (let k in produit)
{
 console.log(`${k}: ${produit[k]} \n`);
}

function estDisponible(produit) 
{
   if(produit.stock > 0)
      return true;
   else
      return false; 
}

console.log(`estDisponible(produit) -> ${estDisponible(produit)}\n`);
