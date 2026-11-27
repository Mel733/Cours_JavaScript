'use strict' 
const date = new Date() //pour la date
const jour = date.getDate()
const mois = date.getMonth() + 1
const annee = date.getFullYear()

class Tache { //classe tache
    constructor(id,texte){ //son constructeur pour ses instances
        this.id= id,
        this.texte= texte,
        this.statut = "en-cours"
        this.jour = jour,
        this.mois = mois,
        this.annee = annee
    }

}



class ToDoList{ //la classe todoList
    constructor(){
    
     this.nouvelleTache = document.getElementById("newTask"); //son constructor contient les variables avec les id des éléments HTML pour le DOM
     this.bouttonAjouter = document.getElementById("addBtn");
     this.filtrerTout = document.getElementById("filterAll");
     this.filtreEncours = document.getElementById("filterPending");
     this.filtreTermine = document.getElementById("filterCompleted");
     this.liste = document.getElementById("taskList");
     this.tacheListe = this.charger(); //la liste appelle la méthode charger
     this.prochaineId = 1
     this.filtreActuel = "tout"
     this.Afficher("tout")



     this.bouttonAjouter.addEventListener("click", ()=>{   //évènement clic pour les boutons
         this.AjouterTache()   //appelle la méthode ajouter tâche
         
     })

     this.filtrerTout.addEventListener("click",()=>{
        this.Afficher("tout")   //appelle la méthode afficher avec comme paramètre tout pour indiquer qu'on affiche tout
     })


     this.filtreEncours.addEventListener("click", ()=>{
        this.Afficher("en-cours")    //pareil mais tâches en cours
        
     })

     this.filtreTermine.addEventListener("click", ()=>{
        this.Afficher("terminé")   //tâche terminée
     })

   
    }
    




    sauvegarder(){
       localStorage.setItem('taches', JSON.stringify(this.tacheListe));//on met en json les éléments du tableaux
    }

    charger(){
       const taches = localStorage.getItem("taches") //on récupere les élément du tableau
        return taches ? JSON.parse(taches) : []; //si tache a une valeur, on convertit en JS, sinon on retourne un tableau vide
    }




    effacerTache(id){   //méthode pour effacer une tâche via l'id de la tâche
        if (confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
        const effacement = this.tacheListe.filter(t=>t.id !== id);   //on filtre le tableau en gardant toutes les tâches qui sont différentes de l'id qu'on veut supprimer
        this.tacheListe = effacement;   //on affecte la valeur dans le tableau, toutes les id sauf celui supprimé
        this.Afficher(this.filtreActuel)   //on appelle la méthode afficher pour remettre à jour
        this.sauvegarder() 
        }
    }


    
    estTermine(tache){    //méthode qui changera le statut d'une tâche en terminé
       tache.statut= "terminé";  //on change
       this.sauvegarder() //sauvegarde
       this.Afficher(this.filtreActuel)  //on appelle la méthode avec le filtre actuel en paramètre
     }





    Afficher(statut){   //fonction pour afficher les tâches avec le statut comme paramètre
      
    let tachesAfficher;   //variable let qui changera de valeur
    this.filtreActuel = statut   //le filtre actuel est = au statut qu'on renseigne quand on appelle la méthode

    if (statut === "tout") {   //si le statut c'est tout
        tachesAfficher = this.tacheListe   //la variable sera affectée avec tous les éléments du tableau
    } else if(statut === "terminé") {   //si c'est terminé 
        tachesAfficher = this.tacheListe.filter(t =>t.statut ==="terminé")   //pareil sauf qu'on filtre le tableau pour avoir les tâches avec le statut terminé
    } else{                                       //fonction fléchée, avec t comme paramètre
        tachesAfficher = this.tacheListe.filter(t =>t.statut ==="en-cours") //sinon les tâches en cours
    }

    const maListe = document.createElement("ul")   //on crée la variable maListe qui sera affectée avec un élément ul créé sur le document
    this.liste.textContent = ""   //la liste (l'élément task-list) est vidée pour éviter les doublons
    this.liste.appendChild(maListe)   //on ajoute à la liste, maListe en tant qu'enfant

    for (const tache of tachesAfficher) {    //pour chaque tâche de tachesAfficher
        const e = document.createElement("li")   //la variable élément sera affectée avec un élément li créé sur le document
        e.classList.add("task-item")   //on ajoute une classe task-item pour le CSS
        e.textContent = `ID : ${tache.id} | Texte : ${tache.texte} | Statut : ${tache.statut} | Date Création : ${tache.jour} / ${tache.mois} / ${tache.annee}` 
        //on remplit chaque élément avec un texte avec les propriétés de la tâche 
        maListe.appendChild(e)  //puis on ajoute l'élément en tant qu'enfant de maListe

        if(tache.statut ==="terminé"){    //si le statut de la tâche est terminé
            e.classList.add("completed")    //on ajoute à l'élément la class completed pour le css
        }
        
        if(tache.statut ==="en-cours"){   //si le statut est en cours
            const modifier = document.createElement("button");   //on va créer un bouton sur le document qui sera affecté à une variable
            modifier.textContent="Cliquer pour marquer la tâche comme terminée"   //on remplit le bouton avec le texte
            e.appendChild(modifier)   //on ajoute le bouton comme enfant de l'élément donc de la tâche en cours


            modifier.addEventListener("click", ()=>{   //évènement du bouton modifier
                this.estTermine(tache)   //on appelle la méthode estTermine avec comme paramètre la tâche elle-même
            })
        }
   



        const effacer = document.createElement("button")   //pareil pour modifier mais supprimer et pour toutes les tâches
         effacer.textContent="Effacer la tâche"
         e.appendChild(effacer)


    effacer.addEventListener("click", ()=>{   //évènement click pour effacer
        this.effacerTache(tache.id)   //on appelle la méthode avec l'id de la tâche comme paramètre
    })

   
    }
}
    AjouterTache() {   //ajouter une tâche
        const text = this.nouvelleTache.value;   //la variable texte est affectée avec la valeur de l'input (nouvelleTache)
        if (text.trim()===""){   //si le champ est vide
            alert("Veuillez ne pas laisser vide")
            return   // on return, la méthode s'arrête
        }


       const tache = new Tache(   //la variable tache est une instance de Tache
       this.prochaineId ++,   //l'id augmente de 1
       text //et le texte renseigné est le texte de l'input
       //ce sont les deux propriétés attendues lors de la création d'un objet tâche
      );
      
      this.tacheListe.push(tache);   //on push la tâche dans le tableau
      this.sauvegarder();   //on suavegarde la nouvelle liste dans l'instance storage en appelant sauvegarder
      this.nouvelleTache.value ="" // on remet l'input vide
      this.Afficher("en-cours")
    }


   
}



const toDO = new ToDoList()   // on crée une instance ToDoList pour que ça fonctionne