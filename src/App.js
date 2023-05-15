/*import "./App.css";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar />
        </div>
    );
}

export default App;*/
import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/SongsHomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NavBar from "./components/NavBar";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";
import AddSong from "./components/AddSong";
import UserProfile from "./pages/UserProfile";
function App() {
    return (
        <div className="App">
            <NavBar />

            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route
                    path="/login"
                    element={
                        <IsAnon>
                            {" "}
                            <LoginPage />{" "}
                        </IsAnon>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <IsAnon>
                            {" "}
                            <SignupPage />{" "}
                        </IsAnon>
                    }
                />
                <Route
                    path="/add-song"
                    element={
                        <IsPrivate>
                            {" "}
                            <AddSong />{" "}
                        </IsPrivate>
                    }
                />
                {/* Add the route for the UserProfile component */}
                <Route path="/user" element={<UserProfile />} />
            </Routes>
        </div>
    );
}

export default App;
