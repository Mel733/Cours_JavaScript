"use strict"
function RandomColor(){
  const caractere = "012356789ABCDEF" // variable constante avec tout les caractères d'une couleur en héxa
  let couleur = "#" //variable couleur qui changera et qui débute par #
  for(let i = 0; i<6; i++){ //boucle for avec i qui commence a 0, le prédicat si i<6n et l'incrémentation de i a chaque fin tour de boucle
    let randomval =Math.floor(Math.random()*16) //variable random qui utilise un Math floor pour arrondi au chiffre inférieur, le Math random choisi aléatoirement et qui fait *16
    console.log(randomval) //affiche dans la console le résulat
    couleur += caractere[randomval] //incrémente le caractere tiré aléatoire

  }
  return couleur
  
}

setInterval(()=>{
    document.body.style.background = RandomColor()
}, 1000)