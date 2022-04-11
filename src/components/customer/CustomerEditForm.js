import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCustomerById } from "../../modules/CustomersManager";
import { getAllLocations } from "../../modules/LocationsManager";
import { updateCustomer } from "../../modules/CustomersManager";

export const CustomerEditForm = () => { 
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    locationId: 0,
    image: "",
    email: "",
  })

  const {customerId} = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [locations, setLocations] = useState([])

  const handleFieldChange = (event) => {
    const stateToChange = {...customer}
    stateToChange[event.target.id] = event.target.value
    setCustomer(stateToChange)
}

  const updateExistingCustomer = event => {
    event.preventDefault()
    setIsLoading(true)

    const editedCustomer = {
      id: customerId,
      name: customer.name,
      address: customer.address,
      locationId: customer.locationId,
      image: customer.image,
      email: customer.email
    }

    if (editedCustomer.name === ''|| editedCustomer.address === '' || editedCustomer.image === '' || editedCustomer.email === '' || editedCustomer.locationId === 0) {
      window.alert("Please complete the full form for edit")
      setIsLoading(false)
    } else {
      updateCustomer(editedCustomer).then(() => 
      navigate("/customers"))
    }
  }
  useEffect(() => {
    getAllLocations().then(setLocations)
  }, [])

  useEffect(() => {
    getCustomerById(customerId).then
    (customer => {
      setCustomer(customer)
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
              value={customer.name}
            />
            <label htmlFor="name">Customer name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address"
              value={customer.address}
            />
            <label htmlFor="address">Customer address</label>
            
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="image"
              value={customer.image}
            />
            <label htmlFor="image">Image</label>
            
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="email"
              value={customer.email}
            />
            <label htmlFor="email">Customer Email</label>
            <label htmlFor="location">Assign to location: </label>
					<select value={customer.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
          </div>
          {/* Be sure to include location and customer */}
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingCustomer}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );

}
 