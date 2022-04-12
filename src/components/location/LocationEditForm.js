import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLocationById, updateLocation } from "../../modules/LocationsManager";
import "./LocationForm.css"

export const LocationEditForm = () => { 
  const [location, setLocation] = useState(
    {
      name: "",
      address: "",
      image: ""
    }
  )

  const [isLoading, setIsLoading] = useState(true)
  const {locationId} = useParams()
  const navigate = useNavigate()

  const handleFieldChange = evt => {
    const stateToChange = {...location}
    stateToChange[evt.target.id] = evt.target.value
    setLocation(stateToChange)
  }

  const updateExistingLocation = event => {
    event.preventDefault()
    setIsLoading(true)

    const editedLocation = {
      id: locationId,
      name: location.name,
      address: location.address,
      image: location.image
    }

    if (location.name === '' || location.address === '' || location.image === '') {
      window.alert("fill out the whole form plase!")
      setIsLoading(false)
    } else {
      updateLocation(editedLocation)
      .then(() => navigate("/locations"))
    }
  }

  useEffect(() => {
    getLocationById(locationId)
    .then(location => {
      setLocation(location)
      setIsLoading(false)
    })
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
            value={location.name}
          />
          <label htmlFor="name">Location name</label>

          <input
            type="text"
            required
            className="form-control"
            onChange={handleFieldChange}
            id="address"
            value={location.address}
          />
          <label htmlFor="address">Address</label>
          
          <input
          type="text"
          required
          className="form-control"
          onChange={handleFieldChange}
          id="image"
          value={location.image}
        />
        <label htmlFor="image">Image</label>
        </div>
        {/* Be sure to include location and customer */}
        <div className="alignRight">
          <button
            type="button" disabled={isLoading}
            onClick={updateExistingLocation}
            className="btn btn-primary"
          >Submit</button>
        </div>
      </fieldset>
    </form>
  </>
  )

 }