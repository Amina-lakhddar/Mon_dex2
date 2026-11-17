export const BASE_URL = "http://localhost:3000/creatures";
export async function getData() {

    const res = await fetch(BASE_URL);
    if (!res.ok) {
        throw new Error("Erreur lors de récupération");
    }
    let data = await res.json();
    return data;


}
