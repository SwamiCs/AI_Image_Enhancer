import React from 'react'
import Home from './Components/Home'

const App = () => {
  return (
    <div className="flex flex-col flex items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800">
          AI Image Enhancer {" "}
        </h1>
        <p className="text-lg text-gray-500">
          Upload your Image and let AI enhance it into seconds
        </p>
      </div>
      <Home />
      <div className="text-lg text-gray-500 mt-6">Powered By AI</div>
    </div>
  );
};

export default App;
