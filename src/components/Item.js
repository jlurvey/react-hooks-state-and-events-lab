import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
/*   const itemClass = inCart ? "in-cart" : "";
  const cartButtonText = inCart ? "Remove from Cart" : "Add to Cart"
  const cartButtonClass = inCart ? "remove" : "add" */
  

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={() => setInCart((inCart) => !inCart)}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
