import { BASE_URL, getData, rechercheData , getCreature, ajouterCreature} from "./api.js";
import { section_article, afficher, formatNumero, afficher_error,detail, panneau_detail, 
    formulaire,verifierFormulaire,valider_id,valider_name,valider_stat1,valider_stat2,valider_stat3,
    valider_image,valider_description,id,nom,stat1,stat2,stat3,image,description,
    enregistrerBrouillon,afficherBrouillon,
    remplirFormulaire

} from "./ui.js";
import { souvegardeFiltre, lireFiltre } from "./storage.js";


let btns = document.querySelectorAll(".chip");
let serContent = "";
// console.log(btns)
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
    afficherBrouillon();
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
        let creature=await getCreature(id_creature);
        detail(creature)
    }catch(e){
       panneau_detail.innerHTML="Créature introuvable " 
    }
})


//Validation id :

id.addEventListener("input",function(event){
    if(event.target.tagName==="INPUT"){
        valider_id()
    }
  
  });
  // Validation name :

  nom.addEventListener("input",function(event){
    if(event.target.tagName==="INPUT"){
        valider_name()
    }
  });

  // Validation statistique 1 :
  stat1.addEventListener("input",function(event){
    if(event.target.tagName==="INPUT"){
        valider_stat1()
    }
    
  });

  // Validation statistique 2 :
  stat2.addEventListener("input",function(event){
    if(event.target.tagName==="INPUT"){
        valider_stat2()
    }
  });

  // Validation statistique 3 :
  stat3.addEventListener("input",function(event){
    if(event.target.tagName==="INPUT"){
        valider_stat3();
    }
  });

  // Validation image :
  image.addEventListener("input",function(event){
    if(event.target.tagName==="INPUT"){
        valider_image()
    }
    
  });

  // Validation description :
  description.addEventListener("input",function(event){
    if(event.target.tagName==="TEXTAREA"){
        valider_description()
    }
  });


let inputs=formulaire.querySelectorAll("input , textarea , select");
inputs.forEach((input)=>{
    input.addEventListener("input",enregistrerBrouillon)
})

formulaire.addEventListener("submit",async function(event){
    event.preventDefault();
    verifierFormulaire();
    
  });


  section_article.addEventListener("click",async (e)=>{
    if(e.target.dataset.action==="modifier"){
        let id=e.target.dataset.id;
        // console.log(id)
        let creature=await getCreature(id);
        console.log(creature)
        remplirFormulaire(creature)
    }
  })


  
