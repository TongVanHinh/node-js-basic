import express from 'express';

// Controller
import homeController from '../controller/homeController';

// Khai bao routter de su dung ham router cua express
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);

    return app.use('/', router)
}

module.exports = initWebRoute;