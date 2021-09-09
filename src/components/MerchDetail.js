import React from "react";
import PropTypes from 'prop-types';

function MerchDetail(props){
  const {merch, onClickingDelete, onClickingBuy} = props;
  console.log('hi', props.merch)

  let quantity = merch.quantity;
  if (quantity === 0) {
    quantity = "Out of Stock";
  }

  return (
    <React.Fragment>
      <h1>Name: {merch.name}</h1>
      <h3>Description: {merch.description}</h3>
      <h3>Quantity: {quantity}</h3>
      <h3>ID: {merch.id}</h3>
      <button 
        onClick={ props.onClickingEdit }
        className="btn btn-success">
        Update Merch
      </button>
      <button 
        className="btn btn-danger"
        onClick={() => onClickingDelete(merch.id)}>
          Delete Merch
      </button>
      <button 
        className="btn btn-success"
        onClick={() => onClickingBuy(merch)}>
          Buy 1
      </button>
      <hr/>
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
};

export default MerchDetail;