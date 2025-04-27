import express from "express";
import bodyParser from "body-parser";
import {newUser, updateUserData, getUserData} from "./controllers/user.js";
import {newRecord, getRecordData, updateRecordData} from "./controllers/record.js";
import {passport} from "./auth/passport.js";
import session from "express-session";
import cors from "cors";
import morgan from "morgan";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const corsOptions ={
   origin:'http://localhost:5173', //restricts the domain that can access the server
   credentials:true,     //access-control-allow-credentials:true
}

app.use(cors(corsOptions)) // Use this
app.use(morgan('dev'))
app.use(
  session({
    secret: 'boots_and_cats', // use a strong secret in production
    resave: false,
    saveUninitialized: false,
    credentials: true,              // 🔥 Important for cookies!
    cookie: {
        httpOnly: true,
        secure: false,           // false on localhost (no HTTPS)
        sameSite: 'lax',         // 'lax' works for redirect logins
    }
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.send("Server working.");
})

app.post("/createUser", newUser);
app.post('/login',
    passport.authenticate('local', { session: true }), (req, res) => {
        res.json(req.user)
    }
);
app.get("/getUser/:userId", getUserData);
app.put("/updateUser/:userId", updateUserData);

app.post("/createRecord", newRecord)
app.get("/getRecord/:recordId", getRecordData);
app.put("/updateRecord/:recordId", updateRecordData);

app.get("/login/federated/google", passport.authenticate("google"));
app.get('/oauth2/redirect/google', passport.authenticate('google', {
    successRedirect: 'http://localhost:5173/dashboard',
    failureRedirect: 'http://localhost:5173/login'
}));

app.post("/ijp", (req) => {
    console.log(req.body);
})

app.post('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
        });
    });

app.get('/authSession', passport.authenticate('session'), (req, res) => {
    res.cookie('session', req.sessionID, { httpOnly: true });
    if (req.isAuthenticated()) {
        res.json({user: req.user});
    } else {
        res.status(401).json({message: 'Unauthorized'});
    }
});

app.listen(5000, () => {
    console.log("App started on port 5000");
})
