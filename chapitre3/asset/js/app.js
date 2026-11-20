"use strict";

//BOM : Browser Object Model
//alert() affiche une boîte de dialogue avec un message
//confirm()  affiche une boîte de dialogue avec un message et des boutons OK/annuler
//prompt() affiche une boîte de dialogue et un champ de saisie

// window.alert("Bienvenue sur la page des héros !") 
// alert("Bienvenue sur la page des héros !") // affiche une boîte de dialogue de type alerte, même chose qu'au-dessus


// let choix = confirm("Voulez-vous continuer ? ") //une fenêtre apparait pour laisser le choix à l'user, ce choix sera affecté à la variable choix
// alert(choix) // affiche true ou false selon le choix
// if (choix){ // si le choix c'est ok donc true
//     alert("Vous avez choisi de continuer")
// } else { // sinon false
//     alert("Vous avez choisi d'annuler ! ")
// }

// let age = prompt("Quel est votre âge ? ") // prompt -> équivalent à input
// alert("Vous avez"+ age + "ans"); // affiche l'âge renseigné juste avant
// if (age <18){ // si l'âge est inférieur à 18
//     alert("Vous êtes mineur");
//     window.location.href = "https://www.google.com" // renvoie l'user sur une page google

// } else {
//     alert("Vous êtes majeur")
// }

// //MA VERSION :

// let chiffre1=Number(prompt("Quel premier chiffre ? ")) // l'user rentre un nombre via le prompt qui sera affecté à la variable chiffre 1
// let chiffre2=Number(prompt("Quel second chiffre ? ")) // pareil mais pour chiffre 2, les deux chiffres seront convertis en numbers
// let operateur=prompt("Choisissez l'opérateur") // pareil mais pour opérateur


// if (operateur == "+"){ //si l'opérateur est +
//     alert(chiffre1 + chiffre2); //fenêtre alert avec le résultat additionné
// } else if (operateur == "-" ){ //pareil avec soustraction
//     alert(chiffre1 - chiffre2);
// } else if (operateur == "*"){ // multiplication
//     alert(chiffre1 * chiffre2)
// } else if(operateur =="/"){ // division
//     if( chiffre2 === 0){ // si le chiffre 2 est strictement égal à 0
//         alert("Impossible") // impossible
//     }else{
//        alert(chiffre1 / chiffre2)
//     }
// }else{
//     alert("Opérateur inconnu") //s'affiche si l'opérateur est inconnu
// }





// //Version sans BOM:
function calcul (a, b , operateur){ // fonction calculer avec a, b et opérateur comme paramètres
    if (typeof a !== "number" || typeof b !== "number"){ //si les types de a et b ne sont pas des number
        console.error("Erreur de typage");//message error dans la console
        return // fin de la fonction
    }

    switch(operateur){ //switch -> équivalent à un elif
        case "+": // si l'opérateur c'est +
           console.log(a + b) //affiche dans la console le résultat
           break; //fin du switch
        case "-":
            console.log(a-b)
            break;
        case "*":
            console.log(a * b)
            break;
        case "/":
            //structure conditionnelle ternaire : prédicat, affichage si le prédicat est vrai, else s'il est faux
            b === 0 ? console.error("Division impossible"): console.log(a/b)
            break;
        default: // valeur par défaut
            console.error("Opérateur inconnu") //opérateur inconnu

    }
}

//Version avec BOM
let auser = Number(prompt("premier chiffre ?")); //demande à l'user de taper son premier chiffre de type number
let buser = Number(prompt("Second chiffre ? ")); // pareil
let operatueuruser = prompt("Quel opérateur"); // demande l'opérateur

calcul(auser, buser, operatueuruser); //appelle la fonction avec les variables ci-dessus comme valeurs à calculer avec l'opérateur

//=============================================================================================================================================================


//DOM : Document Object Model 

// //récupération par le nom de balise
const header = document.getElementsByTagName("header")[0]; //le premier header [0]
console.log(header); //affiche la ligne du header dans la console

const h1 = document.getElementsByTagName("h1")[0]; //le premier header [0]
console.log(h1);

h1.textContent = "Bienvenue sur la page des héros !"; //change le contenue de h1
h1.style.color ='red'; //change la couleur de h1
h1.style.textAlign = 'center'; //aligne h1 au centre
console.dir(h1) //affiche les méthodes et propriétées de h1

// JAVASCRIPT STUDIO:

//  const mybnt = document.getElementById("bouton"); //récupère par l'ID qui est bouton qui sera affecter dans une variable constante mybnt
//  mybnt.style.background ='green'; // change le fond en vert


// const compteur = document.getElementById("compteur"); //l'élément dont l'id et compteur est affecter à la variable compteur
// let i = 1; //initialise le i à 1
// mybnt.onclick = () =>{ //action onclick sur le bouton
//     compteur.style.background =(i % 2 == 0 ? "blue" : "green" )// le compteur s'affiche en bleu si le i est pair
//     compteur.textContent = (i > 1 ? i + " clics":  i + " clic") //structure conditionnelle ternaire, si i >1 on affiche i(pluriels) clics sinon 1 clic(singulier)
//     i = i + 1; //ajoute i + 1 à chaque événement clic
// }



// const section = document.getElementsByTagName("section")[0]; //on prend l'élément section dans le document par son tag(section) et on rajoute son index [0] pour indiquer que c'est la première section que l'on utilise 
// const body = document.body; //raccourci pour le body qu'on place dans une variable

// section.onmouseover = () =>{ //événement mouseover, quand la souris est sur la section
//     body.style.background = "yellow"; //ça change le body en jaune
// }

// section.onmouseout = () =>{ //événement mouseout, quand la souris est en dehors de section
//   body.style.background = "white"; //change le body en blanc(l'origine)
// }


const heroes = document.querySelectorAll(".hero-card"); //récupère toutes les cartes de classe hero-card donc tous les héros

heroes.forEach(function(hero){ //une fonction pour chacun des héros avec hero comme paramètre
   const input = hero.querySelector("input"); //prend l'input, de chaque héros
   const bar = hero.querySelector(".level-fill"); //prend la classe level-fill de chaque héros
    
  

   input.addEventListener("input", function(){ //écoute l'évènement du curseur au niveau de l'input
    bar.style.width = this.value + "%"; //ajoute un % à la valeur car la largeur a besoin d'une unité, ici en pourcentage dans le CSS
   //value est la valeur actuelle de l'input, on s'en sert pour modifier dynamiquement la barre
    if(this.value>=80){ //si la valeur de l'input est supérieur ou égale à 80%; le background de la carte du héro devient vert
       hero.style.background = "green";
    } else if (this.value >=50){
        hero.style.background = "orange"
    } else{
        hero.style.background ="red"
    }
    
})
   




})