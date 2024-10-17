import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPlayers } from "../api/index";
import './Players.css';

export default function Players() {
  const [players, setPlayers] = useState([]);
        
  useEffect(()=>{
    async function getAllPlayers() {
      try {
        const playersData = await fetchAllPlayers();
        console.log("Fetched Players Data:", playersData);
        setPlayers(playersData || []);      
      } catch (error) {
        console.error("oh no i couldnt fetch allplayers:", error);
      }
    }

    getAllPlayers();
    }, []);

    return (
      <>
      {players.length > 0 ? ( 
        <div className="puppy-container">
          
          {players.map((player) => ( 
            <div className="puppy-box" key={player.id}>
              <h4>{player.name}</h4>
              {player.imageUrl && (
                <img
                  src={player.imageUrl}
                  alt={`Cover of ${player.name}`}
                  className="puppy-image"
                  />
              )}
              <Link to={`/players/${player.id}`}>View Puppy Details</Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading Puppies...</p> 
      )}
    </>
  );
}