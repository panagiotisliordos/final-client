import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:5005";
const UserProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user data from the backend when the component mounts
        axios
            .get(`${API_URL}/api/user`) // Replace '/api/user' with the appropriate backend route
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p>Email: {user.email}</p>
            <p>Name: {user.name}</p>
            {/* Display other user information as desired */}
        </div>
    );
};

export default UserProfile;
