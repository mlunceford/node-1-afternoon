const express = require('express');
const getProducts = require('./getProducts')

const app = express();
const port = 3010


//! below because i did the callback in one line i didnt have to put {}
// app.listen(port, () => console.log(`server port running ${port}`))
// aap.listen(port, () => {
//         console.log('server listinten prot')
//     })
    
//     ? we made below something we required and exported from a different file so that we could save some space.
//     app.get('/api/products', (req, res) => {
//             res.status(200).send(products)
//         })
    
app.get('/api/products', getProducts);
app.get('/api/products/:id', getProducts)