
export class EggProducer {

    // Le constructeur reçoit le nombre de poules.
    constructor(hens) {

        // On stocke le nombre de poules dans l'objet.
        this.hens = hens;
    }

    // Méthode qui permet de récupérer la production.
    // product et units sont des paramètres reçus,
    // mais attention : ils ne sont pas utilisés dans le calcul actuel.
    collect() {

        // On renvoie un objet contenant :
        // product : le nom du produit.
        // units : le nombre d'unités produites.
        return {
            product: 'œufs',

            // Ici, on utilise this.hens.
            // Donc le nombre d'œufs renvoyé est égal au nombre de poules.
            units: this.hens
        };
    }
}


export class MilkProducer {

    // Le constructeur reçoit le nombre de vaches.
    constructor(cows) {

        // On stocke le nombre de vaches dans l'objet.
        this.cows = cows;
    }

    // Méthode qui récupère la production de lait.
    collect() {

        // On renvoie un objet avec le produit et la quantité.
        return {
            product: 'lait',

            // Chaque vache produit ici 2 unités de lait.
            units: this.cows * 2
        };
    }
}


export class Farmer {

    // Cette méthode reçoit une liste de producteurs.
    collectAll(producers) {

        // On crée un objet vide pour stocker les totaux.
        const total = {};

        // On parcourt chaque producteur du tableau producers.
        for (const producer of producers) {

            // On appelle collect() sur le producteur actuel.
            // Le résultat est stocké dans result.
            const result = producer.collect();

            // On ajoute la quantité au total du produit concerné.
            // Si le produit n'existe pas encore dans total,
            // on commence à 0.
            total[result.product] =
                (total[result.product] || 0) + result.units;
        }

        // On renvoie l'objet qui contient toutes les productions.
        return total;
    }
}
