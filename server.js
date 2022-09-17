const express = require('express'); //Import su dung thu vien cua express
const app = express(); //Khai bao mot istance
const post = 3000; //Khai bao mot cong

app.get('/', (req, res) => {
    res.send('Hello world voi express')
})

app.get('/about', (req, res) => {
    res.send('Toi la Hinh day')
})

app.listen(post, () => {
    console.log(`Example app listening at http://localhost:${post}`);
})