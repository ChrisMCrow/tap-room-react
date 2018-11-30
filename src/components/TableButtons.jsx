import React from 'react';
import PropTypes from 'prop-types';

function TableButtons(props) {
  return(
    <div>
      <style jsx>{`
        .btn {
          margin-right: 15px;
        }        
      `}</style>
      <button onClick = {() => {props.onAddForm();}} className = 'btn'>Add New Keg</button>
      {props.happyHourStatus ? (
        <button onClick = {() => {props.onHappyHour();}} className = 'btn'>End Happy Hour</button>
      ) : (
        <button onClick = {() => {props.onHappyHour();}} className = 'btn'>Start Happy Hour</button>
      )}
    </div>
  );
}

TableButtons.propTypes = {
  happyHourStatus: PropTypes.bool,
  onHappyHour: PropTypes.func,
  onAddForm: PropTypes.func
};

export default TableButtons;