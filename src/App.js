// App.js
// 2020-02-01
import React, { useState } from 'react';
import logo from './logo.svg';
import FileUpload from 'react-file-upload-mobile';
import './App.css';


function App() {
  const [image, setImage] = useState();
  const [imageName, setImageName] = useState();
  const clearAttachment = () => {
    setImage('');
    setImageName('');
  }
  const onUpload = (file) => {
    // Use API here
  }
  const preview = () => {
    // Preview picture
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Upload a video to caption...
        </p>
        <FileUpload
          fileURL={image}
          fileName={imageName}
          displayOnly={false}
          preview={preview}
          compressImg={0.8}
          onFileDelete={clearAttachment}
          onFileUpload={onUpload}
        />
      </header>
    </div>
  );
}

export default App;
