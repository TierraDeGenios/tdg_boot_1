db = require("../database/models")


const mainController = {



    home: async (req, res) => {
        try {

            let developers = await db.Developer.findAll(
                {
                    include: [
                        {
                            association: "workExperiences"
                        },
                        

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

            let educations = await db.Education.findAll({
                include: [
                    {
                    association: "developerEducations"
                }
                ]
            }).catch((error) => {
                console.log(error);
            })

            // Prueba bidireccional de la tabla UserLanguage
            let userLanguage = await db.UserLanguage.findAll({
                include: [
                    {
                        association: "Language",
                        attributes: ["name"]
                    },
                    {
                        association: "Proficiency",
                        attributes: ["proficiency"] 
                    }
                ]
            })
            .catch((error) => {
                console.log(error);
            })
            // res.json(userLanguage)

            let profileOwnerships = await db.ProfileOwnership.findAll({
                include: [
                    {
                        association: "Developer"
                    }, 
                    {
                        association: "Reviewer"
                    }
                ]
            }).catch((error)=>{
                console.log(error);
            })


            let reports = await db.SkillsReportDeveloperReviewer.findAll({
                include: [
                    {
                        association: "Developer"
                    },
                    {
                        association: "Reviewer"
                    }
                ]
            }).catch((error)=>{
                console.log(error);
            })



            let scores = await db.SkillScore.findAll({
                include: [
                    {
                        association: "Skill"
                    },
                    {
                        association: "SkillsReportDeveloperReviewer"
                    }
                ]
            })


            res.json(scores)

            // res.render("home", {workExperiences: work, developers: developers, educations: educations, profileOwnerships: profileOwnerships, title: "Home"})

        }

        catch (error) {

        }


    }


}

module.exports = mainController;