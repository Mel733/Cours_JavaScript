
"use strict"; // Active le mode strict de JavaScript : permet de détecter certaines erreurs.

console.log(Date.now()); // Affiche la date actuelle en millisecondes.

// ==========================================
// 1. CLASSE TACHE
// ==========================================

// Cette classe sert de modèle pour créer une nouvelle tâche.
class Tache {

    // Le constructeur est appelé automatiquement lorsqu'on crée une tâche.
    // texte représente le nom de la tâche saisi par l'utilisateur.
    constructor(texte) {

        this.id = Date.now(); // Donne un identifiant à la tâche.
        this.texte = texte; // Enregistre le texte de la tâche.
        this.terminee = false; // Indique que la tâche n'est pas encore terminée.
        this.dateCreation = new Date(); // Enregistre la date de création.
    }
}


// ==========================================
// 2. CLASSE GESTIONNAIRE DE TACHES
// ==========================================

// Cette classe contient toutes les fonctions permettant de gérer les tâches.
class GestionnaireTaches {

    // Le constructeur se lance automatiquement à la création du gestionnaire.
    constructor() {

        this.filtreActuel = 'all'; // Au démarrage, on affiche toutes les tâches.

        this.taches = this.chargerTaches(); // Récupère les tâches sauvegardées dans le navigateur.

        this.init(); // Lance l'initialisation de l'application.
    }


    // ==========================================
    // 3. INITIALISATION DE L'APPLICATION
    // ==========================================

    init() {

        // Récupère le bouton Ajouter et écoute les clics.
        // Lorsqu'on clique, la fonction ajouterTache() est exécutée.
        document.getElementById("addBtn")
            .addEventListener("click", () => this.ajouterTache());


        // Récupère le champ de saisie et écoute les touches du clavier.
        document.getElementById("newTask")
            .addEventListener("keypress", (e) => {

                // Vérifie si l'utilisateur a appuyé sur la touche Entrée.
                if (e.key === "Enter") {

                    this.ajouterTache(); // Ajoute la tâche.
                }
            });


        // ==========================================
        // GESTION DES FILTRES
        // ==========================================

        // Sélectionne tous les boutons présents dans la classe filters.
        document.querySelectorAll(".filters button").forEach(button => {

            // Ajoute un événement au clic sur chaque bouton.
            button.addEventListener("click", (e) => {

                // Sélectionne tous les boutons et retire la classe active.
                document.querySelectorAll(".filters button")
                    .forEach(btn => btn.classList.remove("active"));

                // Ajoute la classe active au bouton sur lequel on vient de cliquer.
                e.target.classList.add("active");

                // Récupère la valeur du filtre dans l'attribut data-filter du HTML.
                this.filtreActuel = e.target.dataset.filter;

                // Réaffiche les tâches selon le filtre sélectionné.
                this.afficherTaches();
            });
        });

        // Affiche les tâches dès l'ouverture de l'application.
        this.afficherTaches();
    }


    // ==========================================
    // 4. AJOUTER UNE TACHE
    // ==========================================

    ajouterTache() {

        // Récupère le champ de saisie dans le HTML.
        const input = document.getElementById('newTask');

        // Récupère le texte saisi et supprime les espaces inutiles au début et à la fin.
        const texte = input.value.trim();

        // Vérifie si le champ est vide.
        if (texte === "") {

            alert('Veuillez entrer une tâche'); // Affiche un message d'erreur.

            return; // Arrête l'exécution de la fonction.
        }

        // Crée une nouvelle tâche grâce à la classe Tache.
        const nouvelleTache = new Tache(texte);

        // Ajoute la nouvelle tâche dans le tableau des tâches.
        this.taches.push(nouvelleTache);

        // Sauvegarde le tableau dans le navigateur.
        this.sauvegarderTaches();

        // Actualise l'affichage pour montrer la nouvelle tâche.
        this.afficherTaches();

        input.value = ""; // Vide le champ de saisie.

        input.focus(); // Replace le curseur dans le champ pour faciliter une nouvelle saisie.
    }


    // ==========================================
    // 5. SUPPRIMER UNE TACHE
    // ==========================================

    // id correspond à l'identifiant de la tâche à supprimer.
    supprimerTache(id) {

        // Demande à l'utilisateur de confirmer la suppression.
        if (confirm('Voulez-vous vraiment supprimer cette tâche ?')) {

            // filter() crée un nouveau tableau en gardant les tâches
            // dont l'identifiant est différent de celui à supprimer.
            this.taches = this.taches.filter(tache => tache.id !== id);

            // Sauvegarde le nouveau tableau.
            this.sauvegarderTaches();

            // Actualise l'affichage sans la tâche supprimée.
            this.afficherTaches();
        }
    }


