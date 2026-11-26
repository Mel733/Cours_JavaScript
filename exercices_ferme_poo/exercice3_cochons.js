
export class Animal {

    // Le constructeur reçoit le nom de l'animal.
    constructor(name) {

        // On stocke le nom dans l'objet Animal.
        this.name = name;

        // On crée un compteur de repas.
        // Au départ, l'animal a reçu 0 repas.
        this.meals = 0;
    }

    // Méthode permettant de nourrir l'animal.
    // kg représente la quantité de nourriture donnée.
    feed(kg) {

        // On ajoute 1 au nombre de repas.
        // Exemple : si meals vaut 0, il passe à 1.
        this.meals++;

        // On indique que le repas a été accepté.
        return true;
    }
}


// Pig hérite de Animal.
// Cela signifie que Pig récupère les propriétés et méthodes de Animal.
export class Pig extends Animal {

    // Le constructeur reçoit deux informations :
    // name = le nom du cochon
    // weight = son poids de départ
    constructor(name, weight) {

        // Appelle le constructeur de la classe Animal.
        // Cela initialise name et meals.
        super(name);

        // On ajoute une propriété propre à Pig : son poids.
        this.weight = weight;
    }

    // Pig possède sa propre version de feed().
    // Cette méthode remplace celle de Animal pour les cochons.
    feed(kg) {

        // On appelle d'abord la méthode feed() de Animal.
        // Elle augmente meals de 1 et renvoie true.
        const accepted = super.feed(kg);

        // Si le repas a été accepté...
        if (accepted == true) {

            // On augmente le poids du cochon.
            // Il prend 1/4 du poids de nourriture donné.
            // Exemple : 4 kg de nourriture = 1 kg de poids gagné.
            this.weight += kg / 4;

            // On indique que le repas s'est bien passé.
            return true;
        }
        return false
    }

    // Méthode qui vérifie si le cochon est assez lourd
    // pour être prêt à être vendu.
    readyForMarket() {

        // Si le poids est supérieur ou égal à 100 kg...
        if (this.weight >= 100) {

            // Le cochon est prêt pour le marché.
            return true;
        }

        // Sinon, il n'est pas encore prêt.
        return false;
    }
}
