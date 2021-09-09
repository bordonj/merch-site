import React from "react";
import PropTypes from "prop-types";

function Merch(props) {

  return (
    <React.Fragment>
      <div onClick = {() => props.whenMerchClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>Left in stock: {props.quantity}</p>
        <hr />
      </div>
    </React.Fragment>
  )
}

Merch.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  whenMerchClicked: PropTypes.func
};

export default Merch;