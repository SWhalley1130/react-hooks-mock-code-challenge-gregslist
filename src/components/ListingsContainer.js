import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, itemWasDelted, isAlpha }) {
;
  const sorted = [...listings];
  sorted.sort((a, b) => a.description.localeCompare(b.description));
  console.log(isAlpha)

  

  return (
    <main>
      <ul className="cards">
        {
          isAlpha ? 
          sorted.map(item =>
            <ListingCard itemWasDelted={itemWasDelted} key={item.id} item={item} />
        )
        :
          listings.map(item =>
            <ListingCard itemWasDelted={itemWasDelted} key={item.id} item={item} />
      )
      }
      </ul>
    </main>
  );
}

export default ListingsContainer;
