const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        // address: {
        //     type: String,
        //     require: true
        // },
        isAdmin: {
            type: Boolean,
            default: false, 
            required: true
        },
        // access_token: {
        //     type: String,
        //     required: true
        // },
        // refresh_token: {
        //     type: String,
        //     required: true
        // },
        favorite: [
            {
                tour: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'tour',
                    require: true
                }
            }
        ],

        booking: [
            {
                status: {
                    type: String,
                    require: true
                },
                tour: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'tour',
                    require: true
                }
            }
        ]
    }
)

const user = mongoose.model('User', userSchema, 'User'); 

module.exports = user; 

