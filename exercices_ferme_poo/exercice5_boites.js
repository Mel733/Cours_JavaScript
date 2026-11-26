
export class Crate {

    // Stocke les légumes et leurs quantités.
    // Exemple : { carotte: 3, chou: 2 }
    #units = {};

    constructor(garden, capacity = 12) {

        // Capacité maximale de la cagette.
        this.capacity = capacity;

        // Jardin associé à cette cagette.
        this.garden = garden;
    }

    add(vegetable, units = 1) {

        // Vérifie si le légume existe dans le jardin.
        if (!this.garden.has(vegetable)) {
            return false;
        }

        // Vérifie si l'ajout dépasse la capacité.
        if (this.count() + units > this.capacity) {
            return false;
        }

        // Ajoute les unités au légume concerné.
        this.#units[vegetable] =
            (this.#units[vegetable] || 0) + units;

        return true;
    }

    count() {

        // Variable qui stocke le nombre total de légumes.
        let total = 0;

        // Parcourt chaque légume et sa quantité.
        for (const [vegetable, units] of Object.entries(this.#units)) {

            // Ajoute la quantité au total.
            total += units;
        }

        // Renvoie le nombre total.
        return total;
    }

    manifest() {

        // Transforme l'objet privé en tableau d'objets.
        return Object.entries(this.#units).map(
            ([vegetable, units]) => {

                return {
                    vegetable: vegetable,
                    units: units
                };
            }
        );
    }
}
