import React from "react";
import PropTypes from "prop-types";

function Merch(props) {

  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>Left in stock: {props.quantity}</p>
      <hr />
    </React.Fragment>
  )
}

Merch.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  key: PropTypes.number.isRequired
};

export default Merch;