import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addAnimal } from "../../modules/AnimalManager";
import { getAllCustomers } from "../../modules/CustomersManager";
import { getAllLocations, getLocationById } from "../../modules/LocationsManager";
import './AnimalForm.css'

export const AnimalForm = () => {
  const [animal, setAnimal] = useState({
    name: '',
    breed: '',
    locationId: 0,
    customerId: 0
  })

  const [isLoading, setIsLoading] = useState(true)
  const [locations, setLocations] = useState([])
  const [customers, setCustomers] = useState([])
  const navigate = useNavigate()

  const handleControlledInputChange = (event) => { 
    const newAnimal = {...animal}
    let selectedVal = event.target.value
    // forms always provide values as strings so parse the numbers to integers
    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal)
    }
    newAnimal[event.target.id] = selectedVal
    console.log(newAnimal);
    setAnimal(newAnimal)
   }

   useEffect(() => {
    getAllLocations().then(setLocations)
   },[])

   useEffect(() => {
     getAllCustomers().then(setCustomers)
   }, [])
  
  const handleClickSaveAnimal = (event) => { 
    event.preventDefault() // prevents browser from submitting the form


    if (animal.locationId === 0 || animal.customerId === 0) {
      window.alert("Nah dawg, pick a customer and location.")
    } else if (animal.name === '' || animal.breed === '') {
      window.alert("Seriously??? You're animal has no name? Don't know the breed, put N/A fooooo!")
    } else {
      setIsLoading(true)
      addAnimal(animal).then(() => navigate('/animals'))
    }
   }

   return (
     <form className="animalForm">
       <h2 className="animalForm__title">New Animal</h2>
       <fieldset>
          <div className="form-group">
            <label htmlFor="name"> Animal Name:</label>
            <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal Name" value={animal.name} />
          </div>
       </fieldset>
       <fieldset>
				<div className="form-group">
					<label htmlFor="breed">Animal breed:</label>
					<input type="text" id="breed" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed} />
				</div>
        </fieldset>
        <fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
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
					<select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a customer</option>
						{customers.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
      <button type="button" onClick={handleClickSaveAnimal}>Save Animal</button>
     </form>
   )
}

