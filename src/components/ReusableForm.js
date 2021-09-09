import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          className="form-control"
          type='text'
          name='name'
          placeholder='Name' />
        <textarea
          className="form-control"
          type='text'
          name='description'
          placeholder='description' />
        <input
          className="form-control"
          type='number'
          name='quantity'
          placeholder='quantity' />
          <button className="btn btn-warning" type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;