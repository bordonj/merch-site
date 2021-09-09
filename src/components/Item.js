import React, {useState} from "react";
import PropTypes from "prop-types";

function Item(props) {
  const [itemCount, setItemCount] = useState(0)

  function addOne () {
    setItemCount(itemCount + 1)  
  }


  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>Left in stock: {props.quantity}</p>
      <button onClick={addOne}>Restock by 1</button>
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