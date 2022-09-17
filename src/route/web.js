import express from 'express';

// Controller
import homeController from '../controller/homeController';

// Khai bao routter de su dung ham router cua express
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:id', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createUser);
    router.post('/delete-user', homeController.deleteUser);
    router.get('/edit-user/:id', homeController.getEditPage);
    router.post('/update-user', homeController.updatePage);


    return app.use('/', router)
}

module.exports = initWebRoute;