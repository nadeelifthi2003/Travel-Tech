const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    orgName: {
        type: String,
        required: true
    },
    orgType: {
        type: String,
        enum: ['Corporation', 'Non-Profit', 'Government Agency'] // Assuming these are the only types
    },
    industry: String,
    address: {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String
    },
    contactPerson: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    contactPhone: {
        type: String,
        required: true
    },
    website: String,
    description: String,
    logo: String, // Assuming you store the path or URL of the uploaded logo
    taxID: String,
    establishedDate: Date,
    employees: Number,
    revenue: Number,
    socialMedia: String,
    notes: String
});

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;
