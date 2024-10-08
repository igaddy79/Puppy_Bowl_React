import { useEffect, useState } from "react";
import { fetchPlayers } from "../index";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
        
  useEffect(()=>{

    async function getAllPlayers() {
      try {
        const playersData = await fetchPlayers();
        setPlayers(playersData);
      
      }catch (error) {
        console.error("oh no i couldnt fetch allplayers:", error);
      }
    }

    getAllPlayers();
      //console.log("Hello");

},[]);

    return (
      <>
      {players.length > 0 ? ( 
        <>
          <div>Selected Contact View</div>
          {players.map((player) => ( 
            <div key={player.id}>
              <h4>{player.name}</h4>
            </div>
          ))}
        </>
      ) : (
        <p>Loading players...</p> 
      )}
    </>
  );
}