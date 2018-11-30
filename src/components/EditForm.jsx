import React from 'react';
import PropTypes from 'prop-types';

function EditForm(props) {
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _price = null;
  let _abv = null;
  let _remaining = null;

  function handleUpdateButton() {
    props.onUpdatedKeg({
      name: _name,
      brewer: _brewer,
      description: _description,
      price: _price,
      abv: _abv,
      remaining: _remaining
    }, props.kegId);
  }

  function handleCancelButton() {
    props.onUpdatedKeg(null);
  }

  return(
    <div>
      <style jsx>{`
        .btn {
          margin-right: 15px;
        }        
      `}</style>
      <form>
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
        <button onClick={handleUpdateButton} className="btn">Update</button>
        <button onClick={handleCancelButton} className="btn">Cancel</button>
      </form>
    </div>  );
}

EditForm.propTypes = {
  keg: PropTypes.object,
  kegId: PropTypes.string,
  onUpdatedKeg: PropTypes.func
};

export default EditForm;