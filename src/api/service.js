import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:5005/",
});

const errorHandler = (err) => {
    throw err;
};

const getSongs = () => {
    return api
        .get("/songs")
        .then((res) => res.data)
        .catch(errorHandler);
};

const createSong = (songData) => {
    return api
        .post("/songs", songData)
        .then((res) => res.data)
        .catch(errorHandler);
};

const uploadImage = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    return api
        .post("/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => res.data)
        .catch(errorHandler);
};

const getUsers = () => {
    return api
        .get("/users")
        .then((res) => res.data)
        .catch(errorHandler);
};

export default {
    getSongs,
    createSong,
    uploadImage,
    getUsers,
};
