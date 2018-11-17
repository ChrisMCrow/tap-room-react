import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function EditForm(props) {
  return(
    <div>
      <style jsx>{`
        .btn {
          margin-right: 15px;
        }        
      `}</style>
      <form>
        <input type='text' className='form-control mb-2' value={props.name} placeholder='update name'/>
        <input type="text" className="form-control mb-2" name="brand" value={props.brewer} placeholder='update brand'/>
        <input type="number" className="form-control mb-2" name="price" value={props.price} placeholder='update price'/>
        <input type="number" className="form-control mb-2" name="alcoholContent" value={props.abv} placeholder='update abvgit'/>
        <Link to='/'>
          <button className="btn">Update</button>
        </Link>
        <Link to='/'>
          <button className="btn">Cancel</button>
        </Link>
      </form>
    </div>  );
}

EditForm.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string
};

export default EditForm;