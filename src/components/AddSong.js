import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/service";

const AddSong = () => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [imageUrl, setImageUrl] = useState(null);
    const [youtubeLink, setYoutubeLink] = useState("");

    const navigate = useNavigate();

    /*const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file); // Use "coverImage" as the field name
        setImageUrl(formData);
    };*/
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setImageUrl(file); // Pass the file directly
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("artist", artist);
        formData.append("youtubeLink", youtubeLink);
        formData.append("file", imageUrl, imageUrl.name);

        console.log("Title:", title);
        console.log("Artist:", artist);
        console.log("ImageUrl:", imageUrl.name);
        console.log("Youtube Link:", youtubeLink);
        console.log("ImageUrl Name:", imageUrl.name);

        api.uploadImage(imageUrl)
            .then((response) => {
                console.log("Upload Image Response:", response); // Add this line
                const imageUrl = response; // Assign the response directly to imageUrl
                const newSong = {
                    title,
                    artist,
                    imageUrl,
                    youtubeLink,
                };
                console.log("New Song:", newSong);
                return api.createSong(newSong);
            })
            .then(() => {
                alert("Song created successfully!");
                setTitle("");
                setArtist("");
                setImageUrl("");
                setYoutubeLink("");
                navigate("/");
            })
            .catch((error) => {
                console.error("Failed to create song:", error);
                alert("Failed to create song. Please try again.");
            });
    };

    return (
        <div className="add-song-container">
            <h2>New Song</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        required
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Artist:</label>
                    <input
                        type="text"
                        value={artist}
                        onChange={(event) => setArtist(event.target.value)}
                        required
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        required
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>YouTube Link:</label>
                    <input
                        type="text"
                        value={youtubeLink}
                        onChange={(event) => setYoutubeLink(event.target.value)}
                        required
                        className="form-control"
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Save new song
                </button>
            </form>
        </div>
    );
};

export default AddSong;
