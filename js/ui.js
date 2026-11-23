import { ajouterCreature, modifierCreature } from "./api.js";
import {supprimerBrouillon , lireBrouillon, souvegardeBrouillon } from "./storage.js";

/** 1 → "#001" */
export const formatNumero = (id) => "#" + String(id).padStart(3, "0");

// 1. AFFICHAGE
export let section_article=document.getElementById("grid");
export function afficher(creatures){
    section_article.innerHTML=creatures.map(function(creature){
        return`<article data-id=${creature.id} class="flex flex-col gap-3  h-100 rounded-card w-[80%] bg-white border-2 border-orange-500 p-3 pb-4 transition-transform duration-300 hover:-translate-y-1 lg:w-[30%]">
          <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
            <img src=${creature.image} alt="" class="img_card">
            <span class="span-card">${formatNumero(creature.id)}</span>
          </div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">${creature.name}</h3>
            <span class="rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">${creature.type}</span>
          </div>
          <p class="text-transition-transform duration-300 hover:-translate-y-1sm text-muted">${creature.level}</p>
          <button
              type="button"
              class="btn-outline"
              data-action="ajouter"
              data-id="${creature.id}">
              Ajouter à l'équipe
          </button>
          <button
              type="button"
              class="btn-outline"
              data-action="modifier"
              data-id="${creature.id}">
              Modifier
          </button>
        </article>`
        
    })
};


export function afficher_error(){
    section_article.innerHTML="";
    section_article.innerHTML=`<p class="bg-orange-200 text-red-600 text-3xl">Impossible de charger les articles. Le serveur ne répond pas. Veuillez réessayer plus tard.</p>`;
};


// function Detaill 
export let panneau_detail=document.getElementById("detail");
export function detail(creature){
  // let liste_article =document.getElementById("grid");
  // console.log(liste_article.textContent);
  
      return panneau_detail.innerHTML=`<div class="flex items-center justify-between">
            <span class="font-mono text-sm text-ink">${creature.id} · Détail</span>
            <button type="button" aria-label="Fermer le détail" class="btn-outline w-11 px-0">✕</button>
          </div>
          <div class="flex h-48 items-center justify-center rounded-2xl bg-brand-light">
            <img src="${creature.image}" alt="" class="img_card">
          </div>
          <div class="flex items-center justify-between">
            <h2 class="font-display text-3xl font-extrabold text-orange-700">${creature.name}</h2>
            <span class="rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">${creature.type}</span>
          </div>
          <p class="text-gray-700">${creature.description}
          </p>
          <div class="flex flex-col gap-2 text-sm">
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold text-orange-700">PV</span><span
                class="h-3 rounded-full bg-ground"><span
                  class="block h-3 w-[30%] rounded-full bg-orange-500" style="width: ${creature.stats.hp}%"></span></span><span
                class="text-right font-mono">${creature.stats.hp}</span></div>
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold text-orange-700">Attaque</span><span
                class="h-3 rounded-full bg-ground"><span
                  class="block h-3 w-[33%] rounded-full bg-orange-500" style="width: ${creature.stats.attack}%"></span></span><span
                class="text-right font-mono">${creature.stats.attack}</span></div>
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold text-orange-700">Défense</span><span
                class="h-3 rounded-full bg-ground"><span
                  class="block h-3 w-[43%] rounded-full bg-orange-500" style="width: ${creature.stats.defence}%"></span></span><span
                class="text-right font-mono">${creature.stats.defence}</span></div>
          </div>
          <button type="button" class="btn-primary">Ajouter à l'équipe</button>`
      
   
}


