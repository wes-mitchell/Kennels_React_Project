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