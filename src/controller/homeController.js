import { json } from 'body-parser';
import pool from '../configs/connectDB';
import multer from 'multer';
import path from 'path';
// Get home page
let getHomePage = async (req, res) => {
    // Xu ly code logic o controller
    let data = [];
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render('index.ejs', { data: rows })
    console.log('>>>Check dât', rows);
}

let getDetailPage = async (req, res) => {

    let userId = req.params.id;
    let [user] = await pool.execute('select * from users where id = ?', [userId])
    return res.send(JSON.stringify(user));
}

let createUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('INSERT INTO users (firstName, lastName, email, address) VALUES(?,?,?,?)',
        [firstName, lastName, email, address]);
    return res.redirect('/');
}

let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('delete from users where id =?', [userId]);
    return res.redirect('/');
}

let getEditPage = async (req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute(`select * from users where id= ?`, [userId]);
    console.log('>>check data user:', user);
    return res.render('update.ejs', { data: user[0] });
}

let updatePage = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    await pool.execute('update users set firstName=?, lastName=?, email=?, address=? where id =?', [firstName, lastName, email, address, id])
    console.log('check req: ', req.body);
    return res.redirect('/');

}



let getUploadFilePage = async (req, res) => {
    return res.render('uploadFile.ejs')
}


let handleUploadFile = async (req, res) => {

    if (req.fileValidationError) {

        return res.send(req.fileValidationError);
    }
    else if (!req.file) {
        return res.send('Please select an image to upload');
    }

    // Display uploaded image for user validation
    res.send(`You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`);
    // });
}

module.exports = {
    getHomePage: getHomePage,
    getDetailPage: getDetailPage,
    createUser: createUser,
    deleteUser: deleteUser,
    getEditPage: getEditPage,
    updatePage: updatePage,
    getUploadFilePage: getUploadFilePage,
    handleUploadFile: handleUploadFile,
}