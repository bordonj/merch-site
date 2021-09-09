import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

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
      <ReusableForm
        formSubmissionHandler={handleNewMerchFromSubmission}
        buttonText="Add"
      />
    </React.Fragment>
  );
}


NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
}

export default NewMerchForm;