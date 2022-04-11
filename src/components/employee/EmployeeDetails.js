import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployeeById } from "../../modules/EmployeesManager";
import './EmployeeDetails.css';
import { deleteEmployees } from "../../modules/EmployeesManager";
import { Link } from "react-router-dom";

export const EmployeeDetails = () => { 
  const [employee, setEmployee] = useState({name: ''})
  const [isLoading, setIsLoading] = useState(true)

  const {employeeId} = useParams()
  const navigate = useNavigate()

  const handleDelete = () => {
    setIsLoading(true)
    deleteEmployees(employeeId).then(() => {
      navigate('/employees')
    })
  }

  useEffect(() => {
    getEmployeeById(employeeId)
    .then(employee => {
      setEmployee(employee);
    }); 
    setIsLoading(false)
  }, [employeeId])

  return (
    <section className="employee">
      <picture>
        <img src={employee.image} alt="employee" className="employeeImage" />
      </picture>
    <h3 className="employee__name">{employee.name}</h3>
    <div className="employee__location">Location: {employee.location?.name}</div>
    <div className="employee__locationAddress">Address: {employee.location?.address}</div>
    <button type="button" disabled={isLoading} onClick={handleDelete}>Peace</button>
    </section>
  )
}