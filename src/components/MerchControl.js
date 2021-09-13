import React from 'react';
import { connect } from 'react-redux';
import NewMerchForm from './NewMerchForm';
import MerchList from './MerchList';
import MerchDetail from './MerchDetail';
import EditMerchForm from './EditMerchForm';
import Cart from './Cart';
import PropTypes from "prop-types";

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedMerch: null,
      editing: false,
      cart: []
    };
  }

  handleBuyingMerch = (merch) => {
    if (merch.quantity > 0) {
      merch.quantity--;
      const newMerch = this.state.cart.filter(m => m.id === this.state.selectedMerch.id)[0];
      const newCart = this.state.cart.filter(m => m.id !== this.state.selectedMerch.id);
      console.log('newMerch', newMerch);
      console.log('newCart', newCart)
      if(newMerch) {
        newMerch.quantity++;
        newCart.push(newMerch);
        console.log('newCartTrue', newCart)
      } else {
        const newMerch0 = {...merch};
        newMerch0.quantity = 1;
        newCart.push(newMerch0);
        console.log('newMerch0', newMerch0)
        console.log('newCartFalse', newCart)
      }
      this.setState({
        cart: newCart,
        selectedMerch: merch,
      });
    } else {
      alert('OUT OF STOCK!!!!!!');
    }
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
    console.log('props with adding new merch', this.props);
    console.log('this MerchControl class', this);
    const { dispatch } = this.props;
    const { id, name, quantity, description } = newMerch;
    const action = {
      type: 'ADD_MERCH',
      id: id,
      name: name,
      quantity: quantity,
      description: description,
    }
    dispatch(action);  
    this.setState({
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.props.masterMerchList[id]
    this.setState({selectedMerch: selectedMerch});
  }

  handleDeletingMerch = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_MERCH',
      id: id
    }
    dispatch(action);
    this.setState({ selectedMerch: null })
  }

  handleEditingMerchInList = (merchToEdit) => {
    const { dispatch } = this.props
    const { id, name, quantity, description } = merchToEdit;
    const action = {
      type: 'ADD_MERCH',
      id: id,
      name: name,
      quantity: quantity,
      description: description,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedMerch: null,
    });
  }
  
  handleRestockingMerch = (merchToEdit) => {
    const editedMasterMerchList = this.state.masterMerchList
    .filter(merch => merch.id !== this.state.selectedMerch.id)
    .concat(merchToEdit);
  this.setState({
      masterMerchList: editedMasterMerchList,
      editing: false,
      selectedMerch: merchToEdit
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
        onClickingBuy={this.handleBuyingMerch}
        onClickingDelete={this.handleDeletingMerch}
        onClickingEdit={this.handleEditClick}
        onClickingRestock= {this.handleRestockingMerch}
      />
      buttonText= "Return to Merch List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerch} />
      buttonText = "Return to Merch List"
    } else {
      currentlyVisibleState = <MerchList MerchList={this.props.masterMerchList} onMerchSelection={this.handleChangingSelectedMerch} />;
      buttonText = "Add Merch"
    }
    return (
      <React.Fragment>
        <div className="row">
          <div className='col-6'>
            <h1>Merchandise Stock</h1>
            {empty}
            {currentlyVisibleState}
            <button className ="btn btn-primary" onClick={this.handleClick}>{buttonText}</button>
          </div>
          <div className='col-3'>
          </div>
          <div className='col-3'>
          <h1>Cart: </h1>
            <Cart selectedMerch={this.state.selectedMerch} cart={this.state.cart}/>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

MerchControl.propTypes = {
  masterMerchList: PropTypes.object
};

const MapStateToProps = state => {
  return {
    masterMerchList: state
  }
}

MerchControl = connect(MapStateToProps)(MerchControl);

export default MerchControl;