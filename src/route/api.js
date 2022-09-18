// Route API
import express from 'express';
import ipaController from '../controller/apiController';

// Khai bao routter de su dung ham router cua express
let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', ipaController.getAllUsers);
    router.post('/create-user', ipaController.createUser);
    router.put('/update-user', ipaController.updateUser);
    router.delete('/delete-user/:id', ipaController.deleteUser);


    return app.use('/api/v1/', router)
}

module.exports = initAPIRoute;