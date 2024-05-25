const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    employmentType: {
        type: String,
        required: true
    },
    classification: {
        type: String,
        required: true
    },
    skills: {
        type: [String] // Assuming skills can be an array of strings
    },
    location: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    includeSalary: {
        type: Boolean,
        default: true // Assuming it's checked by default
    },
    currency: {
        type: String,
        enum: ['USD', 'EUR', 'GBP'] // Add more currencies as needed
    },
    paidEvery: {
        type: String,
        enum: ['Month', 'Week', 'Year'] // Add more options as needed
    },
    minSalary: {
        type: Number,
        required: true
    },
    maxSalary: {
        type: Number,
        required: true
    }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
