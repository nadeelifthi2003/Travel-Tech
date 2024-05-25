const CommonControllers = require("../controllers/CommonControllers")
const OrganizationModel = require("../Models/OrganizationModel")


const OrganizationController = new CommonControllers(OrganizationModel)

module.exports = OrganizationController;