import React from 'react';
import PropTypes from 'prop-types';
import v4 from 'uuid';

function AddForm(props) {
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _price = null;
  let _abv = null;
  let _remaining = null;

  function handleAddButton(event) {
    event.preventDefault();
    props.onAddKeg({
      name: _name.value,
      brewer: _brewer.value,
      description: _description.value,
      price: _price.value,
      abv: _abv.value,
      remaining: parseInt(_remaining.value)
    }, v4());
  }

  function handleCancelButton(event) {
    event.preventDefault();
    props.onAddKeg(null);
  }

  return(
    <div>
      <style jsx>{`
        .btn {
          margin-right: 15px;
        }        
      `}</style>
      <form onSubmit = {handleAddButton}>
        <input 
          type = 'text' 
          className = 'form-control mb-2'
          placeholder = 'Name'
          ref = {(input) => (_name = input)} 
        />
        <input 
          type = "text" 
          className = "form-control mb-2" 
          placeholder = 'Brewer'
          ref = {(input) => (_brewer = input)} 
        />
        <input 
          type = "text" 
          className = "form-control mb-2" 
          placeholder = 'Description'
          ref = {(input) => (_description = input)} 
        />
        <input 
          type = "number" 
          className = "form-control mb-2" 
          placeholder = 'Price'
          ref = {(input) => (_price = input)} 
        />
        <input 
          type = "text" 
          className = "form-control mb-2" 
          placeholder = 'ABV'
          ref = {(input) => (_abv = input)} 
        />
        <input 
          type = "number" 
          className = "form-control mb-2" 
          placeholder = 'Remaining'
          ref = {(input) => (_remaining = input)} 
        />
        <button type = 'submit' className = "btn">Add</button>
        <button type = 'button' onClick = {handleCancelButton} className = "btn">Cancel</button>
      </form>
    </div>
  );
}

AddForm.propTypes = {
  onAddKeg: PropTypes.func
};

export default AddForm;