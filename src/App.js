import React from "react";

//components
import Header from "./components/Header";
import Home from "./components/Home";

//global styles
import { GlobalStyle } from './GlobalStyle'

function App() {
  return (
    <div className="App">
    <Header />
    <Home />
    <GlobalStyle />
    </div>
  );
}

export default App;
