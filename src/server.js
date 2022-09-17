import express from 'express'; //Su dung thu vien cua express
import configViewEngine from './configs/viewEngine'; //Su dung cau hinh 
require('dotenv').config(); //Import thu vien bien moi trongdotenv

const app = express(); //Khai bao mot istance
// Lay thong tin port tu bien moi truong
const port = process.env.PORT;

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/about', (req, res) => {
    res.send('Toi la Hinh day')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})