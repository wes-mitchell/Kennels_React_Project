import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import { CustomerCard } from "./customer/CustomerCard"
import "./Kennel.css"
import "./customer/Customer.css"
import { EmployeeCard } from "./employee/Employee"
import "./employee/Employee.css"
import { LocationCard } from "./location/Location"
import "./location/Location.css"
import { PropsAndState } from "./PropsAndState"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"


export const Kennel = () => (
    <>
      <NavBar />
      <ApplicationViews />
    </>
)