import React from "react";
import PropTypes from "prop-types";
import Merch from "./Merch";

function Cart(props) {
  return (
    <React.Fragment>
      {props.cart.map((c) =>
      <>
        <h5>{c.name}</h5>
        <p>quantity bought: {c.quantity}</p>     
      </>   
      )}
    </React.Fragment>
  );
}

export default Cart;