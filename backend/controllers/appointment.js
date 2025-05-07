import Appointment from "../models/appointment.js";
import { createAppointment, updateAppointment, getAppointment } from "../models/appointment.js";

// Function to create a new appointment
function newAppointment(req, res) {
    createAppointment(req.body).then((appointment) => {
        if (appointment.error) {
            res.send({ "error": appointment.error });
        } else {
            res.send(appointment);
        }
    }).catch((error) => {
        res.status(500).send({ "error": error.message });
    });
}

// Function to get appointment data by ID
function getAppointmentData(req, res) {
    getAppointment(req.params.appointmentId).then((appointment) => {
        if (appointment.error) {
            res.send({ "error": appointment.error });
        } else {
            res.send(appointment);
        }
    }).catch((error) => {
        res.status(500).send({ "error": error.message });
    });
}

// Function to update an existing appointment
function updateAppointmentData(req, res) {
    updateAppointment(req.params.appointmentId, req.body).then((appointment) => {
        if (appointment.error) {
            res.send({ "error": appointment.error });
        } else {
            res.send(appointment);
        }
    }).catch((error) => {
        res.status(500).send({ "error": error.message });
    });
}

export { newAppointment, updateAppointmentData, getAppointmentData };
