import express from "express";
import {createUser, getUser, createRecord, getRecord, updateUser, updateRecord} from "./database.js";

const app = express();

// let user = await createUser({
//     first_name: "John",
//     last_name: "Doe",
//     email: "john.doe@example.com",
//     contact: "1234567890",
//     doctor: true,
//     records: [0, 1]
// });
// console.log(user);

let user = await updateUser("67f963dbdba8cc610182de2e", {first_name: "Jhonie"});
console.log(user);

app.get("/", (req,res) => {
    res.send("Server working.");
})

app.post("/createUser", (req, res) => {
    console.log(req)
    res.send("Hi");
})

app.post("/createRecord", (req, res) => {
    res.send("Server working.");
})

app.get("/getUser", (req, res) => {
    res.send("Server working.");
})

app.get("/getRecord", (req, res) => {
    res.send("Server working.");
})
app.listen(5000, () => {
    console.log("App started on port 5000");
})
