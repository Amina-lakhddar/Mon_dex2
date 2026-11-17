export const BASE_URL = `http://localhost:3000/creatures`;
export async function getData() {

    const res = await fetch(BASE_URL);
    if (!res.ok) {
        throw new Error("Erreur lors de récupération");
    }
    let data = await res.json();
    return data;


};

export async function filterData(type){
    let url=BASE_URL;
    if(type!=="Tous"){
        url+=`?type=${type}`
    }
    let res=await fetch(url);
    if(!res.ok){
        throw new Error("Erreur de api")
    }
    let data=await res.json();
    return data;
}
