import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings]=useState([]);
  const [searched, setSearched]=useState([]);
  const [isAlpha, setIsAlpha]=useState(false)

  useEffect(()=>
  {
    fetch(`http://localhost:6001/listings`)
    .then(res=>res.json())
    .then(data=>
      {
        setListings(data);
        setSearched(data)
      })
  },[])

  function itemWasDelted(deltedItem)
  {
    const filteredItems=listings.filter(item=>item!==deltedItem)
    setListings(filteredItems)
  }

  function searchSubmitted(term)
  {
    const sortedItems=listings.filter(item=>item.description.includes(term));
    setSearched(sortedItems);
  }
  
  return (
    <div className="app">
      <Header 
        alphabeticalSort={setIsAlpha}
        isAlpha={isAlpha}
        searchSubmitted={searchSubmitted} />
      <ListingsContainer 
        isAlpha={isAlpha}
        itemWasDelted={itemWasDelted} 
        listings={searched}/>
    </div>
  );
}

export default App;