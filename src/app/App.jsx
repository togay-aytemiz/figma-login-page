import React from "react";
import LoginForm from "./components/LoginForm";
import ImageComp from "./components/ImageComp";

const App = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      <LoginForm  />
      <ImageComp />
    </div>
  );
};

export default App;
