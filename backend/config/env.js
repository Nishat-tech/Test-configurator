require('dotenv').config();

const environment = {
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://Tester_db_user:<db_password>@santamonika.7aqm5oo.mongodb.net/?retryWrites=true&w=majority&appName=SantaMonika',
  JWT_SECRET: process.env.JWT_SECRET || 'DDCB940505B1349DB5FD5D8E4F1A8A6B13AF81E42A4AAE0D76ED237CC8DCD52C',
  PORT: parseInt(process.env.PORT, 10) || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development'
};

module.exports = environment;