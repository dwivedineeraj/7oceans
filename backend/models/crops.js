const mongoose = require("mongoose");

const CropSchema = new mongoose.Schema({
    names: [{
        type: String,
        required: true,
    }],
    dpurl: {
        type: String,
        required: false,
    }
});

module.exports = CropModel("crops", CropSchema);