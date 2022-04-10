import React from "react";
import { addLocation } from "../../modules/LocationsManager";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./LocationForm.css"

export const LocationForm = () => { 
  const [location, setLocation] = useState({
    name: '',
    address: '',
    image: ''
  })

  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const handleControlledInputChange = (event) => { 
    const newLocation = {...location}
    let selectedVal = event.target.value
    newLocation[event.target.id] = selectedVal
    setLocation(newLocation)
   }

const handleClickSaveLocation = (event) => { 
  event.preventDefault()
  if (location.name === '' || location.address === '' || location.image === '') {
    window.alert("Fill that shiz out mmmk.")
  } else {
    addLocation(location)
    .then(() => navigate("/locations"))
  }
}

  return (
    <form className="locationForm">
			<h2 className="locationForm__title">New Location</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Location name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="location name" value={location.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="address">location address:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="location address" value={location.address} />
				</div>
			</fieldset>
      <fieldset>
				<div className="form-group">
					<label htmlFor="image">location image:</label>
					<input type="text" id="image" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="location image" value={location.image} />
				</div>
			</fieldset>
			<button type="button" className="btn btn-primary"
				      onClick={handleClickSaveLocation}>
				      Save Location
      </button>
		</form>
  )

 }