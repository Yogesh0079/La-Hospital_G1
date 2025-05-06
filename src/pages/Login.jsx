import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { createUser, loginUser } from "../scripts/users";
import "../scripts/login.commons"
import "../styles/Login.css";

function Login() {
    let [formState, setFormState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contact: "",
        password: ""
    });

    let handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    let [buttonState, setButtonState] = useState("Sign-In");

    const handleButtonClick = (e) => {
        e.preventDefault();
        setButtonState(e.target.name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (buttonState === "Sign-Up") {
            createUser({
                first_name: formState.firstname,
                last_name: formState.lastname,
                contact: formState.contact,
                email: formState.email,
                password: formState.password,
                user_type: 0
            });
        } else {
            loginUser({ email: formState.email, password: formState.password });
        }
    };

    return (
        <>
            <div className="max-w-md w-full bg-white block rounded-xl overflow-hidden form-container mx-auto">
                <div className="p-1 bg-gradient-to-r from-blue-500 to-teal-400"></div>

                <div className="p-8">
                    <div className="flex justify-center mb-8">
                        <img
                            src="https://img.icons8.com/fluency/96/000000/hospital.png"
                            alt="Hospital Logo"
                            className="h-16"
                        />
                    </div>

                    <div className="flex mb-8 rounded-lg overflow-hidden shadow-sm">
                        <button
                            name="Sign-In"
                            onClick={handleButtonClick}
                            className={`flex-1 py-3 px-4 font-medium text-center ${buttonState === "Sign-In" ? "tab-active" : "bg-gray-100 text-gray-700"} auth-btn`}
                        >
                            Sign In
                        </button>
                        <button
                            name="Sign-Up"
                            onClick={handleButtonClick}
                            className={`flex-1 py-3 px-4 font-medium text-center ${buttonState === "Sign-Up" ? "tab-active" : "bg-gray-100 text-gray-700"} auth-btn`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {buttonState === "Sign-In" ? (
                            <>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleFormChange}
                                        placeholder="Email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 input-field focus:outline-none focus:border-blue-500 transition"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleFormChange}
                                        placeholder="Password"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 input-field focus:outline-none focus:border-blue-500 transition"
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="firstname"
                                            onChange={handleFormChange}
                                            placeholder="First Name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 input-field focus:outline-none focus:border-blue-500 transition"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="lastname"
                                            onChange={handleFormChange}
                                            placeholder="Last Name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 input-field focus:outline-none focus:border-blue-500 transition"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="contact"
                                        onChange={handleFormChange}
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 input-field focus:outline-none focus:border-blue-500 transition"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleFormChange}
                                        placeholder="Email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 input-field focus:outline-none focus:border-blue-500 transition"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleFormChange}
                                        placeholder="Password"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 input-field focus:outline-none focus:border-blue-500 transition"
                                    />
                                </div>
                            </>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 auth-btn"
                        >
                            {buttonState === "Sign-Up" ? "Sign Up" : "Sign In"}
                        </button>

                        <div className="flex items-center justify-between my-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                                Forgot password?
                            </a>
                        </div>
                    </form>

                    <div className="divider my-6">OR CONTINUE WITH</div>

                    <div className="flex justify-center gap-4">
                        <a
                            href="#"
                            className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xl text-gray-700 shadow-sm hover:shadow-md transition auth-btn"
                        >
                            <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                        </a>
                        <a
                            href="#"
                            className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xl text-gray-700 shadow-sm hover:shadow-md transition auth-btn"
                        >
                            <FontAwesomeIcon icon={faGithub} className="text-gray-800" />
                        </a>
                        <a
                            href="#"
                            className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xl text-gray-700 shadow-sm hover:shadow-md transition auth-btn"
                        >
                            <FontAwesomeIcon icon={faMicrosoft} className="text-blue-600" />
                        </a>
                    </div>
                </div>

                <div className="px-8 py-4 bg-gray-50 text-center border-t border-gray-200">
                    <p className="text-gray-600">
                        By continuing, you agree to our{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Privacy Policy
                        </a>
                        .
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;
