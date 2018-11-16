import React from 'react';
import bgImage from '../assets/img/TapRoomBG1.jpg';

function App() {
  const bodyStyle = {

  };
  return(
    <div className='bodyStyle' style={bodyStyle}>
      <style jsx>{`
        .bodyStyle {
          background-image: url({bgImage});
        }
      `}</style>
      <div>

      </div>
    </div>
  );
}

export default App;