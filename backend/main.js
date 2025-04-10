import express from "express";
import mongoose from "mongoose";

const { Schema } = mongoose;
const app = express();

mongoose.connect("mongodb://localhost:32784/lhospital")
    .then(() => console.log('Connected to database!'));

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    contact: String,
    doctor: Boolean,
    records: [Number]
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

let doctor1 = new User({
    first_name: "Mk",
    last_name: "A",
    email: "abc@gmail.com",
    contact: "123456789",
    doctor: true,
    records: [0, 1]
});
doctor1.save();

const Record = new mongoose.model("records", recordSchema);
let record1 = new Record({
    pat_id: 23,
    doc_id: 1,
    dept_id: 0,
    date: "24 Jan 2025 13:11",
    rev_date: "21 March 2025",
    body : {
        symptoms: ["Fever", "Fatigue", "Cold"],
        tests: [1, 2],
        diagnosis: "Potential flu",
        prescriptions: ["AD: PCM 500", "BD: Pantop 40"],
        remakrs: "CPD"
    }
})
record1.save();

app.get("/", (req,res) => {
    res.send("Server working.");
})

app.post("/createUser", (req, res) => {
    res.send("Server working.");
})

app.post("/createRecord", (req, res) => {
    res.send("Server working.");
})

app.get("/getUser", (req, res) => {
    res.render("Server working.");
})

app.get("/getRecord", (req, res) => {
    res.send("Server working.");
})
app.listen(3000, () => {
    console.log("App started on port 3000");
})