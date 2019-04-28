
const express = require('express');
const router = express.Router();



const products = [
    {id:1, name:'product1'},
    {id:2, name:'product2'},
    {id:3, name:'product3'}
];


router.get('/api/products', (req, res, next)=>{
    res.send(products);
});



router.get('/api/products/:productId', (req, res, next)=>{
    const product = products.find(products => products.id === parseInt(req.params.productId));
    if(!product) return res.status(404).send(`The Prodcut with given ID : ${req.params.productId} is not availabe....`);
    res.send(product.name);
});



module.exports = router;

