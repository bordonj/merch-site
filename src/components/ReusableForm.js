import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const startingName = props.merch ? props.merch.name : '';
  const startingDescription = props.merch ? props.merch.description : '';
  const startingQuantity = props.merch? props.merch.quantity : '';

  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          className="form-control"
          type='text'
          name='name'
          placeholder='Name' 
          defaultValue={startingName}/>
        <textarea
          className="form-control"
          type='text'
          name='description'
          placeholder='description' 
          defaultValue={startingDescription}/>
        <input
          className="form-control"
          type='number'
          name='quantity'
          placeholder='quantity' 
          defaultValue={startingQuantity}/>
          <button className="btn btn-warning" type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  merch: PropTypes.object
};

export default ReusableForm;