const { Schema, model} = require('mongoose');

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        image: {
            type: String,
            required: true,
            
        },

        role: {
            type: String,
            default: "User",
            enum: ["User", "Admin"]
        },

        password: {
            type: String,
            required: true
        },

        verificationCode: {
            type: Number
        },

        isEmailVerified: {
            type: Boolean,
            default: false,
        },

        passwordResetCode: {
            type: String
        }
    }, {timestamps: true}
);

module.exports = model("User", UserSchema);