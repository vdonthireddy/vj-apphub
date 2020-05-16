import express from 'express';

const app: express.Application = express();

app.get('/', (req, res) => {
    res.end('Hello world!!! ');
});

app.listen(8080, ()=> {
    console.log('sever started...');
});

console.log('Hello World!');