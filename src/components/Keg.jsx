import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Keg(props) {
  const editPath = `/edit/${props.name}`;
  return(
    <tr>
      <style jsx>{`
  
      `}</style>
      <td>{props.name} <em>({props.description})</em></td>
      <td>{props.brewer}</td>
      <td>{props.price}</td>
      <td>{props.abv}</td>
      <td>{props.remaining}</td>
      <td>
        <Link to={editPath}>
          <button className='btn'>Edit</button>
        </Link>
      </td>
      <td>
        <div className='dropdown'>
          <button className='btn dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Sell</button>
          <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
            <a href='#' className='dropdown-item'>Pint</a>
            <a href='#' className='dropdown-item'>Growler</a>
            <a href='#' className='dropdown-item'>Large Growler</a>
          </div>
        </div>
      </td>
      <td><button className='btn'>Delete</button></td>
    </tr>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string,
};

export default Keg;