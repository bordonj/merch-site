import React from "react";
import PropTypes from "prop-types";
import Merch from "./Merch";

function Cart(props) {
  return (
    <React.Fragment>
      {props.cart.map((c) =>
        <Merch 
          name = {c.name}
          description = {c.description}
          quantity = {c.quantity}
          id={c.id}
          key={c.id}/>
      )}
    </React.Fragment>
  );
}

export default Cart;