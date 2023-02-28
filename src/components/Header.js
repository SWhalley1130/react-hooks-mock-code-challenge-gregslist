import React from "react";
import Search from "./Search";

function Header({searchSubmitted}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchSubmitted={searchSubmitted} />
    </header>
  );
}

export default Header;
