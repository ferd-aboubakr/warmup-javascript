const ventes = [
 { vendeur: "Amina", produit: "Ordinateur portable", montant: 8500, mois: "janvier" },
 { vendeur: "Youssef", produit: "Smartphone", montant: 4200, mois: "janvier" },
 { vendeur: "Amina", produit: "Casque audio", montant: 900, mois: "fevrier" },
 { vendeur: "Sara", produit: "Tablette", montant: 3100, mois: "fevrier" },
 { vendeur: "Youssef", produit: "Clavier", montant: 450, mois: "mars" },
 { vendeur: "Sara", produit: "Ecran 27 pouces", montant: 2600, mois: "mars" }
];

function calcTotal (ventes)

{
    let chiffreAffTot = ventes.reduce((acc, montant) => { return acc += montant.montant}, 0)

return chiffreAffTot;
}

//console.log(calcTotal(ventes));

function findMax (ventes)
{
    let j = 0;
    let max = ventes[0].montant;
   for ( let i = 0; i >=ventes.length ; i++ )
   {
   if(max < ventes[i].montant)
   {
    j = i;
    max = ventes[i];
   }

   }
   return ventes[j];
}

console.log(`Meilleur vente : ${findMax(ventes).produit} (${findMax(ventes).vendeur}) -- ${findMax(ventes).montant} DH ` );
