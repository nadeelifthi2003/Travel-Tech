const mongoose = require('mongoose');

module.exports.connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
       
    } catch (error) {
        console.error("Error connecting to MongoDB:", error); // Use console.error for errors
    }
}
