import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';

import Header from './components/header';

const App = () => {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
