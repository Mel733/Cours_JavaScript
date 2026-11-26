'use strict' 
const date = new Date()
const jour = date.getDate()
const mois = date.getMonth() + 1
const annee = date.getFullYear()

class Tache { //
    constructor(id,texte){
        this.id= id,
        this.texte= texte,
        this.statut = "en-cours"
        this.jour = jour,
        this.mois = mois,
        this.annee = annee
    }
    

   

}

class ToDoList{
    constructor(){
     this.nouvelleTache = document.getElementById("newTask");
     this.bouttonAjouter = document.getElementById("addBtn");
     this.filtrerTout = document.getElementById("filterAll");
     this.filtreEncours = document.getElementById("filterPending");
     this.filtreTermine = document.getElementById("filterCompleted");
     this.liste = document.getElementById("taskList");
     this.tacheListe = []
     this.prochaineId = 1
     this.filtreActuel = "tout"




     this.bouttonAjouter.addEventListener("click", ()=>{
         this.AjouterTache()
         
     })

     this.filtrerTout.addEventListener("click",()=>{
        this.Afficher("tout")
     })


     this.filtreEncours.addEventListener("click", ()=>{
        this.Afficher("en-cours")
        
     })

     this.filtreTermine.addEventListener("click", ()=>{
        this.Afficher("terminé")
     })

   
    }
    

    effacerTache(id){
        const effacement = this.tacheListe.filter(t=>t.id !== id);
        this.tacheListe = effacement;
        this.Afficher()
    }

    estTermine(){
       this.tache.statut = "terminé";
       this.Afficher()
     }





    Afficher(statut){
    let tachesAfficher;
    this.filtreActuel = statut

    if (statut === "tout") {
        tachesAfficher = this.tacheListe
    } else if(statut === "terminé") {
        tachesAfficher = this.tacheListe.filter(t =>t.statut ==="terminé")
    } else{
        tachesAfficher = this.tacheListe.filter(t =>t.statut ==="en-cours")
    }

    const maListe = document.createElement("ul")
    this.liste.textContent = ""
    this.liste.appendChild(maListe)

    for (const tache of tachesAfficher) {
        const e = document.createElement("li")
        e.classList.add("task-item")
        e.textContent = `ID : ${tache.id} | Texte: ${tache.texte} | Statut : ${tache.statut} | Date Création : ${tache.jour} / ${tache.mois} / ${tache.annee}`
        maListe.appendChild(e)

        if(tache.statut ==="terminé"){
            e.classList.add("completed")
        }
        
        if(tache.statut ==="en-cours"){
            const modifier = document.createElement("button");
            modifier.classList.add("modifier");
            modifier.textContent="Cliqué pour marqué la tache comme terminé"
            e.appendChild(modifier)


            modifier.addEventListener("click", ()=>{
                this.estTermine(tache.statut)
            })
        }
   



        const effacer = document.createElement("button")
         effacer.classList.add("effacer")
         effacer.textContent="Effacer la tâche"
         e.appendChild(effacer)


    effacer.addEventListener("click", ()=>{
        this.effacerTache(tache.id)
    })

   
    }
}
    AjouterTache() {
        const text = this.nouvelleTache.value;
        if (text.trim()===""){
            return
        }


       const tache = new Tache(
       this.prochaineId ++,
       text
      );
      
      this.tacheListe.push(tache);
      this.nouvelleTache.value =""
      console.log(this.tacheListe)
    }


   
}


const toDO = new ToDoList()
