import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom";

export const EmployeeCard = ({employee, handleDeleteEmployee}) => {
    
    return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={'/images/dog.svg'} alt="My Dog" />
            </picture>
            <h3>Name: <span className="card-employeename">
              {employee.name}
            </span></h3>
            <p>Address: {employee.location.address}</p>
            <Link to={`/employees/${employee.id}`}>
                <button>Details</button>
            </Link>
            <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Discharge</button>
            <Link to={`/employees/${employee.id}/edit`}>
                <button>Edit</button>
            </Link>
          </div>
        </div>
      );
    }