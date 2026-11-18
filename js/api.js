export const BASE_URL = `http://localhost:3000/creatures`;
export async function getData() {

    const res = await fetch(BASE_URL);
    if (!res.ok) {
        throw new Error("Erreur lors de récupération");
    }
    let data = await res.json();
    return data;


};

// export async function filterData(type){
//     let url=BASE_URL;
//     if(type!=="Tous"){
//         url+=`?type=${type}`
//     }
//     let res=await fetch(url);
//     if(!res.ok){
//         throw new Error("Erreur de api")
//     }
//     let data=await res.json();
//     return data;
// }

export async function rechercheData(filter,text){
     let url = BASE_URL;
    if(filter==="Tous" && text==="")
    {
        return await getData()
    }
    if (filter !== "Tous") {
        url += `?type=${filter}`;
    }
    if(text!=="")
    {
        url+= filter !=="Tous"?"&":"?"
        url+=`name_like=${text}`
        
    }
 
  

    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Erreur ${res.status}`);
    }

    return await res.json();
   
}


