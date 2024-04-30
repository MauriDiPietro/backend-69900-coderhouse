import http from 'http';
import { products } from './products.js';
// import productsArray from './products.js';

const server = http.createServer((req, res)=>{
    // res.end('Mi primer servidor con http')
    console.log(req);
    if(req.url === '/products'){
        res.end(JSON.stringify(products))
    }
    if(req.url === '/home'){
        res.end('welcome!')
    }
})


server.listen(8080, ()=>console.log('server ok en puerto 8080'))
