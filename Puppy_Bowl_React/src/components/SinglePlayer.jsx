import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SinglePlayer = ({ RemovePlayer }) => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the player ID from the URL
  const [player, setPlayer] = useState(null); // State to hold player data

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        // Replace with your actual API call to fetch player data
        const response = await fetch(`${API_URL}/players/${id}`);
        const data = await response.json();
        console.log("Fetched Player Data:", data);
        if (data && data.data) {
          setPlayer(data.data.player);
          console.log("Fetched Player Data:", data); // Log the fetched player data
        }
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    fetchPlayerData();
  }, [id]);

  // If player data is not yet loaded, show loading or placeholder
  if (!player) {
    return <p>Loading Player Details...</p>;
  }

  const playerDetails = () => {
    navigate(`/players/${player.id}`);
  };

  return (
    <div className="puppy-card">
      <h4>{player.name}</h4>
      <img src={player.imageUrl} alt={player.name} />
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
      <button onClick={() => RemovePlayer(player.id)}>Remove</button>
      <button onClick={playerDetails}>View Player Details</button> 
    </div>
  );
};

export default SinglePlayer;
