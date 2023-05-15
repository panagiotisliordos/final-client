/*import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "./../services/auth.service";

function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password, name };

        authService
            .signup(requestBody)
            .then((response) => {
                // Handle successful signup
                console.log("Signup successful");
                navigate("/login");
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            });
    };

    return (
        <div className="SignupPage container">
            <h1>Sign Up</h1>

            <form onSubmit={handleSignupSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                />

                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleName}
                />

                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Already have an account?</p>
            <Link to="/login">Log in</Link>
        </div>
    );
}

export default SignupPage;
*/
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "./../services/auth.service";

function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [name, setName] = useState("");
    const [image, setImage] = useState(null); // State for storing the selected image file
    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);
    const handleImage = (e) => setImage(e.target.files[0]); // Handle image selection

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        //const requestBody = { email, password, name, image };
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("name", name);
        formData.append("image", image);

        console.log("Selected image file:", image);
        authService
            // .signup(requestBody)
            .signup(formData)
            .then((response) => {
                // Handle successful signup
                console.log("Signup successful");
                navigate("/login");
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            });
    };

    return (
        <div className="SignupPage container">
            <h1>Sign Up</h1>

            <form onSubmit={handleSignupSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                />

                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleName}
                />

                <label>Image:</label>
                <input type="file" accept="image/*" onChange={handleImage} />

                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Already have an account?</p>
            <Link to="/login">Log in</Link>
        </div>
    );
}

export default SignupPage;
