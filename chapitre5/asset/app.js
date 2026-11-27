'use strict'

const conteneurPokemon = document.querySelector('#mes-pokemons');

// Call API avec fetch

function creerCarte(){
const idPokemon = Math.floor(Math.random()*1025)+1
const url = `https://pokeapi.co/api/v2/pokemon-form/${idPokemon}/`;
const copie = document.querySelector("#carte").content.cloneNode(true);
const carte = copie.querySelector('.card');
conteneurPokemon.appendChild(copie);




fetch(url)
  .then(response => response.json())
  .then(data => {
    const img = carte.querySelector('img');
    img.src = data.sprites.other["official-artwork"].front_default;

    console.log(data);

    const cardTitle = carte.querySelector('.card-title');
   
    
    const url2 =`https://pokeapi.co/api/v2/pokemon-species/${idPokemon}/`
    fetch(url2)
      .then(response => response.json())
      .then(data_sub => {
        cardTitle.textContent = data_sub.names[4].name;
        const paragraphe = carte.querySelector("p")
        const description = data_sub.flavor_text_entries.find(e =>e.language.name==="fr") 
        paragraphe.textContent = description.flavor_text;
        const boutton = carte.querySelector(".btn-solid");
        
        let nomActuel = data_sub.name
        
        fetch(data_sub.evolution_chain.url)
          .then(response => response.json())
          .then(data_evolution => {

          if (data_evolution.chain.species.name === data_sub.name) {
            if(data_evolution.chain.evolves_to.length === 0){
                 boutton.disabled = true
                 }
               
            } else if (data_evolution.chain.evolves_to[0].species.name === data_sub.name) {
                if(data_evolution.chain.evolves_to[0].evolves_to.length === 0){
                      boutton.disabled = true
                }
            } else {
               boutton.disabled = true
              }
          
           
          
          

          })



        boutton.addEventListener("click", ()=>{
        
          fetch(data_sub.evolution_chain.url)
           .then(response => response.json())
           .then(data_evolution => {
            
          if (data_evolution.chain.species.name === nomActuel) {
            if (data_evolution.chain.evolves_to.length > 0) {
                 const url3 = data_evolution.chain.evolves_to[0].species.url
                 const id = url3.split("/")[6]
                 nomActuel = data_evolution.chain.evolves_to[0].species.name
                 const url4 =`https://pokeapi.co/api/v2/pokemon/${id}/`
                if(data_evolution.chain.evolves_to[0].evolves_to.length === 0){
                  boutton.disabled = true
                }


              fetch(url4 )
               .then(response => response.json())
               .then(data_espece => {
               img.src=data_espece.sprites.other["official-artwork"].front_default;
                  });

              fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
              .then(response => response.json())
              .then(data_pok => {
               cardTitle.textContent = data_pok.names[4].name;
               const description = data_pok.flavor_text_entries.find(e =>e.language.name==="fr") 
               paragraphe.textContent = description.flavor_text;

              })
               } else {
                    console.log("n'évolue pas")
            }
            } else if (data_evolution.chain.evolves_to[0].species.name === nomActuel) {
                  if (data_evolution.chain.evolves_to[0].evolves_to.length > 0) {
                      const url5 = data_evolution.chain.evolves_to[0].evolves_to[0].species.url
                      const id = url5.split("/")[6]
                      nomActuel = data_evolution.chain.evolves_to[0].evolves_to[0].species.name
                      boutton.disabled = true
                      const url4 =`https://pokeapi.co/api/v2/pokemon/${id}/`


                    fetch(url4 )
                    .then(response => response.json())
                    .then(data_espece => {
                    img.src=data_espece.sprites.other["official-artwork"].front_default;
                        });

                    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
                    .then(response => response.json())
                    .then(data_pok => {
                    cardTitle.textContent = data_pok.names[4].name;
                    const description = data_pok.flavor_text_entries.find(e =>e.language.name==="fr") 
                    paragraphe.textContent = description.flavor_text;

              })
                 } else {
                      console.log("n'évolue pas")
            }
             } else {
                console.log("n'évolue pas")
          }
              
          })
        });
     
    })
   

    const typesList = carte.querySelector('ul');
       data.types.forEach((typeInfo) => {
       fetch(typeInfo.type.url)
        .then(response => response.json())
        .then(data_sub => {
          typesList.innerHTML += `<li>${data_sub.names[3].name}</li>`;
          });
    
    

    });
  
  
  });

}

for (let i=0; i<10; i++){
  creerCarte()
}