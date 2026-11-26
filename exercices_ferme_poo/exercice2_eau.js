
export class WaterTank {

    // Déclare une propriété privée appelée #water.
    // Elle stockera la quantité d'eau actuellement présente.
    // Le symbole # signifie qu'on ne peut pas y accéder
    // directement depuis l'extérieur de la classe.
    #water;

    // Le constructeur s'exécute quand on crée un réservoir
    // avec new WaterTank(...).
    constructor(capacity) {

        // On stocke la capacité maximale du réservoir.
        // Exemple : capacity = 100 signifie 100 litres maximum.
        this.capacity = capacity;

        // On remplit le réservoir au maximum dès sa création.
        // Si capacity vaut 100, #water vaut aussi 100.
        this.#water = capacity;
    }

    // Getter : permet de lire le niveau d'eau comme une propriété.
    // On pourra écrire : monReservoir.level
    get level() {

        // Renvoie la quantité d'eau actuellement stockée.
        return this.#water;
    }

    // Méthode pour utiliser de l'eau.
    // amount représente la quantité d'eau que l'on veut utiliser.
    use(amount) {

        // Number.isFinite(amount) vérifie que amount est un nombre
        // valide et fini (pas NaN, Infinity ou -Infinity).
        //
        // this.#water >= amount vérifie qu'il y a assez d'eau.
        if (Number.isFinite(amount) && this.#water >= amount) {

            // On retire amount de la quantité d'eau actuelle.
            // Exemple : 100 - 20 = 80.
            this.#water -= amount;

            // On indique que l'utilisation a réussi.
            return true;
        }

        // Si la quantité n'est pas valide ou s'il n'y a pas assez d'eau,
        // on ne retire rien et on renvoie false.
        return false;
    }

    // Méthode pour remplir le réservoir.
    refill(amount) {

        // On ajoute amount à la quantité d'eau actuelle.
        // Exemple : 80 + 30 = 110.
        this.#water += amount;

        // On vérifie que le niveau ne dépasse pas la capacité maximale.
        if (this.#water > this.capacity) {

            // Si on dépasse, on remet le niveau à la capacité maximale.
            this.#water = this.capacity;
        }

        // On renvoie la quantité d'eau après le remplissage.
        return this.#water;
    }
}
