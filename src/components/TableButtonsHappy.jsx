import React from 'react';
import { Link } from 'react-router-dom';

function TableButtonsHappy() {
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
      <Link to='/'>
        <button className='btn'>End Happy Hour</button>
      </Link>
    </div>
  );
}

export default TableButtonsHappy;