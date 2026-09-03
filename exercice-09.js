const commandes = [
 { montant: 150, statut: "standard" },
 { montant: 620, statut: "standard" },
 { montant: 1200, statut: "premium" }
];

function calculerCommande (montant, statut)
{
    let remise = 0;
    let livraison = 30;
    
    if(montant > 1000 )
    {
        remise = 15;
    }

     else if(montant >=500 && montant <=1000 )
    {
        remise = 10;
    }
     
    else if(montant < 500 && montant >= 200)
    {
        remise = 10;
    }

    else 
    {
        remise = 0;
    }

    if (statut === 'premium')
    {
        remise += 5;
    }

    let calcRemise = ((montant * remise) / 100);
    let totalApresRemise = montant - calcRemise;
    //console.log(totalApresRemise);
    if (totalApresRemise >= 300)
        {
            livraison = 0;
        } 
    let totalAPayer = livraison + totalApresRemise;    

    return {
        pourcentageRemise : remise,
        remise : calcRemise,
        totalApresRemise :totalApresRemise ,
        livraison : livraison,
        totalAPayer : totalAPayer
    }

}

console.log(calculerCommande(commandes[1].montant , commandes[1].statut));