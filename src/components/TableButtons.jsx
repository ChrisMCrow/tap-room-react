import React from 'react';
import PropTypes from 'prop-types';

function TableButtons(props) {

  function handleHappyButton() {
    props.onHappyHour();
  }

  return(
    <div>
      <style jsx>{`
        .btn {
          margin-right: 15px;
        }        
      `}</style>
      <button className='btn'>Add New Keg</button>
      {props.happyHourStatus ? (
        <button onClick={handleHappyButton} className='btn'>End Happy Hour</button>
      ) : (
        <button onClick={handleHappyButton} className='btn'>Start Happy Hour</button>
      )}
    </div>
  );
}

TableButtons.propTypes = {
  happyHourStatus: PropTypes.bool,
  onHappyHour: PropTypes.func
}

export default TableButtons;