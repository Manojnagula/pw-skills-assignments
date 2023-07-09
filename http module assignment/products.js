const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/JSON')

    if(req.url ==='/')
    {
        res.statusCode=200;
        res.end('welcome to men and women dummy store')

    }
    else if(req.url ==='/men')
    {   
        const men = getProducts('men',10);
        res.statusCode=200;
        res.end(JSON.stringify(men))

    }
    else if(req.url ==='/women')
    {   
        const women = getProducts('women',10);
        res.statusCode=200;
        res.end(JSON.stringify(women))

    }
    else
    {   
    
        res.statusCode=401;
        res.end('page not found');

    }

});

// creating products


function getProducts(category, count)
{
    const products = [];

for(let i = 1; i <= count;i++)
{
    const product = {
        id : i,
        name: `Product ${i}`,
        brand: 'ABC',
        price: 19.99,
        color: 'Blue',
        size: 'M',
        category: category,
    };
    products.push(product)
}
return products;
}

// starting the server

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`server started at the port ${PORT}`);
})
