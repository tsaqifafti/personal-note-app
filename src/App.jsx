import React from "react";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";

function App() {
    return (
        <div className="app-container">
            <header>
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/notes/:id" element={<DetailPage />} />
                    <Route path="/notes/new" element={<AddPage/>} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
