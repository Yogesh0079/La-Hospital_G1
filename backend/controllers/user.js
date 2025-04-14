import User from "../models/user.js";
import {createUser, updateUser, getUser} from "../models/user.js";

function newUser(req, res) {
     createUser(req.body).then((user) => {
            if (user.error) {
                console.log(user)
                res.send({"error": user.error, "message": user._message});
            }
            else {
                res.send(user);
            }
    })
}
function getUserData(req, res) {
    getUser(req.params.userId).then((user) => {
        if (!user) {
            res.send({"error": "User not found"});
        }
        else {
            res.send(user);
        }
    });
}
function updateUserData(req, res) {
    updateUser(req.params.userId, req.body).then((user) => {
        if (!user) {
            res.send({"error": "User not found"});
        }
        else {
            res.send(user);
        }
    });
}

export {newUser, getUserData, updateUserData};