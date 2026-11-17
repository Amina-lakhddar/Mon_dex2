import { BASE_URL, getData } from "./api.js";
import { section_article, afficher, formatNumero, afficher_error } from "./ui.js";
try {
    section_article.innerHTML=`<p class="flex text-3xl justify-center items-center bg-orange-500 text-white"> Chargement...</p>`
    let data = await getData();
    section_article.innerHTML="";
    afficher(data)
} catch (e) {
    afficher_error();
}

