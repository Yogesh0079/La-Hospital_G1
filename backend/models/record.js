import mongoose from "mongoose";
const { Schema } = mongoose;
import { testTypeMap, deptMap} from "../static/mappings.js";
import {createDb, readDb, updateDb, get_enumeration, rev_enumeration} from "../connections/database.js";

const recordSchema = new Schema({
    pat_id: Number,
    doc_id: Number,
    dept_id: Number,
    date: Date,
    rev_date: Date,
    body: {
        symptoms: [String],
        tests: [Number],
        diagnosis: String,
        prescriptions: [Number],
        remakrs: String
    }
});
const Record = new mongoose.model("records", recordSchema);

function createRecord(reqData) {
    reqData.dept_id = get_enumeration(reqData.dept_id, deptMap);
    reqData.body.tests = reqData.body.tests.map(test => get_enumeration(test, testTypeMap));
    return createDb(reqData, Record, "createRecord");
}

async function getRecord(recordId) {
    return await readDb(recordId, Record, "getRecord").then((res) => {
        res.dept_id = rev_enumeration(res.dept_id, deptMap);
        res.body.tests = res.body.tests.map(test => rev_enumeration(test, testTypeMap));
        return res;
    });
}

async function updateRecord(recordId, updateFields) {
    return await updateDb(recordId, updateFields, Record, "updateRecord").then((res) => {
        res.dept_id = rev_enumeration(res.dept_id, deptMap);
        res.body.tests = res.body.tests.map(test => rev_enumeration(test, testTypeMap));
        return res;
    });
}
export default Record;
export {createRecord, getRecord, updateRecord};