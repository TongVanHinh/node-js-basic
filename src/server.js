import express from 'express'; //Su dung thu vien cua express
import configViewEngine from './configs/viewEngine'; //Su dung cau hinh 

const app = express(); //Khai bao mot istance
const post = 3000; //Khai bao mot cong

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/about', (req, res) => {
    res.send('Toi la Hinh day')
})

app.listen(post, () => {
    console.log(`Example app listening at http://localhost:${post}`);
})