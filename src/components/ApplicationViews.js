import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from './animal/AnimalList.js'
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"
import { AnimalDetail } from "./animal/AnimalDetail.js"
import { LocationDetail } from "./location/LocationDetail"
import { CustomerDetails } from "./customer/CustomerDetails"
import { EmployeeDetails } from "./employee/EmployeeDetails"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalList />} />
                <Route path="/animals/:animalId" element={<AnimalDetail />} />

                {/* Render the location list when http://localhost:3000/locations */}
                <Route path="/locations" element={<LocationList />} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />

                {/* Render the customer list when http://localhost:3000/customers */}
                <Route path="/customers" element={<CustomerList />} />
                <Route path="/customers/:customerId" element={<CustomerDetails />} />

                {/* Render the employee list when http://localhost:3000/employees */}
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/employees/:employeeId" element={<EmployeeDetails />} />
            </Routes>
        </>
    )
}