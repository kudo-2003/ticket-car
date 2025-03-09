import React from "react";
import AuthContainer from "./AuthContainer";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <main className="app-container">
        <AuthContainer />
      </main>
    </>
  );
};

export default App;
