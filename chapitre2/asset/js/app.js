"use strict" //indique de coder proprement

//NaN : Not a Number
let prenom = "Melodie"
console.log(prenom/3)//NaN et pourtant le type est un nombre
console.log(typeof(prenom/3)) //affiche number



let age = 31
console.log("Vous avez", age, "ans")


let tableau = ["titi", "toto"]
console.table(tableau)
//permet d'afficher le tableau sous forme de tableau dans la console

console.error("ATTENTION ERREUR") // affiche une erreur en rouge
console.warn("Attention") // affiche un avertissement en jaune
console.info("Salut") // affichera Salut avec un i pour informations



//Les objets :

const val = null //objet false, typeof null renvoie "object" mais ce n'est pas un objet réel

//objet date:
let dateJour = new Date() //objet pour afficher la date
console.dir(dateJour) // le dir affichera toutes les méthodes et propriétées de Date

//récupérer le jour, le mois et l'année
const jour = dateJour.getDay(),
      mois = dateJour.getMonth(),
      annee = dateJour.getFullYear()

console.log(`Jour : ${dateJour.getDay()}, Mois : ${dateJour.getMonth()+ 1}, ${dateJour.getFullYear()} `) 
// + 1 car janvier commence à 0 et décembre à 11 donc juin = 5 + 1 donc 6

const moiFrancais = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

console.log("Nous sommes le ", jour , "/", moiFrancais[mois] + "/" + annee)

const chaine = new String("Bonjour") // c'est un objet
console.log(chaine.toUpperCase())//met en majuscules
console.log(typeof chaine) //renvoie object
//type complexe : 
const objetComplexe = {
    nom:"Captain America",
    superPouvoir : "force surhumaine",
    costume : "bouclier",
    ennemi : "Red skull"

}
console.log(objetComplexe) // affiche l'objet avec ses propriétés
console.log(`${objetComplexe.nom} a pour ennemi ${objetComplexe.ennemi}`) // affiche le nom et l'ennemi


//for..in  : uniquement dans les objets énumérables. Contrairement au for..of qui est utilisé
//pour les tableaux qui sont des éléments itérables

const spiderman={
    nom : "Peter Parker",
    alias : "SpiderMan",
    age : 25,
    ville : "New York",
    superPouvoir : "Toiles d'araignée"

}

for (const indice in spiderman){
    console.log(`${indice} : ${spiderman[indice]}`) // affiche par exemple nom de la propriété et sa valeur depuis l'objet spiderman
}

//hasOwnProperty : permet de vérifier si un objet possède une propriété spécifique

const equipement = {
    casque : "casque de protection",
    bouclier : "Bouclier indestructible",
    armure : "armure de protection",

}

console.log(equipement.hasOwnProperty("casque")) // True car existant
console.log(equipement.hasOwnProperty("épée")) // False car inexistant

for (const piece in equipement){
    if (equipement.hasOwnProperty(piece)){
        console.log(`${piece} : ${equipement[piece]}`)
    }
} // parcourt l'objet et affiche tous les équipements présents avec leur description 


//objet avec propriétés et des méthodes :
const heroBase= {
    nom :"hero inconnu",
    niveau : 1,
    pointsVie :100,

    //méthode:
    sePresenter: function(){
        console.log(`je suis ${this.nom}, je suis niveau ${this.niveau} et j'ai ${this.pointsVie} points de vie`)
    }, // affiche les propriétés de l'objet, this -> l'objet en lui-même -> comme un self sur python

    gagnerExperience: function (points){ //paramètre points, on attendra un number lors de l'appel
        this.niveau += points; //modification de la propriété selon le nombre qui sera renseigné
        console.log(`Niveau actuel : ${this.niveau}`); //affichage du nouveau niveau
    },

    attaquer : function(cible){ //pareil mais on attendra un str avec la cible
      const degat = this.niveau*10; //calcul basé sur le niveau de l'objet qui sera * 10
      console.log(`${this.nom} attaque ${cible} et inflige ${degat} de dégâts`); //affiche le nom de l'objet, la cible et les dégâts
      return degat; // retourne les dégâts infligés
    }
};


heroBase.sePresenter(); //appelle l'objet et sa fonction se présenter
heroBase.nom = "Iron Man"; // change le nom du hero
heroBase.sePresenter();
heroBase.gagnerExperience(2); //appelle la méthode pour ajouter deux niveaux
heroBase.attaquer("Thanos"); //appelle la méthode attaquer avec sa cible Thanos

//ajout dynamique :
heroBase.ville = "New York"; //ajoute une propriété ville qui a la valeur NewYork
console.log(heroBase.ville); // affiche la ville de l'objet
console.dir(heroBase); // affiche toutes les méthodes et propriétées de l'objet
heroBase.pouvoirs = ["Vol", "Force surhumaine"]; // ajoute une propriété pouvoirs qui est un tableau
console.log(heroBase.pouvoirs); // affiche le tableau avec les pouvoirs
console.dir(heroBase); // affiche toutes les méthodes et propriétées de l'objet

//Ajout nouvelle méthode :
heroBase.utiliserPouvoir = function (pouvoirs){ //ajoute une méthode pour l'objet 
    if (this.pouvoirs && this.pouvoirs.includes(pouvoirs)){ // si la propriété existe et que le tableau contient le pouvoir indiqué
        console.log(`${this.nom} utilise ${pouvoirs}`); //affiche le nom et le pouvoir existant
    } else{ 
        console.log(`${this.nom} ne possède pas ${pouvoirs}`) //affiche si le nom et le pouvoir inexistant
    }
// les accolades sont facultatives


}

heroBase.utiliserPouvoir("Vol") // le possède
heroBase.utiliserPouvoir("Super vitesse") // ne le possède pas