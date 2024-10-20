import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'; // Update this import based on your structure
import FavoritesPage from './Pages/FavoritesPage'; // Ensure this page exists
import DishDetailPage from './Pages/DishDetailPage';
import DishCard from './Components/DishCard';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path ='./DishCard' element={<DishCard/>}/>

                <Route path='/DishDetailPage' element={<DishDetailPage/>}/>
                <Route path="/" element={<HomePage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                {/* Add other routes as necessary */}
            </Routes>
        </Router>
    );
};

export default App;
