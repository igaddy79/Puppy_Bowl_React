

const cohortName = "2406-FTB-MT-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;
// const playersContainer = document.querySelector("main");
// const playerForm = document.querySelector("#new-player-form");
/**
 * Fetches all players from the API.
 * @returns {Object[]} the array of player objects
*/

  const fetchPlayers = async () => {
   try {
    const response = await fetch(`${API_URL}/players`);
    const result = await response.json();
    console.log(result);
    return result.data.players
  } catch (error) {
    console.error("Uh oh, trouble fetching players!", error);
  }
}

export { fetchPlayers };
