import express from 'express'; //Su dung thu vien cua express
import configViewEngine from './configs/viewEngine'; //Su dung cau hinh 
require('dotenv').config(); //Import thu vien bien moi trongdotenv
import initWebRoute from './route/web'; //Khai bao Route
import initAPIRoute from './route/api';
import connection from './configs/connectDB';

const app = express(); //Khai bao mot istance
// Lay thong tin port tu bien moi truong
const port = process.env.PORT || 8080;

// Cấu hình nhận các tài nguyên gửi từ client
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);
// init api route
initAPIRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})