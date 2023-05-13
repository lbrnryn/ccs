const mongoose = require("mongoose");
require("dotenv").config();

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ccs" || process.env.MONGO_URI);
        console.log("Database connected!")
    } catch(err) { console.log(err) }
}
mongoose.set('strictQuery', true);

module.exports = main;