"use strict";
//BOM : Browser Object Model
//alert() affiche une boîte de dialogue avec un message
//confirm()  affiche une boîte de dialogue avec un message et des boutons OK/annuler
//prompt() affiche une boîte de dialogue et un champ de saisie

window.alert("Bienvenue sur la page des héros !") 
alert("Bienvenue sur la page des héros !") // affiche une boîte de dialogue de type alerte, même chose que au-dessus


let choix = confirm("Voulez-vous continuer ? ") //une fenêtre apparait pour laisser le choix à l'user, ce choix sera affecté à la variable choix
alert(choix) // affiche true ou false selon le choix
if (choix){ // si le choix c'est ok donc true
    alert("Vous avez choisi de continuer")
} else { // sinon false
    alert("Vous avez choisi d'annuler ! ")
}

let age = prompt("Quel est votre âge ? ") // prompt -> équivalent à input
alert("Vous avez"+ age + "ans"); // affiche l'âge renseigné juste avant
if (age <18){ // si l'âge est inférieur à 18
    alert("Vous êtes mineur");
    window.location.href = "https://www.google.com" // renvoie l'user sur une page google

} else {
    alert("Vous êtes majeur")
}

//MA VERSION :
let chiffre1=Number(prompt("Quel premier chiffre ? ")) // l'user rentre un nombre via le prompt qui sera affecté à la variable chiffre 1
let chiffre2=Number(prompt("Quel second chiffre ? ")) // pareil mais pour chiffre 2, les deux chiffres seront converti en numbers
let operateur=prompt("Choisissez l'opérateur") // pareil mais pour opérateur


if (operateur == "+"){ //si l'opérateur est +
    alert(chiffre1 + chiffre2); //fenêtre alert avec le résultat additionné
} else if (operateur == "-" ){ //pareil avec soustraction
    alert(chiffre1 - chiffre2);
} else if (operateur == "*"){ // multiplication
    alert(chiffre1 * chiffre2)
} else if(operateur =="/"){ // division
    if( chiffre2 === 0){ // si le chiffre 2 est strictement égal à 0
        alert("Impossible") // impossible
    }else{
       alert(chiffre1 / chiffre2)
    }
}else{
    alert("Opérateur inconnu") //s'affiche si l'opérateur est inconnu
}





//Version sans BOM:
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



//DOM : Document Object Model 

 // window.document ou document ->
 
