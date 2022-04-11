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
import { AnimalForm } from './animal/AnimalForm'
import { CustomerForm } from "./customer/CustomerForm"
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationForm } from "./location/LocationForm"
import { MadLib } from "../MadLib"
import { Navigate } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { AnimalEditForm } from "./animal/AnimalEditForm"
import { CustomerEditForm } from "./customer/CustomerEditForm"
import { EmployeeEditForm } from "./employee/EmployeeEditForm"



 
export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
    
    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    return (
        <>
            <Routes>
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />         
                {/* Render the location list when http://localhost:3000/ */}
                <Route path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<PrivateRoute>
                                        <AnimalList />
                                        </PrivateRoute>} />
                <Route path="/animals/:animalId" element={<AnimalDetail />} />
                <Route path="/animals/create" element={<AnimalForm />} />
                <Route path="/animals/:animalId/edit" element={<PrivateRoute>
                                                                <AnimalEditForm />       
                                                                </PrivateRoute>} />

                {/* Render the location list when http://localhost:3000/locations */}
                <Route path="/locations" element={<PrivateRoute>
                                                    <LocationList />
                                                    </PrivateRoute>} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />
                <Route path="/locations/create" element={<LocationForm />} />

                {/* Render the customer list when http://localhost:3000/customers */}
                <Route path="/customers" element={<PrivateRoute>
                                                    <CustomerList />
                                                    </PrivateRoute>} />
                <Route path="/customers/:customerId" element={<CustomerDetails />} />
                <Route path="/customers/create" element={<CustomerForm />} />
                <Route path="/customers/:customerId/edit" element={<PrivateRoute>
                                                                <CustomerEditForm />
                                                                </PrivateRoute>} />

                {/* Render the employee list when http://localhost:3000/employees */}
                <Route path="/employees" element={<PrivateRoute>
                                                    <EmployeeList />
                                                    </PrivateRoute>} />
                <Route path="/employees/:employeeId" element={<EmployeeDetails />} />
                <Route path="/employees/create" element={<EmployeeForm />} />
                <Route path="/employees/:employeeId/edit" element={<PrivateRoute>
                                                    <EmployeeEditForm />
                                                    </PrivateRoute>} />                
                <Route path="/madlib" element={<MadLib /> } />
            </Routes>
        </>
    )
}