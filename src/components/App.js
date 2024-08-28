import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
import data from "../json/db.json"

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  //Handle filter type change
  const onChangeType = (type) => {
    setFilters({ ...filters, type });
  };
  // Fetch and filter pets based on the selected type
  const onFindPetsClick = () => {
    let filteredPets = data.pets;
    if (filters.type !== "all") {
      filteredPets = data.pets.filter((pet) => pet.type === filters.type);
    }
    setPets(filteredPets);
  };

  // Handle pet adoption
  const onAdoptPet = (id) => {
    const updatedPets = pets.map((pet) =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    );
    setPets(updatedPets);
  };


  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
              onChangeType={onChangeType} 
              onFindPetsClick={onFindPetsClick} 
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;