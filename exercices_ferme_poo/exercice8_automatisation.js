
routine(marche) {

  // ÉTAPE 1 : Vérifier si la récolte est prête
  if (marche.recoltePrete == true) {

    // Si elle est prête, on demande au marché de récolter
    marche.recolter();

  }


  // ÉTAPE 2 : Parcourir tous les produits du stock du marché
  for (const [produit, unites] of Object.entries(marche.stock)) {

    // produit = nom du produit (ex : "legumes")
    // unites = quantité disponible (ex : 12)

    // ÉTAPE 3 : Vérifier qu'il y a au moins une unité disponible
    if (unites > 0) {

      // ÉTAPE 4 : Calculer combien le tracteur peut transporter
      // Math.min choisit le plus petit des deux nombres :
      // - les unités disponibles dans le stock
      // - la capacité maximale du tracteur
      const quantite = Math.min(unites, this.tractor.capacity());

      // ÉTAPE 5 : Vendre la quantité calculée
      marche.vendre(produit, quantite);

    }
  }
}

