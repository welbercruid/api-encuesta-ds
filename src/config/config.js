require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI,
    SALT: process.env.SALT,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    
}