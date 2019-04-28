const validation = require('../validation');
const express = require('express');
const router = express.Router();





const products = [
    {id:1, name:'product1'},
    {id:2, name:'product2'},
    {id:3, name:'product3'}
];






router.post('/api/add-products', (req, res)=>{
    //input validation
   //const result = validation(req.body);
    const { error } = validation(req.body);
    if(error) return res.status(400).send(error.details[0].message)

    const product = {
        id: products.length + 1,
        name: req.body.name
    };
    products.push(product);
    res.send(`The prodcut of this (ID : ${product.id}) is = `+ product.name);
});

module.exports = router;


