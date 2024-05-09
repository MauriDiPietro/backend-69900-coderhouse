import express from 'express';
import { __dirname } from './utils.js';

console.log(__dirname)

const app = express();

app.use(express.static(`${__dirname}/public`))

app.listen(8080, () => {
    console.log('server ok, puerto 8080');
});