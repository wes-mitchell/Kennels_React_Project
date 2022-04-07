import React, { useState, useEffect } from 'react';
import { getAllCustomers } from '../../modules/CustomersManager';
import { CustomerCard } from './CustomerCard';
import { deleteCustomer } from '../../modules/CustomersManager';

export const CustomerList = () => { 
  const [customers, setCustomers] = useState([])

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
    <div className="container-cards">
      {customers.map(customer => <CustomerCard customer={customer} key={customer.id} handleDeleteCustomer={handleDeleteCustomer}/>)}
    </div>
  )
 }