// Su dung thu vien cua express
import express from "express";

// Khai bao mot bien app dai dien cho ung dung

const configViewEngine = (app) => {
    // Khai bao/ cap quyen su dung cac tai nguyen static
    app.use(express.static('./src/public'))

    // Cấu hình sử dụng templeate view sư dụng gi
    app.set("view engine", "ejs");
    // Cấu hình tìm các file ejs
    app.set("views", "./src/views")
}

// Muon su dung cac ham giua cac file thi su dung ham exposs
export default configViewEngine;