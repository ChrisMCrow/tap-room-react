import React from 'react';

function HappyHour() {
  return(
    <div className='hhWrapper'>
      <style jsx>{`
        .hhWrapper {
          position: relative;
          width: 100%;
          text-align: center;
        }
        #hhBanner {
          background-color: rgba(0, 0, 0, .9);
          font-family: 'Syncopate', sans-serif;
          color: rgb(196, 179, 179);
          padding: 30px;
          margin: 0;
          height: 88px;

          position: absolute;
          top: -88px;
          width: 100%;
        }
      `}</style>
      <h2 id='hhBanner'>It's Happy Hour!</h2>
    </div>
  );
}

export default HappyHour;