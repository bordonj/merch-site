import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  console.log('props', props);
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>Left in stock: {props.quantity}</p>
      <hr />
    </React.Fragment>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  key: PropTypes.number.isRequired
};

export default Item;