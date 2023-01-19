const mainController = {

    home: (req, res)=> {
        res.render("home", {title: "Home"})
    }

}

module.exports = mainController;