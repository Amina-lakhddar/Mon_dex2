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
    // console.log(url)

    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Erreur ${res.status}`);
    }

    return await res.json();

};

export async function getCreature(id){
 let url=BASE_URL+`/${id}`;
 let res=await fetch(url);

 if(!res.ok){
    throw new Error(`Erreur ${res.status}`)
 }
 let data=await res.json();
 return data
};
// console.log(await getCreature(1));


// foction ajouter un creature 
export async function ajouterCreature(creature){
    let res=await fetch(BASE_URL,{
        method:"POST",
        headers:{ "Content-Type": "application/json"},
        body: JSON.stringify(creature),
    })
    if(!res.ok){
        let error=await res.text();
        throw new Error(error)
    }
    let data = await res.json();
    return data;
}


// fonction modifier un creature
 export async function modifierCreature(id,creature){
    let res=await fetch(`${BASE_URL}/${id}`,{
        method:"PUT",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(creature)
    });
    if(!res.ok){
        throw new Error("erreur lors de la modification")
    }
    let data=await res.json();
    return data;
 }


//  let nouvelleCreature = {
//     id: 2,
//     name: "amina",
//     type: "Plante",
//     level: "Niveau 16",
//     stats: {
//         hp: 60,
//         attack: 62,
//         defence: 63
//     },
//     image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//     description: "Le bourgeon sur son dos grandit et dégage un parfum agréable avant sa floraison."
// };

// // let data=modifierCreature(2,nouvelleCreature)

// // console.log(await data)

