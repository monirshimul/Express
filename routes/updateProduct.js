const validation = require('../validation');
const express = require('express');
const router = express.Router();



const products = [
    {id:1, name:'product1'},
    {id:2, name:'product2'},
    {id:3, name:'product3'}
];



router.put('/api/update/:proId', (req, res) =>{
    //product checking
   const product = products.find((products) => {
       return products.id === parseInt(req.params.proId)
    });
   if(!product) return res.status(404).send(`The Prodcut with given ID : ${req.params.proId} is not availabe....`);
    
    
//input validation
   //const result = validation(req.body);
   const {error} = validation(req.body);
   if(error) return res.status(400).send(error.details[0].message)


   product.name = req.body.name;
   res.send(`The updated prodcut of this (ID : ${req.params.proId}) is = `+ product.name);

});



module.exports = router;