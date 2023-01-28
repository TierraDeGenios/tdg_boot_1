db = require("../database/models")


const mainController = {



    home: async (req, res) => {
        try {

            let developers = await db.Developer.findAll(
                {
                    include: [
                        {
                            association: "workExperiences"
                        }
                    ]
                }
            ).catch((error) => {
                console.log(error);
            })



            let work = await db.WorkExperience.findAll({
                include: [
                    {
                        association: "developer"
                    }
                ]
            }).catch((error) => {
                console.log(error);
            })

            // Prueba bidireccional de la tabla UserLanguage
            // let userLanguage = await db.UserLanguage.findAll({
            //     include: [
            //         {
            //             association: "Language",
            //             attributes: ["name"]
            //         },
            //         {
            //             association: "Proficiency",
            //             attributes: ["proficiency"] 
            //         }
            //     ]
            // })
            // .catch((error) => {
            //     console.log(error);
            // })
            // res.json(userLanguage)

            res.render("home", {workExperiences: work, developers: developers, title: "Home"})

        }

        catch (error) {

        }


    }


}

module.exports = mainController;