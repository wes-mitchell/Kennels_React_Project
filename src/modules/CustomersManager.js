const remoteURL = "http://localhost:8088"

export const getAllCustomers = () => {
  return fetch(`${remoteURL}/customers`)
  .then(res => res.json())
}

export const deleteCustomer = (id) => { 
  return fetch(`${remoteURL}/customers/${id}`, {
  method: 'DELETE'
 })
 .then(res => res.json())
}

export const getCustomerById = (id) => { 
  return fetch(`${remoteURL}/customers/${id}?_expand=location`)
  .then(res => res.json())
 }

 export const addCustomer = (newCustomer) => {
   return fetch(`${remoteURL}/customers`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(newCustomer)
   })
   .then(res => res.json())
 }

 export const updateCustomer  = (editedCustomer) => {
	return fetch(`${remoteURL}/customers/${editedCustomer.id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(editedCustomer)
	}).then(data => data.json());
}