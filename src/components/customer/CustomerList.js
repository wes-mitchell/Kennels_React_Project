import React, { useState, useEffect } from 'react';
import { getAllCustomers } from '../../modules/CustomersManager';
import { CustomerCard } from './CustomerCard';
import { deleteCustomer } from '../../modules/CustomersManager';
import { useNavigate } from 'react-router-dom';

export const CustomerList = () => { 
  const [customers, setCustomers] = useState([])
  const navigate = useNavigate()
  const getCustomers = () => {
    return getAllCustomers()
    .then(customersFromAPI => 
      setCustomers(customersFromAPI))
  }

   const handleDeleteCustomer = (id) => { 
    deleteCustomer(id)
    .then(() => getAllCustomers().then(setCustomers))
   }

  useEffect(() => {
    getCustomers()
  }, [])

  return (
    <>
    <section className="section-content">
      <button type="button"
              className="btn"
              onClick={() => {navigate("/customers/create")}}>
      Add Customer
      </button>
    </section>
    <div className="container-cards">
      {customers.map(customer => <CustomerCard customer={customer} key={customer.id} handleDeleteCustomer={handleDeleteCustomer}/>)}
    </div>
    </>
  )
 }