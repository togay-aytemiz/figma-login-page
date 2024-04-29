import React from "react";
import LoginForm from "./components/LoginForm";
import ImageComp from "./components/ImageComp";

const App = () => {
  return (
    <div className="relative">

      <div className="flex items-center justify-center gap-5 mt-20 relative">
        <LoginForm  />
        <ImageComp />
      </div>

      <img
         src="/assets/rectangle.png"
         alt="red"
         style={{ width: '649.33px', height: '1143.68px', position: 'absolute', top:'-110px', right: '0', zIndex: '-1' }}
      />

    </div>
  );
};

export default App;
