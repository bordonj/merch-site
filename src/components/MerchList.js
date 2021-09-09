import React from "react";
import Merch from "./Merch";
import PropTypes from 'prop-types';

function MerchList(props){
  return (
    <React.Fragment>
      {props.MerchList.map((merch, index) =>
        <Merch name = {merch.name}
            description = {merch.description}
            quantity = {merch.quantity}
            key={index} />
      )}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  MerchList: PropTypes.array
};

export default MerchList;

