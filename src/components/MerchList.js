import React from "react";
import Merch from "./Merch";
import PropTypes from 'prop-types';

function MerchList(props){
  return (
    <React.Fragment>
      {Object.values(props.merchList).map((merch) =>
        <Merch 
          whenMerchClicked = {props.onMerchSelection}
          name = {merch.name}
          description = {merch.description}
          quantity = {merch.quantity}
          id={merch.id}
          key={merch.id}/>
      )}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.object,
  onMerchSelection: PropTypes.func
};

export default MerchList;

