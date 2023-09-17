import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import Dashboard from './Dashboard';

export const App = () => {
    return (
    <Routes>
      <Route path="/teams" element={<Home/>} />
      <Route path="/events" element={<Dashboard/>} />
    </Routes>
    )
}