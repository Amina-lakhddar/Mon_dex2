import { BASE_URL, getData, rechercheData , afficherDetaill} from "./api.js";
import { section_article, afficher, formatNumero, afficher_error,detail, panneau_detail} from "./ui.js";
import { souvegardeFiltre, lireFiltre } from "./storage.js";


let btns = document.querySelectorAll(".chip");
let serContent = "";
console.log(btns)
// Afficher creatures
let filterSelected;
try {
    section_article.innerHTML = `<p class="flex text-3xl justify-center items-center bg-orange-500 text-white"> Chargement...</p>`;
    // let data = await getData();
    section_article.innerHTML = "";
    filterSelected = lireFiltre();
    btns.forEach(async (item) => {
        if (item.textContent === filterSelected) {
            let data = await rechercheData(filterSelected, serContent);
            afficher(data);
        }
    })
    // afficher(data);r
} catch (e) {
    afficher_error();
}
// console.log(await rechercheData("Feu", "Dra"))
// filter by type
let filtre = document.getElementById("filters")
// let fitContent=filtre.textContent.trim()
let search = document.getElementById("search")
// let filterSelected=JSON.parse(localStorage.getItem("filterSelected"));
filtre.addEventListener("click", async (e) => {
    if (e.target.tagName === "BUTTON") {
        section_article.innerHTML = `<p class="flex text-3xl justify-center items-center bg-orange-500 text-white"> Chargement...</p>`;
        filterSelected = e.target.textContent
        souvegardeFiltre(filterSelected);
        serContent = search.textContent
        let data = await rechercheData(filterSelected, serContent);
        afficher(data);

    }
});
search.addEventListener("input", async () => {
    let serContent = search.value.trim()
    let data = await rechercheData(filterSelected, serContent)
    afficher(data);


});

let order=document.getElementById("orderBy");
order.addEventListener('change',async ()=>{
    let data=await rechercheData(filterSelected, "",order.value);
    afficher(data)
})




section_article.addEventListener('click',async(e)=>{
    let article=e.target.closest("article");
    let id_creature=article.dataset.id;
    try{
        panneau_detail.innerHTML=`<p class="flex text-3xl justify-center items-center bg-orange-500 text-white"> Chargement...</p>`;
        let creature=await afficherDetaill(id_creature);
        detail(creature)
    }catch(e){
       panneau_detail.innerHTML="Créature introuvable " 
    }
})
