import React from 'react';
import NewItemForm from './NewItemForm';
import MerchList from './MerchList';

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterMerchList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewItem = (newItem) => {
    const newMasterMerchList = this.state.masterMerchList.concat(newItem);
    this.setState({
      masterMerchList: newMasterMerchList,
      formVisibleOnPage: false
    });
  }
  
  render(){
    let empty = null;
    if (this.state.masterMerchList.length === 0) {
      empty = <h1>NO ITEMS YET</h1>
    }
      
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItem} />
      buttonText = "Return to Item List"
    } else {
      currentlyVisibleState = <MerchList itemList={this.state.masterMerchList} />;
      buttonText = "Add Item"
    }
    return (
      <React.Fragment>
        {empty}
        {currentlyVisibleState}
        <div class="toggle">
          <button className ="btn btn-primary" onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}

export default MerchControl;