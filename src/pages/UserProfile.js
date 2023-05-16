import React, { useContext, useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";
import authService from "./../services/auth.service";
import { AuthContext } from "../context/auth.context";
const API_URL = "http://localhost:5005";

const UserProfile = () => {
    const { user, token } = useContext(AuthContext);
    //console.log(user._id);
    console.log(token);
    const [currentUser, setCurrentUser] = useState(user);
    console.log(currentUser._id);

    useEffect(() => {
        authService
            .get(`api/user/${user._id}`)
            //.get(`api/user/:id`) // Replace '/api/user' with the appropriate backend route
            .then((response) => {
                setCurrentUser(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, [user]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        /*<div className="user-profile">
            <h2>User Profile</h2>
            <img src={user.imageUrl} alt={user.name} />
            <p>Email: {user.email}</p>
            <p>Name: {user.name}</p>
        </div>*/
        <div className="user-profile">
            <h2>User Profile</h2>
            <img src={currentUser.imageUrl} alt={user.name} />
            <p className="email-label">Email: {currentUser.email}</p>
            <p className="name-label">Name: {currentUser.name}</p>
        </div>
    );
};

export default UserProfile;
