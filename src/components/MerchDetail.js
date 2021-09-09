import React from "react";
import PropTypes from 'prop-types';

function MerchDetail(props){
  const {merch, onClickingDelete} = props;

  return (
    <React.Fragment>
      <h1>Name: {merch.name}</h1>
      <h3>Description: {merch.description}</h3>
      <h3>Quantity: {merch.quantity}</h3>
      <h3>ID: {merch.id}</h3>
      <button onClick={ props.onClickingEdit }>
        Update Merch
      </button>
      <button 
        onClick={() => onClickingDelete(merch.id)}>
          Delete Merch
      </button>
      <hr/>
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default MerchDetail;