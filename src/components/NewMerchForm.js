import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewMerchForm(props){
  function handleNewMerchFromSubmission(e) {
    e.preventDefault();
    props.onNewMerchCreation({
      name: e.target.name.value,
      description: e.target.description.value,
      quantity: e.target.quantity.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewMerchFromSubmission}>
        <input 
          type='text'
          name='name'
          placeholder='Merch Name'
          className="form-control"
          />
        <textarea 
          type='text'
          name='description'
          placeholder='Description'
          className="form-control"
          />
        <input 
          type='text'
          name='quantity'
          placeholder='Quantity'
          className="form-control"
        />
        <button 
          className="btn btn-warning"
          type='submit'>Submit!
        </button>
      </form>
    </React.Fragment>
  );
}


NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
}

export default NewMerchForm;