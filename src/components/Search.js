import React, { useState } from "react";

// set up search component, save search information to variables to be called for result
const Search = (props) => {
  const [searchKey, setSearchName] = useState("");
  
  const searchByName = (event) => {
    setSearchName(event.target.value);
  }

  // prevent default submit action and search for key entered 
  const getResults = (e) => {
    e.preventDefault();
    props.search(searchKey);
  }

  return (
    <form className="search">
      <input value={searchKey} onChange={searchByName} placeholder="movie/show title"/>
      <input onClick={getResults} type="submit" value="Search"/>
    </form>
  );
}

export default Search;