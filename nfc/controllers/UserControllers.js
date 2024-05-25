const CommonControllers = require("../controllers/CommonControllers")
const UserModel = require("../Models/UserModel")


const UserController = new CommonControllers(UserModel)

module.exports = UserController;