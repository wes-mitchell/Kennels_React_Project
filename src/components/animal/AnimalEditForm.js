import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager"
import { getAllCustomers } from "../../modules/CustomersManager";
import { getAllLocations } from "../../modules/LocationsManager";
import "./AnimalForm.css"


export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState([])
  const [customers, setCustomers] = useState([])

  const {animalId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // default values for locationId and customerId
    // if you already have these components/modules in place, you will need to include the correct information
    const editedAnimal = {
      id: animalId,
      name: animal.name,
      breed: animal.breed,
	    locationId: 0,
	    customerId: 0
    };

    
    if (animal.locationId === 0 || animal.customerId === 0 || animal.name === '' || animal.breed === '') {
      window.alert("Fill it out completeley sonny. ")
      setIsLoading(false)
    } else {
      updateAnimal(editedAnimal)
      .then(() => navigate("/animals")
    )
  }
}

  useEffect(() => {
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getAllLocations().then(setLocations)
  }, [])

  useEffect(() => {
    getAllCustomers().then(setCustomers)
  }, [])

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
       
            <label htmlFor="location">Assign to location: </label>
              <select value={animal.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control" >
                <option value="0">Select a location</option>
                {locations.map(l => (
                  <option key={l.id} value={l.id}>
                    {l.name}
                  </option>
                ))}
              </select>
        </div>
			</fieldset>
      <fieldset>
				<div className="form-group">
					<label htmlFor="customerId">Customer: </label>
					<select value={animal.customerId} name="customer" id="customerId" onChange={handleFieldChange} className="form-control" >
						<option value="0">Select a customer</option>
						{customers.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
  
           </div>   
          {/* Be sure to include location and customer */}
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"

            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
