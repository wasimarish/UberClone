const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

async function connectToDb() {
    try {
        await mongoose.connect(process.env.DB_CONNECT);

        console.log('✅ MongoDB Connected Successfully');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        process.exit(1); // Exit process if connection fails
    }
}

module.exports = connectToDb;
