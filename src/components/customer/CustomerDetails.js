import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCustomerById } from "../../modules/CustomersManager";
import './CustomerDetails.css';
import { deleteCustomer } from "../../modules/CustomersManager";


export const CustomerDetails = () => {
  const [customer, setCustomer] = useState({ name: '', address: ''})
  const [isLoading, setIsLoading] = useState(true)

  const {customerId} = useParams()
  const navigate = useNavigate()

  const handleDelete = () => {
    setIsLoading(true)
    deleteCustomer(customerId).then(() => {
      navigate("/customers")
    })
  }

  useEffect(() => {
    getCustomerById(customerId)
      .then(customer => {
        console.log(customer);
        setCustomer(customer);
      });
      setIsLoading(false)
  }, [customerId]);

  return (
    <section className="customer">
      <picture>
        <img src={customer.image} alt="customer" className="customerPhoto"/>
      </picture>
    <h3 className="customer__name">{customer.name}</h3>
    <div className="customer__address">Address: {customer.address}</div>
    {/* What's up with the question mark???? See below.*/}
    <div className="customer__vetLocation">Current Vet: {customer.location?.name}</div>
    <button type="button" onClick={handleDelete} disabled={isLoading}>Bye Now</button>
  </section>
  )


}