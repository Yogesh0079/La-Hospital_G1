import mongoose from "mongoose";
const { Schema } = mongoose;
import { testTypeMap, deptMap} from "../static/mappings.js";
import {createDb, readDb, updateDb, get_enumeration, rev_enumeration} from "../connections/database.js";

const recordSchema = new Schema({
    pat_id: Number,
    doc_id: Number,
    dept_id: Number,
    type: Number, // 1: Appointment, 2: Test, 3: Discharged, 4: Completed Test
    date: Date,
    rev_date: Date,
    body: {
        symptoms: [String],
        tests: [Number],
        diagnosis: String,
        prescriptions: [Number],
        remarks: String,
        blood_test: { // Add a new object for blood test results
            hemoglobin: {
                value: { type: Number, required: true },
                unit: { type: String, default: 'g/dL' },
                reference_range: { type: String, default: '13.5-17.5' },
                status: { type: String, enum: ['Normal', 'Low', 'High'], default: 'Normal' }
            },
            wbc_count: {
                value: { type: Number, required: true },
                unit: { type: String, default: 'x10³/µL' },
                reference_range: { type: String, default: '4.0-11.0' },
                status: { type: String, enum: ['Normal', 'Low', 'High'], default: 'Normal' }
            },
            platelets: {
                value: { type: Number, required: true },
                unit: { type: String, default: 'x10³/µL' },
                reference_range: { type: String, default: '150-450' },
                status: { type: String, enum: ['Normal', 'Low', 'High'], default: 'Normal' }
            },
            rbc_count: {
                value: { type: Number, required: true },
                unit: { type: String, default: 'x10⁶/µL' },
                reference_range: { type: String, default: '4.5-5.9' },
                status: { type: String, enum: ['Normal', 'Low', 'High'], default: 'Normal' }
            },
            hematocrit: {
                value: { type: Number, required: true },
                unit: { type: String, default: '%' },
                reference_range: { type: String, default: '40.0-52.0' },
                status: { type: String, enum: ['Normal', 'Low', 'High'], default: 'Normal' }
            },
            mcv: {
                value: { type: Number, required: true },
                unit: { type: String, default: 'fL' },
                reference_range: { type: String, default: '80.0-100.0' },
                status: { type: String, enum: ['Normal', 'Low', 'High'], default: 'Low' } // Assuming the value you mentioned was low
            }
        }
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