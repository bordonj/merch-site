import React from "react";
import Item from "./Item";
import PropTypes from 'prop-types';

function MerchList(props){
  return (
    <React.Fragment>
      
      {props.itemList.map((item, index) =>
        <Item name = {item.name}
            description = {item.description}
            quantity = {item.quantity}
            key={index} />
      )}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  itemList: PropTypes.array
};

export default MerchList;

