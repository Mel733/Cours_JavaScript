
export class Order {

  // Le constructeur reçoit deux informations :
  // market = le nom du marché
  // weight = le poids de la commande
  constructor(market, weight) {

    // On stocke le nom du marché dans l'objet créé.
    this.market = market;

    // On stocke le poids dans l'objet créé.
    this.weight = weight;
  }

  // Méthode static : on peut l'appeler directement avec Order.from()
  // Elle sert à créer une commande à partir d'un texte.
  static from(text) {

    // On découpe le texte au niveau des deux-points.
    // Exemple : "Halles:3.5"
    // market reçoit "Halles"
    // weight reçoit "3.5"
    const [market, weight] = text.split(':');

    // On crée un nouvel objet Order.
    // Number(weight) transforme "3.5" (texte) en 3.5 (nombre).
    // new Order appelle le constructeur avec ces deux valeurs.
    return new Order(market, Number(weight));
  }

  // Méthode d'instance : elle sera partagée par le prototype.
  // Elle permet de fabriquer une phrase avec les informations de l'objet.
  label() {

    // On renvoie le nom du marché suivi du poids.
    return `${this.market} - ${this.weight} kg`;
  }
}
