import { BASE_URL, getData, rechercheData} from "./api.js";
import { section_article, afficher, formatNumero, afficher_error} from "./ui.js";

// Afficher creatures
try {
    section_article.innerHTML=`<p class="flex text-3xl justify-center items-center bg-orange-500 text-white"> Chargement...</p>`;
    let data = await getData();
    section_article.innerHTML="";
    afficher(data);
} catch (e) {
    afficher_error();
}

// filter by type

    let filtre=document.getElementById("filters")
    // let fitContent=filtre.textContent.trim()
    let search=document.getElementById("search")
     let filterSelected="Tous"
    filtre.addEventListener("click",async(e)=>{
     if(e.target.tagName==="BUTTON"){
            section_article.innerHTML=`<p class="flex text-3xl justify-center items-center bg-orange-500 text-white"> Chargement...</p>`;
            filterSelected=e.target.textContent

            let serContent=search.textContent
            let data =await rechercheData(filterSelected,serContent);
            afficher(data);
        }
    });
    search.addEventListener("input",async()=>{
           let serContent=search.value.trim()
            let data= await rechercheData(filterSelected,serContent)
             afficher(data);
        
        
    });
