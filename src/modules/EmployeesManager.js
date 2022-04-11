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

 export const addEmployee = (newEmployee) => {
   return fetch(`${remoteURL}/employees`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(newEmployee)
   }).then(res => res.json())
 }

 export const updateEmployee  = (editedEmployee) => {
	return fetch(`${remoteURL}/employees/${editedEmployee.id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(editedEmployee)
	}).then(data => data.json());
}