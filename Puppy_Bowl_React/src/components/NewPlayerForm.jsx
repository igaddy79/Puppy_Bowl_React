


export default function NewPlayerForm() {

 
  
    return (
    async function NewPlayerForm(playerObj) {
        try {
          const response = await fetch(`${API_URL}/players`, {
            method: "POST",
            body: JSON.stringify(playerObj),
            headers: {
              "Content-Type": "application/json",
            },
            });
          const result = await response.json();
          console.log("result", result);
        } catch (error) {
          console.error("Oops, something went wrong with adding that player!", error);
        }
    
      }
      )};