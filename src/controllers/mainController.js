db = require("../database/models")


const mainController = {

    home: (req, res)=> {

        db.WorkExperience.findAll(
            {
                include: [
                    {
                    association: "workExperiences"
                }
            ]
            }
        )
        .then((workexperineces)=>{
            res.render("home", {workexperineces: workexperineces, title: "Home"})

        })
        .catch((error)=>{
            console.log(error);
        })

        // db.Developer.findAll(
        //     {
        //         include: [
        //             {
        //             association: "workExperiences"
        //         }
        //     ]
        //     }
        // )
        // .then((developers)=>{
        //     res.render("home", {developers: developers, title: "Home"})

        // })
        // .catch((error)=>{
        //     console.log(error);
        // })


    }

}

module.exports = mainController;