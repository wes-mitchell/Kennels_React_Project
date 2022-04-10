import React from "react";
import { useState, useEffect } from "react";
import { addCustomer } from "../../modules/CustomersManager";
import { useNavigate } from "react-router-dom";
import './CustomerForm.css'
import { getAllLocations } from "../../modules/LocationsManager";

export const CustomerForm = () => { 
  const [customer, setCustomer] = useState({
    name: '',
    address: '',
    locationId: 0,
    image: ''
  })

  const [isLoading, setIsLoading] = useState(true)
  const [locations, setLocations] = useState([])
  const navigate = useNavigate()

  const handleControlledInputChange = (event) => {
    const newCustomer = {...customer}
    let selectedVal = event.target.value
    if (event.target.value.includes('Id')) {
      selectedVal = parseInt(selectedVal)
    }
    newCustomer[event.target.id] = selectedVal
    setCustomer(newCustomer)
  }

  useEffect(() => {
    getAllLocations().then(setLocations)
  }, [])

  const handleClickSaveCustomer = (event) => {
    event.preventDefault()

    if (customer.locationId === 0 || customer.name === '' || customer.address === '') {
      window.alert("yo yo, let go ahead and fill out the whole form doggy.")
    } else {
      setIsLoading(true)
      addCustomer(customer).then(() => {
        navigate('/customers')
      })
    }
  }

  return (
    <form className="customerForm">
			<h2 className="customerForm__title">New Customer</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Customer Name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="customer name" value={customer.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="address">customer address:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="customer address" value={customer.address} />
				</div>
			</fieldset>
      <fieldset>
				<div className="form-group">
					<label htmlFor="image">customer image:</label>
					<input type="text" id="image" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="customer image" value={customer.image} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={customer.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<button type="button" className="btn btn-primary"
				onClick={handleClickSaveCustomer}>Save Customer
      </button>
		</form>
	)
};
