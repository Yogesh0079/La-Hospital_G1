import express from "express";
import bodyParser from "body-parser";
import {createUser, getUser, createRecord, getRecord, updateUser, updateRecord} from "./database.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.send("Server working.");
})

app.post("/createUser", (req, res) => {
    createUser(req.body).then((user) => {
        if (user.error) {
            console.log(user)
            res.send({"error": user.error, "message": user._message});
        }
        else {
            res.send(user);
        }
    })
})

app.post("/createRecord", (req, res) => {
    createRecord(req.body).then((record) => {
        if (record.error) {
            console.log(record)
            res.send({"error": record.error, "message": record._message});
        }
        else {
            res.send(record);
        }
    });
})

app.get("/getUser/:userId", (req, res) => {
    console.log(req.params.userId);
    getUser(req.params.userId).then((user) => {
        if (!user) {
            res.send({"error": "User not found"});
        }
        else {
            res.send(user);
        }
    });
})
app.get("/getRecord/:recordId", (req, res) => {
    getRecord(req.params.recordId).then((record) => {
        if (!record) {
            res.send({"error": "Record not found"});
        }
        else {
            res.send(record);
        }
    });
})

app.listen(5000, () => {
    console.log("App started on port 5000");
})
