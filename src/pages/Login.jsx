// import new_doctor from "./assets/new_doctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faGithub, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import {useState} from "react";
import {createUser} from "../scripts/users";
import "../styles/Login.css";

function GetFormFields(params) {
    let [formState, setFormState] = useState({
        email: String,
        password: String
    })
    let handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    }
    if (params.buttonState === "Sign-In") {
        return (
            <div className="login-form-fields" >
                <input onChange={handleFormChange} type="text" name="uname" id="login-uname-input" placeholder="Username"/><br />
                <input onChange={handleFormChange} type="password" name="password" id="login-password-input" placeholder="Password"/>
            </div>
        )
    }
    else {
        return (
            <div className="login-form-fields">
                <input type="text" name="email" id="login-fname-input" placeholder="  Email"/><br />
                <input type="password" name="password" id="login-password-input" placeholder="Password"/>
            </div>
        )
    }
}

function Login(){

    let [buttonState, setButtonState] = useState("Sign-In");
    const handleButtonClick = (e) => {
        e.preventDefault();
        setButtonState(e.target.name);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (buttonState == "Sign-Up") {
            createUser()
        }
    }

    return(
        <>
        <div className="Login">
            <div className="form-border">
                <form>
                    <div className="button-group" style={{ display: "flex", gap: "20px" }}>
                        <button onClick={handleButtonClick} name="Sign-In" id="button-sign-in">Sign In</button>
                        <button onClick={handleButtonClick} name="Sign-Up" id="button-sign-up">Sign Up</button>
                    </div>
                    <GetFormFields buttonState={buttonState} />
                    <button name="confirm" id="button-confirm" onClick={handleSubmit}>{buttonState}</button>
                    <hr />
                    <div className="OAuth" style={{ display: "flex", gap: "10px" }}>
                        <a href="http://localhost:5000/login/federated/google" name="google" id="button-google-oauth"><FontAwesomeIcon icon={faGoogle} /></a>
                        <a href="#" name="github" id="button-github-oauth"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#" name="outlook" id="button-outlook-oauth"><FontAwesomeIcon icon={faMicrosoft} /></a>
                    </div>
                </form>
            </div>
        </div>

        </>
    )

}
export default Login