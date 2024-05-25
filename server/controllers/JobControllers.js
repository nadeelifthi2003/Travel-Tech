const JobModel = require('../Models/JobModel')
const CommonControllers = require('./CommonControllers')

const JobController = new CommonControllers(JobModel)

module.exports = JobController;

