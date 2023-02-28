import React from "react";
import Search from "./Search";

function Header({searchSubmitted, alphabeticalSort}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchSubmitted={searchSubmitted} />
      <label>
        Sort Alphabetically? 
        <input onChange={(e)=>alphabeticalSort(e.target.checked)} type='checkbox'/>
      </label>
    </header>
  );
}

export default Header;
