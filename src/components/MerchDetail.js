import React from "react";
import PropTypes from 'prop-types';

function MerchDetail(props){
  const {merch} = props;

  return (
    <React.Fragment>
    <h1>Name: {merch.name}</h1>
    <h3>Description: {merch.description}</h3>
    <h3>Quantity: {merch.quantity}</h3>
    <h3>ID: {merch.id}</h3>
    <hr/>
  </React.Fragment>
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object
};

export default MerchDetail;