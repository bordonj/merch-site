import React from "react";
import PropTypes from 'prop-types';

function MerchDetail(props){
  const {merch, onClickingDelete, onClickingBuy} = props;

  let quantity = merch.quantity;
  if (quantity === 0) {
    quantity = "Out of Stock";
  }

  function handleRestockMerchSubmission(event) {
    event.preventDefault();
    props.onClickingRestock({
      ...merch,
      quantity: parseInt(merch.quantity) + parseInt(event.target.quantity.value),
    });
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

      <form onSubmit={handleRestockMerchSubmission}>
        <input
          className="form-control"
          type='number'
          name='quantity'
          placeholder='quantity' />
          {/* // defaultValue={startingQuantity} */}
          <button className="btn btn-warning" type='submit'>restock</button>
      </form>
      <hr/>
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default MerchDetail;