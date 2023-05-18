/*import React, { useEffect, useState } from "react";
import api from "../api/service";
import "./App.css"; // Import the CSS file

const HomePage = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        // Fetch songs data from the backend
        const fetchSongs = async () => {
            try {
                const songsData = await api.getSongs();
                setSongs(songsData);
            } catch (error) {
                console.error("Failed to fetch songs:", error);
            }
        };

        fetchSongs();
    }, []);

    return (
        <div className="home-page">
            {" "}
            {/* Add the home-page class */ /*}
            /*
            <h1>Home Page</h1>
            <h2>Songs:</h2>
            <ul>
                {songs.map((song) => (
                    <li key={song._id}>
                        <h3>{song.title}</h3>
                        <p>Artist: {song.artist}</p>
                        <p>YouTube Link: {song.youtubeLink}</p>*/
/* {/* Add more song details here */ /*}  */
/*
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
*/
import React, { useContext, useEffect, useState } from "react";
import api from "../api/service";
import auth from "../services/auth.service";
import { Link } from "react-router-dom";
import authService from "../services/auth.service";
import { getToken } from "../services/auth.service";
import { AuthContext } from "../context/auth.context";
const SongsHomePage = () => {
    const [songs, setSongs] = useState([]);
    const [users, setUsers] = useState([]);
    const { token } = useContext(AuthContext);
    useEffect(() => {
        // Fetch songs data from the backend
        const fetchSongs = async () => {
            try {
                const songsData = await api.getSongs();
                setSongs(songsData);
            } catch (error) {
                console.error("Failed to fetch songs:", error);
            }
        };
        const fetchUsers = async () => {
            try {
                const usersData = await auth.get("users", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(usersData.data);
            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        };

        fetchUsers();
        fetchSongs();
    }, []);

    return (
        /* <div className="home-page">
            <div className="logo-container">
                <h1 className="page-title">Kasetophono</h1>

                <img
                    src="/img/kaset.jpg"
                    alt="Kasetophono Logo"
                    className="logo-img"
                    style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "400px", // Adjust the maximum width as per your preference
                        margin: "0 auto",
                    }}
                />
            </div>

            <h1>Songs</h1>
            <ul className="songs-list">
                {songs.map((song) => (
                    <li key={song._id} className="song-item">
                        <h3>{song.title}</h3>
                        <p>Artist: {song.artist}</p>
                        <div className="song-image">
                            <img src={song.imageUrl} alt={song.title} />
                        </div>
                        <p>
                            YouTube Link:{" "}
                            <a
                                href={song.youtubeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {song.youtubeLink}
                            </a>
                        </p>
                    </li>
                ))}
            </ul>

            <Link to="/add-song">
                <button className="add-song-button">Add a Song</button>
            </Link>
            <h1>Users</h1>
            <ul className="users-list">
                {users.map((user) => (
                    <li key={user._id} className="user-item">
                        <h3>{user.name}</h3>
                        <img src={user.imageUrl} alt={user.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};*/
        /*  <div className="home-page">
            <div className="logo-container">
                <h1 className="page-title">Kasetophono</h1>
                <img
                    src="/img/kaset.jpg"
                    alt="Kasetophono Logo"
                    className="logo-img"
                    style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "400px", // Adjust the maximum width as per your preference
                        margin: "0 auto",
                    }}
                />
            </div>

            <h1>Songs</h1>
            <ul className="songs-list">
                {songs.map((song) => (
                    <li key={song._id} className="song-item">
                        <h3>{song.title}</h3>
                        <p>Artist: {song.artist}</p>
                        <div className="song-image">
                            <img src={song.imageUrl} alt={song.title} />
                        </div>
                        <p>
                            YouTube Link:{" "}
                            <a
                                href={song.youtubeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {song.youtubeLink}
                            </a>
                        </p>
                    </li>
                ))}
            </ul>

            <Link to="/add-song">
                <button className="add-song-button">Add a Song</button>
            </Link>

            <h1>Users</h1>
            <ul className="users-list">
                {users.map((user) => (
                    <li key={user._id} className="user-item">
                        <h3>{user.name}</h3>
                        <img src={user.imageUrl} alt={user.name} />
                    </li>
                ))}
            </ul>
        </div>*/
        <div className="home-page">
            <div className="logo-container">
                <h1 className="page-title">Kasetophono</h1>
                <img
                    src="/img/kaset.jpg"
                    alt="Kasetophono Logo"
                    className="logo-img"
                    style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "400px",
                        margin: "0 auto",
                    }}
                />
            </div>

            <div className="lists-container">
                <div className="song-list-container">
                    <h1>Songs</h1>
                    <ul className="songs-list">
                        {songs.map((song) => (
                            <li key={song._id} className="song-item">
                                <h3>{song.title}</h3>
                                <p>Artist: {song.artist}</p>
                                <div className="song-image">
                                    <img src={song.imageUrl} alt={song.title} />
                                </div>
                                <p>
                                    YouTube Link:{" "}
                                    <a
                                        href={song.youtubeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {song.youtubeLink}
                                    </a>
                                </p>
                                <div className="youtube-video">
                                    <div className="video-wrapper">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${getVideoId(
                                                song.youtubeLink
                                            )}`}
                                            title={song.title}
                                            frameBorder="0"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Link to="/add-song">
                        <button className="add-song-button">Add a Song</button>
                    </Link>
                </div>

                <div className="user-list-container">
                    <h1>Users</h1>
                    <ul className="users-list">
                        {users.map((user) => (
                            <li key={user._id} className="user-item">
                                <img
                                    src={user.imageUrl || "/img/profile.jpeg"}
                                    alt={user.name}
                                />
                                <h3>{user.name}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
// Helper function to extract video ID from YouTube URL
/*const getVideoId = (youtubeLink) => {
    const url = new URL(youtubeLink);
    let videoId = url.searchParams.get("v");
    if (!videoId) {
        // If the video ID is not found in the query parameter, try extracting from the path
        const path = url.pathname.split("/");
        videoId = path[path.length - 1];
    }
    return videoId;
};*/
// Helper function to extract video ID from YouTube URL
const getVideoId = (youtubeLink) => {
    if (!youtubeLink) {
        return null; // Return null if youtubeLink is not provided
    }

    try {
        const url = new URL(youtubeLink);
        let videoId = url.searchParams.get("v");
        if (!videoId) {
            // If the video ID is not found in the query parameter, try extracting from the path
            const path = url.pathname.split("/");
            videoId = path[path.length - 1];
        }
        return videoId;
    } catch (error) {
        console.error("Invalid YouTube URL:", error);
        return null; // Return null in case of an invalid YouTube URL or error
    }
};

export default SongsHomePage;