    // ==========================================
    // 6. SAUVEGARDER LES TACHES
    // ==========================================

    sauvegarderTaches() {

        // localStorage permet de stocker des données dans le navigateur.
        // JSON.stringify() transforme le tableau en texte pour pouvoir le sauvegarder.
        localStorage.setItem('taches', JSON.stringify(this.taches));
    }


    // ==========================================
    // 7. CHARGER LES TACHES
    // ==========================================

    chargerTaches() {

        // Récupère les tâches enregistrées dans localStorage.
        const taches = localStorage.getItem("taches");

        // Si des tâches existent, JSON.parse() transforme le texte en tableau.
        // Sinon, on retourne un tableau vide.
        return taches ? JSON.parse(taches) : [];
    }


    // ==========================================
    // 8. AFFICHER LES TACHES
    // ==========================================

    afficherTaches() {

        // Récupère la zone HTML dans laquelle les tâches seront affichées.
        const taskList = document.getElementById('taskList');

        // Appelle filtrerTaches() pour récupérer uniquement les tâches souhaitées.
        const tachesFiltrees = this.filtrerTaches();

        // Vérifie si le tableau des tâches filtrées est vide.
        if (tachesFiltrees.length === 0) {

            // Affiche un message lorsqu'il n'y a aucune tâche à afficher.
            taskList.innerHTML = '<div class="empty-state">Aucune tâche à afficher</div>';

            return; // Arrête la fonction car il n'y a rien d'autre à afficher.

        } else {

            // map() parcourt chaque tâche et transforme chaque tâche en HTML.
            taskList.innerHTML = tachesFiltrees.map(tache => `

                <div class="task-item ${tache.terminee ? 'completed' : ''}">

                    <!-- Case à cocher : checked si la tâche est terminée. -->
                   <input type="checkbox"
                        class="task-checkbox"
                        ${tache.terminee ? 'checked' : ''}
                        onchange="gestionnaire.toggleTache(${tache.id})">

                    <!-- Affiche le texte de la tâche. -->
                    <span class="task-text">${tache.texte}</span>

                    <!-- Affiche la date de création de la tâche. -->
                    <span class="task-date">
                        ${this.formatDate(tache.dateCreation)}
                    </span>

                    <!-- Bouton qui appelle supprimerTache() avec l'identifiant de la tâche. -->
                    <button class="delete-btn"
                        onclick="gestionnaire.supprimerTache(${tache.id})">
                        Supprimer
                    </button>

                </div>

            `).join(''); // join('') rassemble tous les blocs HTML en une seule chaîne.
        }
    }


    // ==========================================
    // 9. FORMATER LA DATE
    // ==========================================

    formatDate(date) {

        // Transforme la date reçue en véritable objet Date.
        const d = new Date(date);

        // Transforme la date en format français : jour/mois/année.
        return d.toLocaleDateString('fr-FR', {
            day: '2-digit', // Affiche le jour sur deux chiffres.
            month: '2-digit', // Affiche le mois sur deux chiffres.
            year: 'numeric' // Affiche l'année sur quatre chiffres.
        });
    }


    // ==========================================
    // 10. CHANGER L'ÉTAT D'UNE TACHE
    // ==========================================

    // id correspond à l'identifiant de la tâche à modifier.
    toggleTache(id) {

        // find() recherche dans le tableau la tâche qui possède cet identifiant.
        const tache = this.taches.find(t => t.id === id);

        // Vérifie que la tâche existe.
        if (tache) {

            // Inverse son état :
            // false devient true (terminée).
            // true devient false (non terminée).
            tache.terminee = !tache.terminee;

            // Sauvegarde le nouvel état de la tâche.
            this.sauvegarderTaches();

            // Actualise l'affichage.
            this.afficherTaches();
        }
    }


    // ==========================================
    // 11. FILTRER LES TACHES
    // ==========================================

    filtrerTaches() {

        // switch vérifie la valeur du filtre actuellement sélectionné.
        switch (this.filtreActuel) {

            // Si le filtre est pending, on affiche les tâches non terminées.
            case "pending":
                return this.taches.filter(tache => !tache.terminee);

            // Si le filtre est completed, on affiche les tâches terminées.
            case "completed":
                return this.taches.filter(tache => tache.terminee);

            // Si aucun des filtres précédents ne correspond,
            // on affiche toutes les tâches.
            default:
                return this.taches;
        }
    }
}


// ==========================================
// 12. CRÉER LE GESTIONNAIRE
// ==========================================

// Crée une instance de la classe GestionnaireTaches.
// Cela lance automatiquement le constructeur puis init().
const gestionnaire = new GestionnaireTaches();
