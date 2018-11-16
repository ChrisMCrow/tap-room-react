import React from 'react';
import bgImage from '../assets/img/TapRoomBG1.jpg';
import MainContent from './MainContent';

function App() {
  return(
    <div className='container'>
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Syncopate:700');
        @import url('https://fonts.googleapis.com/css?family=Lora:400,700');        
        
        body {
          background-image: url(${bgImage});
          background-repeat: no-repeat;
          background-color: black;
          background-position-x: center;
          background-position-y: top;
        }
        .jumbotron {
          margin-top: 20px;
          margin-bottom: 0px;
          text-transform: uppercase;
          font-size: 50px;
          text-shadow: 2px 2px 2px black;
          color: rgb(196, 179, 179);
          font-family: 'Syncopate', sans-serif;
          text-align: center;
          background-color: rgba(0, 0, 0, .5);
          border: 1px solid rgb(196, 179, 179);
          border-radius: 5px;
          box-shadow: 2px 2px 5px rgb(58, 58, 58);
      }      
      `}</style>
      <div>
        <h1 className='jumbotron'>The Tap Room</h1>
        <div>
          <MainContent/>
        </div>
      </div>
    </div>
  );
}

export default App;