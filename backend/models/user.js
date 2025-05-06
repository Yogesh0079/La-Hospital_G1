import mongoose from "mongoose";
import { Schema } from "mongoose";
import { userTypeMap, deptMap} from "../static/mappings.js";
import {get_enumeration, rev_enumeration, createDb, readDb, updateDb, readDbField} from "../connections/database.js";

const userSchema = new Schema({
    new: {type: Boolean, default: true},
    oauth_id: String,
    password: String,
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    contact: String,
    gender: String,
    emergency_contact: {
        name: String,
        number: String,
        relation: String
    },
    address: String,
    user_type: {type: Number, default: 0},
    photo: String,
    records: [Number],
    appontments: [Number],
    staff_info: {
        qualification: String,
        designation: String,
        date_joined: Date,
        salary: Number,
        dept_id: Number
    },
    medical_data: {
        blood_group: String,
        height: Number,
        weight: Number,
        dob: Date,
        diet: Number,
        allergies: [String],
        current_medications: [Number],
        smoke: String,
        drink: String,
        reports : [{
            test_id: Number,
            date: Date,
            results: Object,
            remarks: String
        }]
    },
    cartData: [{
        item_id: Number,
        quantity: Number
    }]
});

const User = new mongoose.model("users", userSchema);

async function createUser(reqData) {
    if(!reqData) {return {error: "createUser"};}
    reqData.user_type = get_enumeration(reqData.user_type, userTypeMap) || 0;
    if (reqData.user_type === 1) {
        reqData.staff_info.dept_id = get_enumeration(reqData.staff_info.dept_id, deptMap) || 0;
    }
    if (reqData.user_type === 1 && typeof reqData.staff_info.dept_id === "string") {
        reqData.staff_info.dept_id = Object.keys(deptMap).find(key => deptMap[key] === reqData.staff_info.dept_id);
    }
    else {
        reqData.staff_info = null;
    }
    return await createDb(reqData, User, "createUser");
}

async function getUser(userId) {
    return await readDb(userId, User, "getUser").then((res) => {
        if (!res) return null;
        res.user_type = rev_enumeration(res.user_type, userTypeMap);
        if (res.staff_info) {
            res.staff_info.dept_id = rev_enumeration(res.staff_info.dept_id, deptMap);
        }
        return res;
    });
}
async function getUserByField(email, field) {
    return await readDbField(field, email, User, "getUser").then((res) => {
        if (!res) return null;
        if (!res.user_type) res.user_type = 0;
        res.user_type = rev_enumeration(res.user_type, userTypeMap);
        if (res.staff_info) {
            res.staff_info.dept_id = rev_enumeration(res.staff_info.dept_id, deptMap);
        }
        return res;
    });
}

async function updateUser(userId, updateFields) {
    return await updateDb(userId, updateFields, User, "getUser").then((res) => {
        if (res.user_type === 1) {
            res.staff_info.dept_id = get_enumeration(res.staff_info.dept_id, deptMap);
        }
        res.user_type = rev_enumeration(res.user_type, userTypeMap);
        return res;
    });
}

export default User;
export {createUser, getUser, updateUser, getUserByField};