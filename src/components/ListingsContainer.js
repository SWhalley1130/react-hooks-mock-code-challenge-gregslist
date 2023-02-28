import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings,itemWasDelted}) {
  return (
    <main>
      <ul className="cards">
        {listings.map(item=>
          <ListingCard itemWasDelted={itemWasDelted} key={item.id} item={item} />
          )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
