import { useState } from 'react';
import './App.css';
import AllPlayers from "./components/AllPlayers";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AllPlayers />
      
      <NavBar />

      <NewPlayerForm />

      <SinglePlayer />
    </>
  );
}

export default App
