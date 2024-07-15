// Add your code here
// Submitting user data
function submitData(name, email) {
    const data = {
      name: name,
      email: email  // Create a data object with the provided name and email
    };
  
    // Create a configuration object for the fetch request
    const configObj = {
      method: "POST", // HTTP verb for sending data
      headers: {
        "Content-Type": "application/json", // The type of data being sent
        "Accept": "application/json" // The type of data expected in response
      },
      body: JSON.stringify(data) // Data object converted to a JSON string
    };
  
    // Send a POST request to the server
    return fetch("http://localhost:3000/users", configObj) //Sending the POST request to http://localhost:3000/users.
      .then(function(response) {
        return response.json(); 
      })
      .then(function(object) {
        console.log(object); // Log the response object to the console
        document.body.innerHTML = object.id; // Display the new user's id in the document body
      })
      .catch(function(error) {
        alert("An error occurred!"); // Display an alert if an error occurs
        document.body.innerHTML = error.message; // Display the error message in the document body
      });
  }
  
  // How to call the function with sample data
  submitData("Ronnie Warr", "ronnie.warr@example.com");
  