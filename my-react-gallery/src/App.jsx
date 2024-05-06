import React from 'react';
import ImageOne from './ImageOne';
import ImageTwo from './ImageTwo';
import ImageThree from './ImageThree';

function App() {
  return (
    <div className="gallery">
      <h1>Image Gallery Placeholder</h1>
      <div className="gallery-container">
        <ImageOne />
        <ImageTwo />
        <ImageThree />
      </div>
    </div>
  );
}

export default App;