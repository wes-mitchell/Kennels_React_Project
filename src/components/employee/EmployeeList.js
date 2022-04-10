import React, { useState, useEffect } from 'react';
//import the components we will need
import { EmployeeCard } from './Employee';
import { getAllEmployees } from '../../modules/EmployeesManager';
import { deleteEmployees } from '../../modules/EmployeesManager';
import { useNavigate } from 'react-router-dom';


export const EmployeeList = () => {
  // Set initial state to empty array
  const [employees, setEmployees] = useState([])
  const navigate = useNavigate()

  const getEmployees = () => {
    return getAllEmployees().then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
      console.log(employeesFromAPI);
    })
  }

  const handleDeleteEmployee = id => { 
    deleteEmployees(id)
    .then(() => getAllEmployees().then(setEmployees))
  }

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
    <section className="section-content">
      <button type="button"
              className="btn"
              onClick={() => {navigate("/employees/create")}}>
              Add Employee
      </button>
    </section>
    <div className="container-cards">
      {employees.map(employee => <EmployeeCard employee={employee} key={employee.id} handleDeleteEmployee={handleDeleteEmployee}/>)}
    </div>
    </>
  )
}