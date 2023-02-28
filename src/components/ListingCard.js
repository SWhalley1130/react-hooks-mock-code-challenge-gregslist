import React, {useState} from "react";

function ListingCard({item,itemWasDelted}) {
  const [isLiked, setIsLiked]=useState(false)
  function handleClick()
  {
    setIsLiked(!isLiked)
  }

  function handleDelete()
  {
    fetch(`http://localhost:6001/listings/${item.id}`,
    {
      method:'DELETE',
      headers:
      {
        "Content-Type":'applictaion.json',
        "Accepts":'applictaion.json'
      },
      body:JSON.stringify(item)
    })
    .then(itemWasDelted(item))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={"description"} />
      </div>
      <div className="details">
        {isLiked ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
