import { doc, getDoc, getFirestore, collection, query, where, getDocs, addDoc } from "firebase/firestore";


const products = [
    {id: "1", name: "Hamburguesa Barbacoa", price: 1500, category: "burgers", image: "../public/hamburguesa-barbacoa.jpg"},
    {id: "2", name: "Hamburguesa Panceta Crujiente", price: 1800, category: "burgers", image: "../public/hamburguesa-panceta.jpg"},
    {id: "3", name: "Hamburguesa Recargada Cheddar", price: 2000, category: "burgers", image: "../public/hamburguesa-picante.webp"},
    {id: "4", name: "Pancho Picante", price: 500, category: "hotdogs", image: "../public/pancho-picante.jpg"},
    {id: "5", name: "Pancho Completo", price: 600, category: "hotdogs", image: "../public/pancho-completo.webp"},
    {id: "6", name: "Pancho Comun", price: 200, category: "hotdogs", image: "../public/pancho-comun.webp" },
]



export const getProduct = (id) =>{
    return new Promise((resolve, reject ) => {
        const db = getFirestore();

        const itemDoc = doc(db, "items", id);

        getDoc(itemDoc)
        .then((doc) => {
            if (doc.exists()) {
                resolve({ id: doc.id, ...doc.data() });
            } else {
                resolve(null)
            }
        })
        .catch((error) => {
            reject(error)
        })
    })
}

export const getProducts = (categoryId) => {
    return new Promise ((resolve) => {
        const db = getFirestore();

        const itemCollection = collection(db, "items");

        let q
        if (categoryId) {
            q = query(itemCollection, where("category", "==", categoryId));
        } else {
            q = query(itemCollection)
        }
        getDocs(q)
        .then((querySnapshot) => {
            const products = querySnapshot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()};
            });
            resolve(products);
        })
        .catch((error) => {
            reject(error)
        })

    });
}