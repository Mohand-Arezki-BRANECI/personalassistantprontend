import React, {useState} from 'react';
const SearchBar = () => {
   const [searchInput, setSearchInput] = useState("");
   const [apiResponse, setApiResponse] = useState(null);
   const [error, setError] = useState(null);

   const handleChange = (e) => {
     setSearchInput(e.target.value);
   };
   

   const apiUrl = '/api/v1/auth/signup'; // Proxy server endpoint

   const handleSearch = () => {
     if (searchInput.length > 0) {
         const requestBody = {
             "firstName": "John",
             "lastName": "Doe",
             "email": "johndoe@example.com",
             "password": "secretpassword"
         };


         // Make the API request through the proxy server
       fetch(apiUrl, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
             //cross-origin resource sharing
              'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
         },
         body: JSON.stringify(requestBody),
       })
         .then(response => response.json())
         .then(data => {
           // Process the API response data
           console.log(data);
         })
         .catch(error => {
           // Handle any errors that occurred during the API call
           console.error(error);
         });
     }
   };
   
   
   return (
     <div>
       <input
         type="text"
         placeholder="Search here"
         onChange={handleChange}
         value={searchInput}
       />
       <button onClick={handleSearch}>Search</button>
     </div>
   );
   
}
export default SearchBar;