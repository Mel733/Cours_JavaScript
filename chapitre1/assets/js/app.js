import { ready } from "./components/utils.js"; //importe la méthode ready dans utils.js

ready(()=>{ //fonction fléchée
//Tout le js qui sera écrit ne sera exécuté qu'une fois que le système est prêt pour son exécution
    console.log("Le dom est chargé ! ")

/**
 * Ceci est un commentaire JSDoc
 */

// 10 + 5 = expression (avec un opérateur pour donner un résultat)



//Les variables:
// const = variable avec valeur constante, la valeur ne peut pas être changée et doit être déclarée et initialisée en même temps
// let =  variable avec valeur qui peut changer plus tard
// var = rare d'utilisation

//exemples :
const prix = 19.5;
//prix =20.0 -> IMPOSSIBLE, déclenche une erreur dans la console et l'exécution se terminera

// avec let je peux déclarer une variable sans l'initialiser et ensuite lui affecter une valeur
let stock

// je peux l'initialiser ensuite en lui affectant une valeur
stock = 3

console.log(stock)

//et je peux changer la valeur à volonté
stock=23

console.log(prix) //affiche le prix dans la console
console.log(stock)


/*Règles de nommage des variables en JS :

Commencer par une lettre, _ ou $	
Contenir des lettres, chiffres, _ ou $	
Ne pas contenir d'espace	
Ne pas utiliser un mot réservé	
Respecter la casse (case-sensitive)	
Ne pas utiliser de caractères spéciaux ordinaires*/


//Les types :

//Représenter du texte : STRING
const prenom = "Mélodie"
const nom = "Robert"
const message = `Présentation : ${prenom} ${nom}` 
// Concaténation, équivalent d'un f string sur Python
console.log(message)

//Représenter un nombre : Number (entier et flottant)
const stockProduit = 3
const prixProduit = 30.5;
const remise = 2.5
const total = stockProduit * prixProduit - remise;
console.log(total)


//représenter un état binaire : Boolean
const estDispo = true;
const estCher = prixProduit > 25;

console.log("estDispo :", estDispo)
console.log("estCher: ", estCher)

//type 'null' et type 'undefined'
//null -> absence de valeur explicite
//undefined -> valeur non définie
let note = null;
let commentaire ; //par défaut undefined
console.log(note);
console.log(commentaire) //affiche undefined

console.log(12 + "3") // affiche 123
console.log(12 + Number("3")) // affiche 15, converti le 3 en Number

//observer le type d'une variable:
console.log("Type de la variable prenom : ", typeof prenom)
console.log("Type de la variable estDispo : ", typeof estDispo)
console.log("Type de la variable prixProduit : ", typeof prixProduit)
console.log("Type de la variable commentaire : ", typeof commentaire)

//Opérateur arithmétique :
// ** ->puissance de nombre */


//Opérateur de comparaison :
// == égalité en valeur
// === égalité en valeur et en type
// !== Différent de


//Opérateurs logiques :
//&& -> ET
// || -> OU
// ! -> Non

const peuxAcheter = prixProduit <0 && stockProduit > 0
console.log("peuxAchter : ", peuxAcheter)

// Les instructions conditionnelles, if..else
    //Prédicat toujours entre ( )
    if (stockProduit>0){
        console.log("Produit disponible");
    
    } else {
        console.log("Produit épuisé")
    }


    let prixLivre = 23;
    if (prixLivre<10){
        console.log("Petit prix")

    } else if (prixLivre <= 25){ //comme le elif en Python
        console.log("Prix moyen")

    } else{
        console.log("Prix élevé")
    }



    let nouveauPrixLivre = 18
    let stockageLivre = 3

    if (nouveauPrixLivre < 20 && stockageLivre >0){
        console.log("BONNE AFFAIRE")
    }else{
        console.log("Pas bonne affaire")
    }


 //les boucles
 //répéter n fois exactement : boucle "for" pour nombre de répétitions contrôlé, on sait combien de répétitions faire




 for(let i = 0; i <= 5; i++){ //i++ incrémentation automatique de 1
    // i commence à 0 et incrémente de 1 tant que i est de 5
    console.log("Tour de boucle 'for' : ", i)
 }

 //boucle while -> répéter tant qu'une condition reste vraie
 let compteur = 1
 while (compteur <= 3){
    console.log("tour de la boucle while :", compteur)
    compteur++

 }

 //boucle sur les éléments d'un tableau : boucle for ..of
 let tableau = [1,2,3,4,5]

for (const element of tableau){
    console.log ("élemnent du tableau :", element)
}

for (const [index, element] of tableau.entries()){ //méthode pour permettre de faire une liste itérable du tableau
    console.log("element du tableau : ", element, "son index :", index)

}


//Les tableaux
const titres = ["Dune", "1984", "Sapiens"];
console.log(titres[0]); //Affiche Dune
console.log(titres[3]); //Undefined car pas de livre
console.log(titres[titres.length - 1]); //affiche le dernier élément
console.log(titres.at(-1));  //affiche le dernier élément avec la méthode at()

//Modifier un élément du tableau
titres[1] = "Petit prince"; // remplace 1984 par Petit Prince
console.log(titres[1]); // Affiche Petit prince


//ajoute un élément à la fin  : .push()
titres.push("Le seigneur des anneaux");
console.log(titres);

//enlève le dernier élément du tableau : .pop
const recupDernierElement = titres.pop(); //variable pour afficher le titre supprimé
console.log ("recuperation du dernier élément:", recupDernierElement);
console.log(titres);

// savoir si une valeur exacte est présente dans le tableau : .includes()
console.log(titres.includes("Sapiens"));//affiche True car Sapiens est dans la liste


for (const livre of titres){
    console.log("element du tableau :", livre) //affiche les livres un par un avec la boucle for
}


for(const[index, livre] of titres.entries()){
    console.log("Element du livre :", livre, "son index : ", index ) //pareil mais ajoute l'index
}

for (let compteurLivre = 0; compteurLivre<=titres.length; compteurLivre ++){ //tant que le compteur est inférieur ou égal à la longueur du tableau
    console.log("Index :", compteurLivre, "Son titre : ", titres[compteurLivre]) //affiche chaque livre et son index
    //compteur livre sera incrémenté de 1 à chaque livre
}


// .map() -> parcourt le tableau, effectue un traitement sur chaque élément et range le résultat de chaque traitement dans un autre tableau.

const tableauDouble = tableau.map((element) =>{ //fonction fléchée avec map
    return element * 2 //chaque élément du tableau se multiplie par deux
})
console.log(tableauDouble)

//lorsque le bloc d'instructions de la fonction en paramètre ne comporte qu'un return, JS nous permet d'écrire en abrégé:
const DoubleTableau2 = tableau.map(nombre => nombre * 2);
//version d'une fonction abrégée seulement si un return, si plus .. faire fonction fléchée au-dessus
console.log(DoubleTableau2) 

//map() peut prendre 3 paramètres
//garde le tableau original
const tableauDouble3 = tableau.map((element, index, tabOriginal)=>{
    return element * 2;
})
console.log(tableauDouble3)

//reproduction du comportement de base à l'aide d'une boucle

const tableauDouble4 = []
for (const numero of tableau){
   tableauDouble4.push(numero * 2)
   
}
console.log("Tableau en Double : ",tableauDouble4)
console.log("tableau original :", tableau)


//filtrer un tableau : .filtrer()
// .filtrer() va conserver uniquement les éléments pour lesquels
//la fonction callback return true
//Les éléments sont rangés dans un nouveau tableau
// .filter() ne modifie pas le tableau d'origine


const pairs = tableau.filter((nombre)=>{
    return nombre % 2 == 0
})
console.log(pairs)

//écriture abrégée
const parir2 = tableau.filter(nombre => nombre % 2 == 0);
console.log(parir2)


//chaînage de méthodes:
//Je veux un tableau distinct de "tableau" qui contient le double des nombres pairs


const DoublePaire = tableau
    .filter(nombre => nombre % 2 == 0)
    .map(nombre => nombre * 2);
console.log(DoublePaire)


//reproduction de la méthode filter avec une boucle classique
const tableauDoublePair = []
for (const numero of tableau){
    if (numero % 2 === 0){
        tableauDoublePair.push(numero * 2)
    }
}
console.log("Double:", tableauDoublePair)


//réduction d'un tableau : .reduce()
// .reduce() parcourt les éléments et accumule progressivement un résultat
//.reduce() peut produire une chaîne ou même un autre tableau
// l'accumulateur peut être initialisé juste après le callback
// le callback est la fonction (acc, n) => { return acc + n } :
// tu la donnes à .reduce() (qui la rappelle à chaque élément du tableau) 
// pour qu’elle ajoute n à acc à chaque tour.
const totalTableau = tableau.reduce((acc, n) =>{
    return acc + n
}, 0) //initialise l'accumulateur à 0
console.log(totalTableau);


//écriture abrégée
const totalTableau2 = tableau.reduce((a, b)=>a + b, 0); //initialise l'accumulateur à 0
console.log(totalTableau2);

//pour infos, reduce() peut prendre les paramètres suivants:
const totalTableau3 = tableau.reduce((acc, element, index)=> acc + element, 0)
console.log(totalTableau3);

let acc = 0;
for (const element of tableau){
    acc += element; //incrémentation de l'élément dans acc
}
console.log(acc)



//Les fonctions
//ipo = Input Process Output

//Déclaration classique:
//possède son propre this
// peut être appelée avant sa déclaration

function addition (a, b){
    return a + b
}
console.log(addition(5, 10))


//fonction anonyme :
const soustraction = function (a, b){
    return a - b;
}
console.log(soustraction(10, 5))


//expression de fonction nommée:
// le nom addition est principalement accessible depuis l'intérieur de la fonction
//si besoin d'appel récursif par exemple
const calcul = function addition (a, b){
    return a + b;
}

//fonction fléchée (arrow function)
//ne possèdent pas leur propre this, mais celui de la fonction qui les englobe
const add = (a, b) =>{
    return a + b
}
// si le corps ne contient qu'un return on peut utiliser l'écriture abrégée
 const add2 = (a,b) => a + b;

 const carre = x => x * x;


 //fonction auto exécutée
 (function(){
    console.log("execution immédiate")
 })(); //première () contient la définition et la deuxième () dit "exécute-toi"


console.log(add2);//retourne et affiche  la définition de la fonction "a, b => a + b"


// fonction pure:
// une fonction qui, avec les mêmes paramètres, renvoie toujours le même résultat,
// et qui ne modifie rien en dehors d’elle
const additionPure = (a, b) => a + b;   // pure : additionPure(2, 3) donne toujours 5
console.log(additionPure(2,3))

//paramètres optionnels dans les fonctions
//donnez-lui une valeur par défaut (0) pour le rendre optionnel
const calculerRemise=(prix, remise= 0) => {
return prix - remise;
}

console.log(calculerRemise(200));
console.log(calculerRemise(260, 100))


});