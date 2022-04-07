const remoteURL = "http://localhost:8088"

export const getAllEmployees = () => {
  return fetch(`${remoteURL}/employees/?_expand=location`)
  .then(res => res.json())
}

export const deleteEmployees = id => {
  return fetch(`${remoteURL}/employees/${id}`, {
    method: "DELETE"
  })
  .then(res => res.json())
}

export const getEmployeeById = (id) => { 
  return fetch(`${remoteURL}/employees/${id}?_expand=location`)
  .then(res => res.json())
 }