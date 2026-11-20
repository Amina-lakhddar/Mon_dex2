export function souvegardeFiltre(filtre){
    localStorage.setItem("filtre",JSON.stringify(filtre));
};

export function lireFiltre(){
    return JSON.parse(localStorage.getItem("filtre" || "Tous"));
}
