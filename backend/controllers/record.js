import Record from "../models/record.js";
import {createRecord, updateRecord, getRecord} from "../models/record.js";

function newRecord(req, res) {
    createRecord(req.body).then((record) => {
        if (record.error) {
            res.send({"error": record.error});
        } else {
            res.send(record);
        }
    });
}
function getRecordData(req, res) {
    getRecord(req.params.recordId).then((record) => {
        if (record.error) {
            res.send({"error": record.error});
        } else {
            res.send(record);
        }
    });
}
function updateRecordData(req, res) {
    updateRecord(req.params.recordId, req.body).then((record) => {
        if (record.error) {
            res.send({"error": record.error});
        } else {
            res.send(record);
        }
    });
}
export {newRecord, updateRecordData, getRecordData};