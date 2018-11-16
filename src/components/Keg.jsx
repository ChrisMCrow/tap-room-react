import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return(
    <tr>
      <style jsx>{`
        .btn {
          border-radius: 1px;
          border: 1px solid rgb(196, 179, 179);
          color: rgb(196, 179, 179);
          background-color: black;
          font-family: 'Lora', sans-serif;
          font-weight: 700;
        }
      
      .btn:hover {
          background-color: rgba(206, 121, 23, 0.7);
          border: 1px solid rgb(196, 179, 179);
        }
      
      `}</style>
      <td>{props.name} <em>({props.description})</em></td>
      <td>{props.brewer}</td>
      <td>{props.price}</td>
      <td>{props.abv}</td>
      <td>{props.remaining}</td>
      <td><button className='btn'>Edit</button></td>
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