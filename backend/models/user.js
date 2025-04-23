import mongoose from "mongoose";
import { Schema } from "mongoose";
import { userTypeMap, deptMap} from "../static/mappings.js";
import {get_enumeration, rev_enumeration, createDb, readDb, updateDb, readDbField} from "../connections/database.js";

const userSchema = new Schema({
    new: Boolean,
    oauth_id: String,
    first_name: String,
    last_name: String,
    email: String,
    contact: String,
    address: String,
    user_type: Number,
    photo: String,
    records: [Number],
    appontments: [Number],
    staff_info: {
        qualification: String,
        designation: String,
        date_joined: Date,
        salary: Number,
        dept_id: Number,
    },
    patient_data: {
        blood_group: Number,
        height: Number,
        weight: Number,
        allergies: [String],
        current_medications: [Number],
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
    reqData.user_type = get_enumeration(reqData.user_type, userTypeMap) || 0;
    if (reqData.user_type === 1) {
        reqData.doc_info.dept_id = Object.keys(deptMap).find(key => deptMap[key] === reqData.doc_info.dept_id);
    }
    else {
        reqData.doc_info = null;
    }
    return await createDb(reqData, User, "createUser");
}

async function getUser(userId) {
    return await readDb(userId, User, "getUser").then((res) => {
        res.user_type = rev_enumeration(res.user_type, userTypeMap);
        if (res.doc_info) {
            res.doc_info.dept_id = rev_enumeration(res.doc_info.dept_id, deptMap);
        }
        return res;
    });
}
async function getUserByField(email, field) {
    return await readDbField(field, email, User, "getUser").then((res) => {
        if (!res) return null;
        if (!res.user_type) res.user_type = 0;
        res.user_type = rev_enumeration(res.user_type, userTypeMap);
        if (res.doc_info) {
            res.doc_info.dept_id = rev_enumeration(res.doc_info.dept_id, deptMap);
        }
        return res;
    });
}

async function updateUser(userId, updateFields) {
    return await updateDb(userId, updateFields, User, "getUser").then((res) => {
        if (res.user_type === 1) {
            res.doc_info.dept_id = get_enumeration(res.doc_info.dept_id, deptMap);
        }
        res.user_type = rev_enumeration(res.user_type, userTypeMap);
        return res;
    });
}

export default User;
export {createUser, getUser, updateUser, getUserByField};