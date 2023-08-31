import React from "react";
import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer />
    </div>
  );
}

export default App;

