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
// function calcul (a, b , operateur){ // fonction calculer avec a, b et opérateur comme paramètres
//     if (typeof a !== "number" || typeof b !== "number"){ //si les types de a et b ne sont pas des number
//         console.error("Erreur de typage");//message error dans la console
//         return // fin de la fonction
//     }

//     switch(operateur){ //switch -> équivalent à un elif
//         case "+": // si l'opérateur c'est +
//            console.log(a + b) //affiche dans la console le résultat
//            break; //fin du switch
//         case "-":
//             console.log(a-b)
//             break;
//         case "*":
//             console.log(a * b)
//             break;
//         case "/":
//             //structure conditionnelle ternaire : prédicat, affichage si le prédicat est vrai, else s'il est faux
//             b === 0 ? console.error("Division impossible"): console.log(a/b)
//             break;
//         default: // valeur par défaut
//             console.error("Opérateur inconnu") //opérateur inconnu

//     }
// }

// //Version avec BOM
// let auser = Number(prompt("premier chiffre ?")); //demande à l'user de taper son premier chiffre de type number
// let buser = Number(prompt("Second chiffre ? ")); // pareil
// let operatueuruser = prompt("Quel opérateur"); // demande l'opérateur

// calcul(auser, buser, operatueuruser); //appelle la fonction avec les variables ci-dessus comme valeurs à calculer avec l'opérateur

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


window.onload = () => {

    const heroes = document.querySelectorAll(".hero-card");
    

    heroes.forEach(function(hero) {

        const input = hero.querySelector("input");
        const bar = hero.querySelector(".level-fill");
        const texte =hero.querySelector("#textePourcentage")
        const button = hero.querySelector(".boutton")
       
        input.value = bar.style.width.replace("%", "")
         // bar.style.width = input.value + "%"; L'INVERSE !

        input.addEventListener("input", function() {

            bar.style.width = this.value + "%";

              texte.textContent = input.value + "%"
            if (this.value >= 80) {
                hero.style.background = "green";

            } else if (this.value >= 50) {
                hero.style.background = "orange";

            } else {
                hero.style.background = "red";
            }

        }); 
        
         button.addEventListener("click", function(){
            const dossier = hero.dataset.hero    //prend le dossier du héros, qui correspond à la valeur de l'attribut data-hero
            const random =Math.floor(Math.random()*4)+1;
            const image = document.createElement("img");    //sinon on créer la balise html img
            image.src = `asset/img/${dossier}/${random}.jpg`;
            image.alt = "Une image du héro correspondant"   //texte alternatif
            image.style.height = 200 + "px";   //change la hauteur
            image.style.width = 200 + "px"; // change la largeur
            image.style.position = "absolute" // change sa position
            image.style.left = 400 + "px";
            image.style.top = 20 + "px"
            hero.appendChild(image) //on ajoute l'image a son parent héro
            

       })

    });



    
}; 



//  const imageExistante = hero.querySelector("img") //création d'une variable qui sélectionne la balise img du hero
//             if(imageExistante){ //si il y en a une
//                 hero.removeChild(imageExistante) //on la retire, img est sont enfant
//             } else{}






