import React, { useState, useEffect } from "react";
import { getAnimalById } from "../../modules/AnimalManager";
import "./AnimalSpotlight.css";

export const AnimalSpotlight = ({animalId}) => {
  const [animal, setAnimal] = useState({});

  useEffect(() => {
    getAnimalById(animalId).then(animal => {
      setAnimal(animal);
    });
  }, [animalId]);

  return (
    <div className="animal-spotlight">
      <img src={animal.image} alt="My Pup" />
      <div>
        <h3>Name: {animal.name}</h3>
        <p>Breed: {animal.breed}</p>
        <p>Owner: {animal.customer?.name}</p>
      </div>
    </div>
  );
};
