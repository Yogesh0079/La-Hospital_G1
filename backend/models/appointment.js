import mongoose from "mongoose";
const { Schema } = mongoose;
import { deptMap } from "../static/mappings.js"; // Assuming you may have mappings for departments and doctors
import { createDb, readDb, updateDb, get_enumeration, rev_enumeration } from "../connections/database.js";

// Appointment schema definition
const appointmentSchema = new Schema({
    pat_id: Number, // Patient ID
    doc_id: Number, // Doctor ID
    dept_id: Number, // Department ID
    date: Date, // Appointment date and time
    status: {
        type: String,
        enum: ['Scheduled', 'Completed', 'Cancelled', 'Rescheduled'],
        default: 'Scheduled'
    },
    reason: String, // Reason for the appointment
    notes: String, // Additional notes for the appointment
    created_at: { type: Date, default: Date.now }, // Automatically set creation time
});

// Model for Appointment
const Appointment = mongoose.model("appointments", appointmentSchema);

// Function to create a new appointment
function createAppointment(reqData) {
    reqData.dept_id = get_enumeration(reqData.dept_id, deptMap);
    return createDb(reqData, Appointment, "createAppointment");
}

// Function to get an appointment by ID
async function getAppointment(appointmentId) {
    return await readDb(appointmentId, Appointment, "getAppointment").then((res) => {
        res.dept_id = rev_enumeration(res.dept_id, deptMap);
        return res;
    });
}

// Function to update an appointment by ID
async function updateAppointment(appointmentId, updateFields) {
    return await updateDb(appointmentId, updateFields, Appointment, "updateAppointment").then((res) => {
        res.dept_id = rev_enumeration(res.dept_id, deptMap);
        return res;
    });
}

export default Appointment;
export { createAppointment, getAppointment, updateAppointment };
