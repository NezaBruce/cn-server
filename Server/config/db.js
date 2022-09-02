const mongoose = require("mongoose");
require("dotenv").config();
module.exports = () => mongoose.connect("mongodb+srv://bruce:bruce@cluster0.exmgv.mongodb.net/cn-server?retryWrites=true&w=majority");
