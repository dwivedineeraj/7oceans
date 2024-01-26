const mongoose = require("mongoose");

const FarmerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    crops: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "crops",
        validate: {
            validator: (value) => {
                return value.every(mongoose.Types.ObjectId.isValid);
            },
            message: () => `Incorrect crop id`
        },
    }],
    phone: {
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    address: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    }
});

const FarmerModel = mongoose.model("farmers", FarmerSchema);
module.exports = FarmerModel;