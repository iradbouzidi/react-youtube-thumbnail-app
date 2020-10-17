import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";


function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__page">
        <Sidebar />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
//2.08.30