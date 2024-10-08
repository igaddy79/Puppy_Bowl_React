import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AllPlayers from "./components/AllPlayers";
import NavBar from "./components/NavBar";
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayer from './components/SinglePlayer';

function App() {
  
  return (  
    <Router>
      <NavBar />
    <Routes>
      <Route path="/Allplayers" element={<AllPlayers />} />
      <Route path="/NewPlayerForm" element={<NewPlayerForm />} />
      <Route path="/Allplayers/:playerId" element={<SinglePlayer />} /> 
    </Routes>
    </Router>
  );
}

export default App;
