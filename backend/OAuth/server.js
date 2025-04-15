import express from 'express';
import cookieParser from 'cookie-parser';
import { resolveElements } from 'motion';
import createAppwriteClient from './appwrite';
import { OAuthProvider } from 'node-appwrite';

const app = express()
const port = 5173

app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Google Oauth")
});

app.get("/auth", async (req, res) => {
    try{
        const {account} = await createAppwriteClient("admin")

        const redirectUrl = await account.createOAuth2Token(
            OAuthProvider.Google,
            "https://localhost:5173/success",
            "https://localhost:5173/fail"
        );
        const button = `<button><a href=${redirectUrl}>Sign in with Google</a></button>`;
        res.set("Content-Type", "text/html");
        res.send(button);
    } catch(error) {
        return res.json({error});
    }
});

app.get("/success", async (reqq, res) => {
    try{
        const {userId, secret} = res.query;

        const {account} = await createAppwriteClient("admin");
        const session = await account.createSession(userId, secret);

        res.cookie("session", session.secret, {
            httpOnly:true,
            secure:true,
            sameSite:"strict",
            expires: new Date(session.expire),
            path: "/",
        })

        res.send("Success");
    } catch(error) {
        return res.json({error});
    }
});

app.get("/user", async (req, res) => {
    try {
        const sessionCookie = req.cookies.session;

        if (!sessionCookie) {
            return res.send("You are not authenticated!");
        }

        const {account} = await createAppwriteClient("session", sessionCookie);
        const user = await account.get();

        return res.json({user});
    } catch (error) {
        return res.json({error});
    }
});

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
});