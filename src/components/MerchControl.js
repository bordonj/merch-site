import React from 'react';
import NewMerchForm from './NewMerchForm';
import MerchList from './MerchList';
import MerchDetail from './MerchDetail';
import EditMerchForm from './EditMerchForm';

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterMerchList: [],
      selectedMerch: null,
      editing: false
    };
  }

  handleEditClick = () => {
    console.log('handleEditClick reached');
    this.setState({editing: true});
  }

  handleClick = () => {
    if (this.state.selectedMerch != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedMerch: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewMerch = (newMerch) => {
    const newMasterMerchList = this.state.masterMerchList.concat(newMerch);
    this.setState({
      masterMerchList: newMasterMerchList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.state.masterMerchList.filter(merch => merch.id === id)[0];
    this.setState({selectedMerch: selectedMerch});
  }

  handleDeletingMerch = (id) => {
    const newMasterMerchList = this.state.masterMerchList.filter(merch => merch.id !== id);
    this.setState({
      masterMerchList: newMasterMerchList,
      selectedMerch: null
    });
  }

  handleEditingMerchInList = (merchToEdit) => {
    const editedMasterMerchList = this.state.masterMerchList
      .filter(merch => merch.id !== this.state.selectedMerch.id)
      .concat(merchToEdit);
    this.setState({
        masterMerchList: editedMasterMerchList,
        editing: false,
        selectedMerch: null
      });
  }
  
  render(){
    let empty = null;
    if (this.state.masterMerchList.length === 0) {
      empty = <h1>NO MERCH YET</h1>
    }
      
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.editing) {
      currentlyVisibleState = <EditMerchForm 
        merch = {this.state.selectedMerch} 
        onEditMerch = {this.handleEditingMerchInList} />
      buttonText = "Return to Merch List";
    } else if (this.state.selectedMerch != null) {
      currentlyVisibleState = <MerchDetail 
        merch = {this.state.selectedMerch}
        onClickingDelete={this.handleDeletingMerch}
        onClickingEdit={this.handleEditClick}
      />
      buttonText= "Return to Merch List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerch} />
      buttonText = "Return to Merch List"
    } else {
      currentlyVisibleState = <MerchList MerchList={this.state.masterMerchList} onMerchSelection={this.handleChangingSelectedMerch} />;
      buttonText = "Add Merch"
    }
    return (
      <React.Fragment>
        {empty}
        {currentlyVisibleState}
        <div className="toggle">
          <button className ="btn btn-primary" onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}

export default MerchControl;