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
import React, { useEffect, useState } from "react";
import api from "../api/service";
//import "/final-client/src/App.css"; // Import the CSS file
import { Link } from "react-router-dom";
const SongsHomePage = () => {
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

            <h1>Songs:</h1>
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

                        {/*<img src={song.imageUrl} alt={song.title} />*/}
                    </li>
                ))}
            </ul>

            <Link to="/add-song">
                <button className="add-song-button">Add a Song</button>
            </Link>
        </div>
    );
};

export default SongsHomePage;
