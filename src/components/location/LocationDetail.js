import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./LocationDetail.css"
import { getLocationById } from "../../modules/LocationsManager";

export const LocationDetail = () => { 
  const [location, setLocation] = useState({ name: "", address: "" })

  const {locationId} = useParams()

  useEffect(() => {
    console.log('locationId', locationId);
    getLocationById(locationId)
    .then(location => {
      setLocation(location);
    });
  }, [locationId])

  return (
    <section className="location">
      <picture>
        <img src={location.image} alt="vet storefront" className="locationPhoto"/>
      </picture>
    <h3 className="location__name">{location.name}</h3>
    <div className="location__address">{location.address}</div>
    </section>
  )
}