// validation des inputs du formulaire :
export let formulaire=document.querySelector("#creature-form");
  let regexId=/^\d{3}$/;
  let regexNom=/^[A-Za-zÀ-ÿ0-9][A-Za-zÀ-ÿ0-9 .'-]{1,29}$/;
  let regexStats=/^\d{1,3}$/;
  let regexImage=/^https:\/\/\S+\.(png|jpe?g|webp|gif)$/i;
  let regexDescription=/^[\s\S]{10,200}$/;


export let id=document.getElementById("id");
export let nom=document.getElementById("name");
export let stat1=document.getElementById("stat1");
export let stat2=document.getElementById("stat2");
export let stat3=document.getElementById("stat3");
export let image=document.getElementById("image");
export let description=document.getElementById("description");
export let type=document.getElementById("type");
export let level=document.getElementById("level");



  // valider input id 
  export function valider_id(){
    let message=document.getElementById("error-message-id");
      if(regexId.test(id.value)){
        id.classList.remove("error");
        id.classList.add("success");
         
        message.textContent = "Numéro valide !";

        message.classList.remove("message-error");
        message.classList.add("message-success");

        return true;

      }else {
        id.classList.remove("success");
        id.classList.add("error");

        message.textContent = "Numéro invalide !";

        message.classList.remove("message-success");
        message.classList.add("message-error");

        return false
      }
  }




export function valider_name(){
  let message=document.getElementById("error-message-name")
      if(regexNom.test(nom.value)){
        nom.classList.add("success");
        nom.classList.remove("error");
        message.textContent="Nom Valide !";
        message.classList.remove("message-error");
        message.classList.add("message-success");
        return true;
      }else{
        nom.classList.remove("success");
        nom.classList.add("error");

        message.textContent="Nom Invalide !";

        message.classList.remove("message-success");
        message.classList.add("message-error");

        return false;
      }
};


// valider input statistique 1
export function valider_stat1(){
  let message=document.getElementById("error-message-stat1")
  if(regexStats.test(stat1.value)){
    stat1.classList.add("success");
    stat1.classList.remove("error");

    message.textContent="Statistique valide !";

    message.classList.add("message-success");
    message.classList.remove("message-error");
    return true;
  }else{
    stat1.classList.remove("success");
    stat1.classList.add("error");

    message.textContent="Statistique invalide !";

    message.classList.remove("message-success");
    message.classList.add("message-error");
    return false;
  }
};


// valider input statistique 2
export function valider_stat2(){
  let message=document.getElementById("error-message-stat2");
      if(regexStats.test(stat2.value)){
        stat2.classList.add("success");
        stat2.classList.remove("error");
      
        message.textContent="Statistique valide !";

        message.classList.add("message-success");
        message.classList.remove("message-error");
        return true;
      }else{
        stat2.classList.remove("success");
        stat2.classList.add("error");

        message.textContent="Statistique invalide !";

        message.classList.remove("message-success");
        message.classList.add("message-error");
        return false;
      }
};



//valider input statistique 3
export function valider_stat3(){
  let message=document.getElementById("error-message-stat3")
    
      if(regexStats.test(stat3.value)){
        stat3.classList.add("success");
        stat3.classList.remove("error");

        message.textContent="Statistique valide !";

        message.classList.add("message-success");
        message.classList.remove("message-error");

        return true;
      }else{
        stat3.classList.remove("success");
        stat3.classList.add("error");

        message.textContent="Statistique invalide !";

        message.classList.remove("message-success");
        message.classList.add("message-error");

        return false ;
      }
};



// valider input image 
export function valider_image(){
  let message=document.getElementById("error-message-image")
      if(regexImage.test(image.value)){
        image.classList.add("success");
        image.classList.remove("error");

        message.textContent="Image valide !";

        message.classList.add("message-success");
        message.classList.remove("message-error");

        return true;
      }else{
        image.classList.remove("success");
        image.classList.add("error");

        message.textContent="Image invalide !";

        message.classList.remove("message-success");
        message.classList.add("message-error");

        return false;
      }
};



// valider input description

export function valider_description(){
  let message=document.getElementById("error-message-description");
      if(regexDescription.test(description.value)){
        description.classList.add("success");
        description.classList.remove("error");

        message.textContent="Description valide !";

        message.classList.add("message-success");
        message.classList.remove("message-error");

        return true;
      }else{
        description.classList.remove("success");
        description.classList.add("error");

        message.textContent="Description invalide !";

        message.classList.remove("message-success");
        message.classList.add("message-error");

        return false;
      }
}

// fonction de validation du formulaire 
export let btnSubmit = document.querySelector("#btn");
let id_creature=null;

export function verifierFormulaire() {
    if (
        valider_id() && valider_name() && valider_stat1() && valider_stat2() && valider_stat3()
         && valider_image() && valider_description()
    ) {
        
        
        let nouvelleCreature = {
            id: id.value,
            name: nom.value,
            type: type.value,
            level: level.value,
            stats: {
                hp: Number(stat1.value),
                attack: Number(stat2.value),
                defence: Number(stat3.value)
            },
            image: image.value,
            description: description.value
        };
        if(id_creature!==null){
         modifierCreature(id_creature,nouvelleCreature)
        }
        else{
          ajouterCreature(nouvelleCreature);
        }
        supprimerBrouillon();
        formulaire.reset();
    } 
}



// fonction pour enregistrer le brouillon du formulaire
export function enregistrerBrouillon(){
  let brouillon={
    id:id.value,
    name:nom.value,
    type:type.valu,
    level:level.value,
    hp:stat1.value,
    attack:stat2.value,
    defence:stat3.value,
    image:image.value,
    description:description.value
  };
  souvegardeBrouillon(brouillon)
};


// fonction pour reafficher les valeurs des input dans le formulaire
export function afficherBrouillon(){
  let brouillon=lireBrouillon();
  if(brouillon){
    id.value=brouillon.id;
    nom.value=brouillon.name;
    type.value=brouillon.type;
    level.value = brouillon.level;
    stat1.value = brouillon.hp;
    stat2.value = brouillon.attack;
    stat3.value = brouillon.defence;
    image.value = brouillon.image;
    description.value = brouillon.description;
  }
}

// fonction remplir le formulaire pour modifier une creature
export function remplirFormulaire(creature){
  id_creature=creature.id;


  id.value=creature.id;
  nom.value=creature.name;
  type.value=creature.type;
  level.value = creature.level;
  stat1.value = creature.stats.hp;
  stat2.value = creature.stats.attack;
  stat3.value = creature.stats.defence;
  image.value = creature.image;
  description.value = creature.description;

  btnSubmit.textContent="Modifier";
}
