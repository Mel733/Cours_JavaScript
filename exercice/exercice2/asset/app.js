"use strict"
function randomColor(){
  const caractere = "0123456789ABCDEF" // variable constante avec tous les caractères d'une couleur en hexa
  let couleur = "#" //variable couleur qui changera et qui débute par #
  for(let i = 0; i<6; i++){ //boucle for avec i qui commence à 0, le prédicat si i<6 et l'incrémentation de i à chaque fin de tour de boucle
    let randomval =Math.floor(Math.random()*16) //variable random qui utilise un Math floor pour arrondir à l'entier inférieur, le Math random choisit aléatoirement entre 0(inclus) et 1(exclus) et qui fait *16
    console.log(randomval) //affiche dans la console le résultat
    couleur += caractere[randomval] //ajoute le caractère tiré aléatoirement grâce à randomval à la variable couleur

  }
  return couleur //retourne la couleur
  
}

setInterval(()=>{ //méthode intervalle
    document.body.style.background = randomColor() //on change le background de la page en appelant la fonction randomColor
}, 20) //l'intervalle a un délai de 1000 ms donc 1sec puis on rechange la couleur avec la fonction