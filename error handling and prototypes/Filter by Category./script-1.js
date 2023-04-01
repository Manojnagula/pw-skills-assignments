function filterproducts(products){
    return function(category){
        return products.filter(product => product.category === category);
    }
}


    
    const products = [
             { name: 'Product 1', category: 'Electronics' },
             { name: 'Product 2', category: 'Books' },
             { name: 'Product 3', category: 'Clothing' },
             { name: 'Product 4', category: 'Electronics' }
         ];


const filterByElectronics = filterproducts(products);
const filterelectronics = filterByElectronics("Electronics");
console.log("electronic products are:", filterelectronics);


