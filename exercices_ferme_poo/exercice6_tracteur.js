
// On exporte la classe pour pouvoir l'utiliser dans d'autres fichiers.
export class Transport {

  // Le constructeur est appelé lorsqu'on crée un nouvel objet.
  constructor() {

    // new.target permet de savoir quelle classe a été appelée avec new.
    // Ici, on vérifie si on essaie de créer directement un Transport.
    if (new.target === Transport) {

      // Pour le moment, ce bloc est vide.
      // Il pourrait servir à empêcher la création directe d'un Transport.
    }

    // On appelle la méthode capacity().
    // Dans Transport, cette méthode déclenche une erreur.
    // Dans une classe enfant, elle peut être redéfinie.
    this.capacity();
  }

  // Méthode qui représente la capacité du transport.
  capacity() {

    // throw déclenche volontairement une erreur.
    // Transport ne connaît pas encore sa capacité précise.
    throw new Error("Erreur");
  }

  // Cette méthode vérifie si un poids peut être transporté.
  checkLoad(weight) {

    // On compare le poids demandé à la capacité du véhicule.
    if (weight > this.capacity()) {

      // Si le poids dépasse la capacité, on déclenche une erreur.
      throw new Error("Trop lourd");

      
    }

    // Si le poids est acceptable,
    // on renvoie la capacité restante après chargement.
    return this.capacity() - weight;
  }
}


// Tractor hérite de Transport.
// Il récupère donc ses méthodes.
export class Tractor extends Transport {

  // Le constructeur reçoit la capacité maximale du tracteur.
  constructor(limit) {

    // super() appelle le constructeur de la classe Transport.
    super();

    // On stocke la capacité dans la propriété limit du tracteur.
    this.limit = limit;
  }

  // On redéfinit la méthode capacity() héritée de Transport.
  capacity() {

    // On renvoie la capacité stockée dans cet objet.
    return this.limit;
  }
}
