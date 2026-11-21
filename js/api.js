export const BASE_URL = `http://localhost:3000/creatures`;
export async function getData() {

    const res = await fetch(BASE_URL);
    if (!res.ok) {
        throw new Error("Erreur lors de récupération");
    }
    let data = await res.json();
    // return data;
    console.log(data)


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

export async function rechercheData(filter, text,order) {
    let url = BASE_URL;
    if (filter === "Tous") {
        url += `?`;
    }
    if (filter !== "Tous") {
        url += `?type=${filter}`;
    }
    if (text !== "") {
        url += filter !== "Tous" ? "&" : "?"
        url += `name_like=${text}`

    }

    url += `&_sort=name&_order=${order}`;
    console.log(url)

    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Erreur ${res.status}`);
    }

    return await res.json();

};

export async function afficherDetaill(id){
 let url=BASE_URL+`/${id}`;
 let res=await fetch(url);

 if(!res.ok){
    throw new Error(`Erreur ${res.status}`)
 }
 let data=await res.json();
 return data
};
console.log(await afficherDetaill(1));


// foction ajouter un creature 
export async function ajouterCreature(creature){
    let res=await fetch(BASE_URL,{
        method:"POST",
        headers:{ "Content-Type": "application/json"},
        body: JSON.stringify(creature),
    })
    let data = await res.json();
    return data;
}


