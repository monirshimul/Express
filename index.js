const config = require('config');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const prodcuts = require('./routes/products');
const addprodcut = require('./routes/addProdcut');
const deleteprodcut = require('./routes/deleteProduct');
const updateproduct = require('./routes/updateProduct');
const logger = require('./middleware/logger');
const authen = require('./middleware/authentication');
const bodyParser = require('body-parser');
const http = require('http');
const Joi = require('joi');





const app = express();

//Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended : true }));

app.use(logger);
app.use(authen);

app.use(express.static('public'));
app.use(helmet());

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    console.log('Morgan enabled....')
};

app.use(prodcuts);
app.use(addprodcut);
app.use(deleteprodcut);
app.use(updateproduct);

//Configuration....
console.log('Application name :' + config.get('name'));
console.log('Mail server name :' + config.get('mail.host'));




const port = process.env.PORT || 1011;
app.listen(port, console.log(`Listening on port ${port}...`));