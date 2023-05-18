import {
    BrowserRouter as Router,
    Switch,
    Route,
    useNavigate,
} from "react-router-dom";
//import "App.css"; // Import the CSS file
//import { useContext } from "react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const NavBar = () => {
    const { isLoggedIn, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logOutUser();
        navigate("/");
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Kasetophono
                </Link>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">
                            Home
                        </Link>
                    </li>
                    {isLoggedIn ? (
                        <>
                            <li className="navbar-item">
                                <Link to="/user" className="navbar-link">
                                    Profile
                                </Link>
                            </li>

                            <li className="navbar-item">
                                <Link
                                    to="/"
                                    className="navbar-link"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="navbar-item">
                                <Link to="/signup" className="navbar-link">
                                    Sign up
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/login" className="navbar-link">
                                    Login
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};
export default NavBar;
