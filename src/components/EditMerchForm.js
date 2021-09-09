import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditMerchForm (props) {
  const { merch } = props;

  function handleEditMerchFormSubmission(event) {
    event.preventDefault();
    props.onEditMerch({
      name: event.target.name.value, 
      description: event.target.description.value, quantity: event.target.quantity.value, 
      id: merch.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditMerchFormSubmission}
        buttonText="Update Merch" />
    </React.Fragment>
  );
}

EditMerchForm.propTypes = {
  merch: PropTypes.object,
  onEditMerch: PropTypes.func
};

export default EditMerchForm;