import React from 'react';
import PropTypes from 'prop-types';

function EditForm(props) {
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _price = null;
  let _abv = null;
  let _remaining = null;

  function handleUpdateButton(event) {
    event.preventDefault();
    props.onUpdatedKeg({
      name: _name.value,
      brewer: _brewer.value,
      description: _description.value,
      price: _price.value,
      abv: _abv.value,
      remaining: _remaining.value
    }, props.kegId);
  }

  function handleCancelButton(event) {
    event.preventDefault();
    props.onUpdatedKeg(null);
  }

  return(
    <div>
      <style jsx>{`
        .btn {
          margin-right: 15px;
        }        
      `}</style>
      <form onSubmit={handleUpdateButton}>
        <input 
          type='text' 
          className='form-control mb-2' 
          defaultValue={props.keg.name} 
          placeholder='Name'
          ref={(input) => (_name = input)} 
        />
        <input 
          type="text" 
          className="form-control mb-2" 
          defaultValue={props.keg.brewer} 
          placeholder='Brewer'
          ref={(input) => (_brewer = input)} 
        />
        <input 
          type="text" 
          className="form-control mb-2" 
          defaultValue={props.keg.description} 
          placeholder='Description'
          ref={(input) => (_description = input)} 
        />
        <input 
          type="number" 
          className="form-control mb-2" 
          defaultValue={props.keg.price} 
          placeholder='Price'
          ref={(input) => (_price = input)} 
        />
        <input 
          type="text" 
          className="form-control mb-2" 
          defaultValue={props.keg.abv} 
          placeholder='ABV'
          ref={(input) => (_abv = input)} 
        />
        <input 
          type="number" 
          className="form-control mb-2" 
          defaultValue={props.keg.remaining} 
          placeholder='Remaining'
          ref={(input) => (_remaining = input)} 
        />
        <button type='submit' className="btn">Update</button>
        <button type='button' onClick={handleCancelButton} className="btn">Cancel</button>
      </form>
    </div>  
  );
}

EditForm.propTypes = {
  keg: PropTypes.object,
  kegId: PropTypes.string,
  onUpdatedKeg: PropTypes.func
};

export default EditForm;