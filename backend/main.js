import express from "express";
import bodyParser from "body-parser";
import {newUser, updateUserData, getUserData} from "./controllers/user.js";
import {newRecord, getRecordData, updateRecordData} from "./controllers/record.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.send("Server working.");
})

app.post("/createUser", newUser);
app.get("/getUser/:userId", getUserData);
app.put("/updateUser/:userId", updateUserData);

app.post("/createRecord", newRecord)
app.get("/getRecord/:recordId", getRecordData);
app.put("/updateRecord/:recordId", updateRecordData);

app.listen(5000, () => {
    console.log("App started on port 5000");
})
