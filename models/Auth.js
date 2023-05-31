import {Schema, model} from "mongoose";


let schema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    photo: {type: String, required: false},
    role: {type: Number, required: true},
    is_online: {type: Boolean, required: true},
    is_verified: {type: Boolean, required: true},
    verify_code: {type: String, required: true},
},{
    timestamps: true
})

let collection = 'auths'

let Auth = model(collection, schema)

export default Auth
