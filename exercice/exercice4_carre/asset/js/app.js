"use strict"
const carre = document.getElementById("carre");
const conteneur = document.getElementById("conteneur");
const bouger = document.getElementById("bouger");
const arretez = document.getElementById("arreter");
const reset = document.getElementById("reset");
const cercle = document.getElementById("cercle");
const ripple = document.querySelectorAll(".ripple");
let boucle; //variable sans valeur pour le moment
let droite = 0;


ripple.forEach((bouton) => { // On parcourt tous les boutons.
    bouton.addEventListener("click", function(element) { // Chaque bouton possède son événement click. element représente l'événement du clic.

        cercle.style.display = "none"; // On cache le cercle jaune pendant l'animation.

        const positionButton = this.getBoundingClientRect(); // On récupère la position et les dimensions du bouton et on les stocke dans une constante.

        const y = element.clientY - positionButton.top; // On calcule la position verticale du clic à l'intérieur du bouton.
        const x = element.clientX - positionButton.left; // Même principe pour la position horizontale.

        const btnCircle = document.createElement("span"); // On crée un élément span temporaire et on le stocke dans une constante.

        btnCircle.classList.add("btn-circle"); // On lui ajoute la classe btn-circle, présente dans le CSS.

        btnCircle.style.top = y + "px"; // On indique au cercle où il doit apparaître. On ajoute px car CSS a besoin d'une unité.
        btnCircle.style.left = x + "px";

        this.appendChild(btnCircle); // On ajoute temporairement l'élément btnCircle (un span) au bouton cliqué dans le HTML.

        setTimeout(() => {
            cercle.style.display = "block"; // On réaffiche le cercle jaune.
            btnCircle.remove(); // On supprime le cercle violet du HTML.
        }, 500); // Délai de 0,5 seconde.
    });
});


function bougerCarre() {
    droite = droite + 2;
    carre.style.left = droite + "px"; // On déplace le carré de 2 pixels vers la droite.
     carre.style.borderRadius = 50 + "%"

    if (carre.offsetWidth + carre.offsetLeft >= conteneur.clientWidth) {
        // Si la largeur du carré + sa distance depuis le bord gauche du conteneur est supérieure ou égale à la largeur du conteneur :
        // Cela signifie que le carré touche ou dépasse le bord droit du conteneur.
        stopCarre(); // On arrête le déplacement du carré avec la fonction.
        resetCarre(); // On remet le carré à sa position d'origine avec la fonction.
    }
}


function resetCarre() {
    clearInterval(boucle); // On arrête la boucle.
    droite = 0; // On remet la variable droite à 0.
    carre.style.left = droite + "px"; // On remet le carré à sa position d'origine.
}


function stopCarre() {
    clearInterval(boucle); // On arrête la boucle.
}


bouger.addEventListener("click", () => {
   
    clearInterval(boucle)
    boucle = setInterval(bougerCarre, 200); // La boucle appelle la fonction bougerCarre toutes les 0,2 secondes.
});


arretez.addEventListener("click", () => {
    stopCarre();
});


reset.addEventListener("click", () => {
    resetCarre();
});


document.addEventListener("mousemove", (event) => { // On détecte le déplacement de la souris.
    //clientX et Y -> coordonnée de la souris horizontale et verticale
    cercle.style.left = (event.clientX - (cercle.offsetWidth / 2)) + "px";
    // On divise la largeur du cercle par deux pour le centrer sur le curseur. Sans cela, c'est son coin supérieur gauche qui se trouverait sur la souris.
    // offsetWidth et offsetHeight récupèrent respectivement la largeur et la hauteur du cercle. On ajoute px car CSS a besoin d'une unité.

    cercle.style.top = (event.clientY - (cercle.offsetHeight / 2)) + "px";
    // Même principe pour la position verticale (la hauteur).
});
