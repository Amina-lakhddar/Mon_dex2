import { BASE_URL, getData, filterData} from "./api.js";
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
try {
    let filtre=document.getElementById("filters");
    filtre.addEventListener("click",async(e)=>{
        if(e.target.tagName==="BUTTON"){
            section_article.innerHTML=`<p class="flex text-3xl justify-center items-center bg-orange-500 text-white"> Chargement...</p>`;
            console.log("hello")
            let data =await filterData(e.target.textContent);
            console.log(data)
            afficher(data);
        }
    })
}catch(e){
    afficher_error()
}
