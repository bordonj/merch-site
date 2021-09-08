import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewItemForm(props){
  function handleNewItemFromSubmission(e) {
    e.preventDefault();
    props.onNewItemCreation({
      name: e.target.name.value,
      description: e.target.description.value,
      quantity: e.target.quantity.value,
      id: v4()
    });
    console.log('newItemform', props);
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFromSubmission}>
        <input 
          type='text'
          name='name'
          placeholder='Item Name'
        />
        <input 
          type='text'
          name='description'
          placeholder='Description'
        />
        <input 
          type='text'
          name='quantity'
          placeholder='Quantity'
        />
        <button type='submit'>Submit!</button>
      </form>
    </React.Fragment>
  );
}


NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
}

export default NewItemForm;