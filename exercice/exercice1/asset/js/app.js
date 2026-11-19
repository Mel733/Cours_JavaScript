"use strict"

//Voir app.js du chapitre 2 pour commentaires et explications:

function calcul (a, b , operateur){
    if (typeof a !== "number" || typeof b !== "number"){
        console.error("Erreur de typage");
        return
    }

    switch(operateur){
        case "+":
           console.log(a + b)
           break;
        case "-":
            console.log(a-b)
            break;
        case "*":
            console.log(a * b)
            break;
        case "/":
            //structure conditionnelle ternaire : prédicat, afficchage, else
            b === 0 ? console.error("Division impossible"): console.log(a/b)
            break;
        default:
            console.error("Opérateur inconnu")

    }
}



calcul(23, 34, "+"); //appelle la fonction avec des valeurs définies
calcul (23, 34, "-");
calcul (23, 34, "/");
calcul (23, 34, "*");
calcul (23, 0, "/");
calcul (23, 34,"£");
calcul(2, "VVV", "+");



//MA VERSION :

//  const calcul = function (a, b, operateur){
//     if (operateur == "+"){
//         return a + b
//     } else if (operateur == "-"){
//        return a - b
//     } else if (operateur == "*"){
//         return a * b
//     } else if (operateur == "/"){
//         if (b == 0){
//             console.error("Diviosn par 0 impossible")
//         }
//         return a / b
//     } else {
//         console.error("Opérateur inconnu")
//     }
// }


