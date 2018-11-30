import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
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
        .mute {
          border: 1px solid #4d4d4d !important;
          color: #4d4d4d !important;
        }
        .mute:hover {
          cursor: default;
          background-color: black;
        }
      `}</style>
      <td>{props.name} <em>({props.description})</em></td>
      <td>{props.brewer}</td>
      {props.happyHour ? (
        <td>{props.price * .9}</td>
      ) : (
        <td>{props.price}</td>
      )}
      <td>{props.abv}</td>
      <td>{props.remaining}</td>
      <td>
        {props.selectedKeg ? (
          <button className='btn mute'>Edit</button>
        ) : (
          <button onClick={() => {props.onSelectedKeg(props.id);}} className='btn'>Edit</button>
        )}
      </td>
      <td>
        <div className='dropdown'>
          <button className='btn dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Sell</button>
          <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
            <a onClick={() => {props.onSell(props.id, 1)}} className='dropdown-item'>Pint</a>
            <a onClick={() => {props.onSell(props.id, 2)}} className='dropdown-item'>Growler</a>
            <a onClick={() => {props.onSell(props.id, 4)}} className='dropdown-item'>Large Growler</a>
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
  remaining: PropTypes.number,
  id: PropTypes.string,
  onSelectedKeg: PropTypes.func,
  selectedKeg: PropTypes.string,
  happyHour: PropTypes.bool,
  onSell: PropTypes.func
};

export default Keg;