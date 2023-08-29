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
        setTimeout(() => {
            const product = products.find((p) => p.id === id)

            if (product) {
                resolve(product)
            } else {
                reject('El producto no existe')
            }
        }, 1000)
    })
}

export const getProducts = (category) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            const productsFiltered = category
                ? products.filter(product => product.category === category) 
                : products;

            resolve(productsFiltered)
        }, 1000)
    });
}