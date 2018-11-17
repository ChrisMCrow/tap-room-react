import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Keg(props) {
  const editPath = `/edit/${props.name}`;
  return(
    <tr>
      <style jsx>{`
        .dropdown-menu {
          background-color:rgba(119, 70, 14, 0.95);
          color: white;
          border-radius: 1px;
          border: 1px solid rgb(196, 179, 179);
        }
        
        .dropdown-item:hover {
          color: rgb(196, 179, 179);
          background-color: rgba(0, 0, 0, .8);
          cursor: pointer;
        }
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