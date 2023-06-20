import React, {useState} from 'react';
const SearchBar = () => {
   const [searchInput, setSearchInput] = useState("");

   const handleChange = (e) => {
     setSearchInput(e.target.value);
   };
   
   const handleSearch = () => {
     if (searchInput.length > 0) {
       console.log(searchInput);
       // Perform search or any other action
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