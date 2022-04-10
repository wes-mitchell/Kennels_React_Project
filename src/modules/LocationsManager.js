const remoteURL = "http://localhost:8088"

export const getLocationById = (id) => {
  return fetch(`${remoteURL}/locations/${id}`)
  .then(res => res.json())
}

export const getAllLocations = () => {
  return fetch(`${remoteURL}/locations`)
  .then(res => res.json())
}

export const deleteLocation = (id) => { 
  return fetch(`${remoteURL}/locations/${id}`,  {
    method: "DELETE"
  })
  .then(res => res.json())
}

export const addLocation = (newLocation) => {
  return fetch(`${remoteURL}/locations`, {
  method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newLocation)
  })
  .then(res => res.json())
}