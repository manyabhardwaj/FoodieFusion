import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'; // Update this import based on your structure
import FavoritesPage from './Pages/FavoritesPage'; // Ensure this page exists

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                {/* Add other routes as necessary */}
            </Routes>
        </Router>
    );
};

export default App;
