import React from "react";
import { useState, useEffect } from "react";
import "./EmployeeForm.css"
import { addEmployee } from "../../modules/EmployeesManager";
import { useNavigate } from "react-router-dom";
import { getAllLocations } from "../../modules/LocationsManager";

export const EmployeeForm = () => { 
  const [employee, setEmpoloyee] = useState({
    name: '',
    locationId: 0,
    image: ''
  })

  const [isLoading, setIsLoading] = useState(true)
  const [locations, setLocations] = useState([])
  const navigate = useNavigate()

  const handleControlledInputChange = (event) => {
    const newEmployee = {...employee}
    let selectedVal = event.target.value
    if (event.target.id.includes('Id')) {
      selectedVal = parseInt(selectedVal)
    }
    newEmployee[event.target.id] = selectedVal
    setEmpoloyee(newEmployee)
  }
  
  useEffect(() => {
    getAllLocations().then(setLocations)
  }, [])

  const handleClickSaveEmployee = (event) => {
    event.preventDefault()

    if (employee.name === '' || employee.image === '' || employee.locationId === 0) {
      window.alert("c'mon now. seriously, fill out damn form.")
    } else {
      // setIsLoading(true)
      addEmployee(employee).then(() => {
        navigate('/employees')
      })
    }
  }

  return (
  <form className="employeeForm">
  <h2 className="employeeForm__title">New Employee</h2>
  <fieldset>
    <div className="form-group">
      <label htmlFor="name">employee name:</label>
      <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="employee name" value={employee.name} />
    </div>
  </fieldset>
  <fieldset>
    <div className="form-group">
      <label htmlFor="image">employee image:</label>
      <input type="text" id="image" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="employee name" value={employee.image} />
    </div>
  </fieldset>
  <fieldset>
    <div className="form-group">
      <label htmlFor="location">Assign to location: </label>
      <select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
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
    onClick={handleClickSaveEmployee}>
    Save Employee
      </button>
  </form>
)
}
