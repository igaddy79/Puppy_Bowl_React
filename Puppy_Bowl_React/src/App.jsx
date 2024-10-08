import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AllPlayers from "./components/AllPlayers";
import NavBar from "./components/NavBar";

function App() {
  
  return (
    // <>
    //   <NavBar />
      
    //   <AllPlayers />
      
    //   <NavBar />

    //   <NewPlayerForm />

    //   <SinglePlayer />
    // </>


    <Router>
      <NavBar />
    <Routes>
      <Route path="/allplayers" element={<AllPlayers />} />
      <Route path="/allplayers" element={<AllPlayers />} />
      <Route path="/allplayers" element={<AllPlayers />} />
    </Routes>
    </Router>
  );
}

export default App
