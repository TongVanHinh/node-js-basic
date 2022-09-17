// Get home page
let getHomePage = (req, res) => {
    // Xu ly code logic o controller
    return res.render('index.ejs');
}

module.exports = {
    getHomePage: getHomePage,
}