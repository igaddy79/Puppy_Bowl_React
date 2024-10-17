

const cohortName = "2406-FTB-MT-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;


  const fetchAllPlayers = async () => {
   try {
    const response = await fetch(`${API_URL}/players`);
    const result = await response.json();
    // console.log("API Response:", result); 
    // console.log("Players Array:", result.data.players);
    return Array.isArray(result.data.players) ? result.data.players : [];
  } catch (error) {
    console.error("Uh oh, trouble fetching players!", error);
    return [];
  }
}
export { fetchAllPlayers };

export const addNewPlayer = async (playerObj) => {
  try {
    const response = await fetch(`${API_URL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerObj),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Oops, something went wrong with adding that player!", error);
  }
};

export const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${API_URL}/players/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Whoops, trouble removing Puppy!", error);
  }
};

export const SinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${API_URL}/players/${playerId}`);
    const result = await response.json();
    return result.data.player.id;
  } catch (error) {
    console.error("Error fetching single player:", error);
    }
};