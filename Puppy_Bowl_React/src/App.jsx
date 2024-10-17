import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllPlayers from "./components/AllPlayers";
import Navigation from './components/Navigation';
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayer from './components/SinglePlayer';

function App() {
  
  return (  
    <BrowserRouter>
    <>
      <Navigation />
      <h1>PUPPY BOWL</h1>
    <Routes>
      <Route path="/Allplayers" element={<AllPlayers />} />
      <Route path="/NewPlayerForm" element={<NewPlayerForm />} />
      <Route path="/players/:id" element={<SinglePlayer />} /> 
    </Routes>
    
</>
    </BrowserRouter>
  );
}

export default App;
