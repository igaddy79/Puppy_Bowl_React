import React from "react";
import { useNavigate } from "react-router-dom";

const SinglePlayer = ({ puppy, RemovePuppy }) => {
  const navigate = useNavigate();

  const puppyDetails = () => {

    navigate(`/players/${puppy.id}`);
  };


  return (
    <div className="puppy-card">
      <h4>{puppy.name}</h4>
      <img src={puppy.imageUrl} alt={puppy.name} />
      <p>Breed: {puppy.breed}</p>
      <p>Status: {puppy.status}</p>
      <button onClick={() => RemovePuppy(puppy.id)}>Remove</button>
      <button onClick={handleViewDetails}>View Puppy Details</button>
    </div>
  );
};

export default SinglePlayer;
