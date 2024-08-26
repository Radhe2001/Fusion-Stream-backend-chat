const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        default: null,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        default: null,
    },
    socket: { type: String, required: true, default: null },
});

module.exports = mongoose.model("Users", UserSchema);
