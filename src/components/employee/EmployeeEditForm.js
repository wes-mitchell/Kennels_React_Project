import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateEmployee, getEmployeeById } from "../../modules/EmployeesManager"
import { getAllLocations } from "../../modules/LocationsManager";
import "./EmployeeForm.css"


export const EmployeeEditForm = () => {
  const [employee, setEmployee] = useState({ 
    name: "",
    locationId: 0,
    image: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState([])

  const {employeeId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // default values for locationId and customerId
    // if you already have these components/modules in place, you will need to include the correct information
    const editedEmployee = {
      id: employeeId,
      name: employee.name,
      locationId: employee.locationId,
	    image: employee.image,

    };

    if (employee.name === '' || employee.locationId === 0 || employee.image === '') {
      window.alert("Please fill out all fields")
      setIsLoading(false)
    } else {

  //pass the editedEmployee object to the database
  updateEmployee(editedEmployee)
    .then(() => navigate("/employees")
    )
  }}

  useEffect(() => {
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee(employee);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getAllLocations().then(setLocations)
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
              value={employee.name}
            />
            <label htmlFor="name">Employee name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="image"
              value={employee.image}
            />
            <label htmlFor="image">Image</label>
            <label htmlFor="location">Assign to location: </label>
              <select value={employee.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control" >
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
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
