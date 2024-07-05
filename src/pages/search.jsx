import React from "react";

const Search = ({ RecipeName, searchResult }) => {
  return (
    <div className="search-cont">
      <div className="recipeName">
        Showing Search result(s) for {RecipeName}
      </div>
      <div className="searchArray"></div>
    </div>
  );
};

export default Search;
