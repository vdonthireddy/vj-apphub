import express from 'express';

const app: express.Application = express();

app.get('/', (req, res) => {
    res.end('Hello world!!! ');
});

app.listen(3000, ()=> {
    console.log('sever started at: http://localhost:3000/');
});
