// Add your code here
function submitData(name, email) {
  let configObject = {
    method: "POST", 
    headers: {
      "Content_Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  }
  return fetch("http://localhost:3000/users", configObject)
  .then(function(response){
    return response.json()
  })
  .then(function(object) {
    document.body.innerHTML = `<h1>${object["id"]}</h1>`
  })
  .catch(function(error) {
    document.body.innerHTML = error.message
  })
}