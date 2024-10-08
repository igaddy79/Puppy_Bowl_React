import { useState } from "react";


export default function NewPlayerForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState(null);
    
    async function handleSubmit(event) {
        event.preventDefault();
        //console.log("Hello");
        
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, breed, status, imageUrl }),
        });

            const result = await response.json();
            console.log(result);

        } catch (error) {
          setError(error.message);
        }
      }
        
      return (
        <>
      
                <h2>Sign Up!</h2>
                {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>...
    
        <label>
              name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
             breed: <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)}/>
        </label>
        <label>
            status: <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
        </label>
        <label>
            imageUrl: <input type="text" value={imageurl} onChange={(e) => setImageUrl(e.target.value)}/>
        </label>
        <button>Submit</button>
    </form>
    </>
      );
}