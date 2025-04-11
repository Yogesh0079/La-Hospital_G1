import mongoose from "mongoose";
const { Schema } = mongoose;

mongoose.connect("mongodb://localhost:32769/lhospital")
    .then(() => console.log('Connected to database!'));

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    contact: String,
    doctor: Boolean,
    records: [Number],
    appontments: [Number],
    doc_info: {
        qualifications: [String],
        experience: Number,
        dept_id: Number,
    }
});

const recordSchema = new Schema({
    pat_id: Number,
    doc_id: Number,
    dept_id: Number,
    date: Date,
    rev_date: Date,
    body : {
        symptoms: [String],
        tests: [Number],
        diagnosis: String,
        prescriptions: [String],
        remakrs: String
    }
});

const User = new mongoose.model("users", userSchema);
const Record = new mongoose.model("records", recordSchema);


async function createDb(reqData, dataSchema, deb_name) {
    // Create a new object of specified schema and save it to the database
    let obj = new dataSchema({
        first_name: reqData.first_name,
        last_name: reqData.last_name,
        email: reqData.email,
        contact: reqData.contact,
        doctor: reqData.doctor,
        records: reqData.records
    });
    return await obj.save().then(() => {
        // console.log(`Object ${deb_name} created successfully!`);
        return obj;
    }).catch((err) => {
        console.log(`${deb_name} Error: ${err}`)
    });
}

async function readDb(id, dataSchema, deb_name) {
    // Fetch an object from the database of the specified schema using the id
    return dataSchema.findById(id).then((obj) => {
        if (!obj) {
            console.log(`Object for ${deb_name} not found ${id}`);
        }
        return obj;
    }).catch((err) => {console.log(`${deb_name} Error: ${err}`)});
}

async function updateDb(id, updateFields, dataSchema, deb_name) {
    return await dataSchema.findOneAndUpdate({_id: id}, updateFields, {returnOriginal: false}).then((obj) => {
        console.log(`Object for ${deb_name} updated successfully!`);
        return obj;
    }).catch((err) => {
        console.log(`${deb_name} Error: ${err}`);
        return null;
    });
}

function createUser(reqData) {
    return createDb(reqData, User, "createUser");
}

function getUser(userId) {
    return readDb(userId, User, "getUser");
}

function updateUser(userId, updateFields) {
    return updateDb(userId, updateFields, User, "updateUser");
}

function createRecord(reqData) {
    return createDb(reqData, Record, "createRecord");
}

function getRecord(recordId) {
    return readDb(recordId, Record, "getRecord");
}

function updateRecord(recordId, updateFields) {
    return updateDb(recordId, updateFields, Record, "updateRecord");
}

export {createUser, getUser, createRecord, getRecord, updateUser, updateRecord};
