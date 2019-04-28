
const express = require('express');
const router = express.Router();



const products = [
    {id:1, name:'product1'},
    {id:2, name:'product2'},
    {id:3, name:'product3'}
];





router.delete('/api/delete/:proId', (req, res)=>{

    const product = products.find((products) => {
        return products.id === parseInt(req.params.proId)
     });
    if(!product) return res.status(404).send(`The Prodcut with given ID : ${req.params.proId} is not availabe....`);
     

    const index =  products.indexOf(product);
    products.splice(index, 1);
    res.send(products);
});




module.exports = router;