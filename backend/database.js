import mongoose from "mongoose";
const { Schema } = mongoose;

mongoose.connect("mongodb://localhost:32768/lhospital")
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


async function createDb(objData, dataSchema, deb_name) {
    // Create a new object of specified schema and save it to the database
    let obj = new dataSchema(objData);
    return await obj.save().catch((err) => {
        console.log(`${deb_name} Error: ${err}`);
        err.error = `${deb_name}`;
        return err;
    });
}

async function readDb(id, dataSchema, deb_name) {
    // Fetch an object from the database of the specified schema using the id
    return dataSchema.findById(id).catch((err) => {
        err.error = `${deb_name}`;
        return err;
    });
}

async function updateDb(id, updateFields, dataSchema, deb_name) {
    return await dataSchema.findOneAndUpdate({_id: id}, updateFields, {returnOriginal: false}).then((obj) => {
        console.log(`Object for ${deb_name} updated successfully!`);
        return obj;
    }).catch((err) => {
        err.error = `${deb_name}`;
        return err;
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
