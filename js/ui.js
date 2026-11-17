/** 1 → "#001" */
export const formatNumero = (id) => "#" + String(id).padStart(3, "0");

// 1. AFFICHAGE
export let section_article=document.getElementById("grid");
export function afficher(creatures){
    section_article.innerHTML=creatures.map(function(creature){
        return`<article class="flex flex-col gap-3  h-100 rounded-card w-[80%] bg-white border-2 border-orange-500 p-3 pb-4 transition-transform duration-300 hover:-translate-y-1 lg:w-[30%]">
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
}
