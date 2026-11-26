
// Liste des légumes que l'on a le droit de planter dans le jardin.
const ALLOWED = ['carotte', 'chou', 'tomate', 'salade', 'radis', 'poireau'];

// On crée une classe appelée Garden (Jardin).
export class Garden {

    // Le constructeur est exécuté quand on crée un jardin avec new.
    // vegetables représente la liste de légumes donnée au départ.
    constructor(vegetables) {

        // On parcourt chaque légume de la liste reçue.
        for (const legume of vegetables) {

            // On vérifie si le légume ne fait PAS partie de ALLOWED.
            if (!(ALLOWED.includes(legume))) {

                // Si le légume n'est pas autorisé, on arrête la création
                // du jardin et on affiche une erreur.
                throw new Error("Legumes pas autorisé");
            }
        }

        // this représente le jardin que l'on est en train de créer.
        // On crée une propriété vegetables DANS ce jardin.
        // [...] copie la liste reçue au lieu de garder exactement le même tableau.
        this.vegetables = [...vegetables];
    }

    // Méthode qui permet de récupérer la liste des légumes du jardin.
    list() {

        // On renvoie une copie de la liste du jardin.
        return [...this.vegetables];
    }

    // Méthode qui vérifie si un légume est présent dans le jardin.
    has(vegetable) {

        // includes vérifie si le légume existe dans le tableau.
        // Renvoie true s'il existe, false sinon.
        return this.vegetables.includes(vegetable);
    }

    // Méthode qui permet d'ajouter un légume dans le jardin.
    plant(vegetable) {

        // On vérifie que le légume est autorisé.
        if (ALLOWED.includes(vegetable)) {

            // push ajoute le légume À LA FIN du tableau vegetables
            // qui est stocké dans le jardin actuel (this).
            this.vegetables.push(vegetable);

            // On indique que l'ajout a réussi.
            return true;
        }

        // Si le légume n'est pas autorisé, on ne l'ajoute pas.
        // On indique que l'ajout a échoué.
        return false;
    }
}
