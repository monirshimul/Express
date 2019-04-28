
const Joi = require('joi');

function validateProducts(product){
    const schema = {
        name : Joi.string().min(3).required()
    };
    return Joi.validate(product, schema);
}

module.exports = validateProducts;