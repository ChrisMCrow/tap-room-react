import React from 'react';
import { Link } from 'react-router-dom';

function TableButtons() {
  return(
    <div>
      <style jsx>{`
        .btn {
          margin-right: 15px;
        }        
      `}</style>
      <Link to='/add'>
        <button className='btn'>Add New Keg</button>
      </Link>
      <Link to='/happyHour'>
        <button className='btn'>Start Happy Hour</button>
      </Link>
    </div>
  );
}

export default TableButtons;