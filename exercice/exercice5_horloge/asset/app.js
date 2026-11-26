'use strict'

const trotteuse = document.querySelector(".trotteuse");
const grande_aiguille = document.querySelector(".grandeaiguille");
const petite_aiguille = document.querySelector(".petiteaiguille");



function clock(){
    
    const maintenant = new Date();   //crée une nouvelle instance date qui sera affectée à la constante
    const secondes = maintenant.getSeconds();   //on affecte les secondes de Date() dans secondes
    const minutes = maintenant.getMinutes();  //même chose pour minutes
    const heures = maintenant.getHours()      //même chose pour heures


    console.log(heures + ":" +  minutes + ":" + secondes)
     //les secondes et minutes avancent de six degrés (par seconde ou minute) tandis que les heures de 30 deg
    const angle_seconde = secondes * 6   //on calcule l'angle de seconde qui sera donné à la trotteuse, on calcule * 6 car 360 /60(60 secondes) = 6
    const angle_minutes = (minutes * 6) + (secondes * 0.1)//même chose pour minutes, même logique de calcul + les secondes * 0.1 car une minute = 6deg donc 6/60 = 0.1deg a chaque seconde pour les minutes
    const angle_heures = (heures * 30) + (minutes * 0.5) //calcul pour l'angle des heures avec heure modulo 12 puis * 30 + minutes * 0.5(0.5deg = 30/60) on calcule les degrés divisés par 60
    // les + rajoutent de la fluidité pour les heures et minutes, elles avancent jusqu'à leur prochaine minute ou heure sans un saut direct
    //les heures avancent de 0.5deg par minutes et les minutes avance de 0.1deg par secondes
    trotteuse.style.transform = `rotate(${angle_seconde}deg)`; //change la rotation selon la valeur de l'angle (en degrés)
    grande_aiguille.style.transform = `rotate(${angle_minutes}deg)`;
    petite_aiguille.style.transform = `rotate(${angle_heures}deg)`


}

clock();//appelle la fonction
setInterval(clock, 1000) //appelle la fonction toutes les secondes