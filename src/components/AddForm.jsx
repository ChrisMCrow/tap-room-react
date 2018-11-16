import React from 'react';
import { Link } from 'react-router-dom';

function AddForm() {
  return(
    <div>
      <style jsx>{`
        .btn {
          margin-right: 15px;
        }        
      `}</style>
      <form>
        <input type='text' className='form-control mb-2' placeholder='name'/>
        <input type="text" className="form-control mb-2" name="brand" placeholder="Brand" />
        <input type="number" className="form-control mb-2" name="price" placeholder="Price" />
        <input type="number" className="form-control mb-2" name="alcoholContent" placeholder="Alcohol Content" />
        <Link to='/'>
          <button className="btn">Add</button>
        </Link>
        <Link to='/'>
          <button className="btn">Cancel</button>
        </Link>
      </form>
    </div>
  );
}

export default AddForm;