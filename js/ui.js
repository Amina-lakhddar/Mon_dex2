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
