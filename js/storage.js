export function souvegardeFiltre(filtre){
    localStorage.setItem("filtre",JSON.stringify(filtre));
};

export function lireFiltre(){
    return JSON.parse(localStorage.getItem("filtre" || "Tous"));
}


export function souvegardeBrouillon(brouillon){
    sessionStorage.setItem("brouillon",JSON.stringify(brouillon))
};

export function lireBrouillon(){
    return JSON.parse(sessionStorage.getItem("brouillon"));
};

export function supprimerBrouillon(){
    sessionStorage.removeItem("brouillon")
};