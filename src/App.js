import React from "react";
import "./App.css";
import { Action, Brand, NavBar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar></NavBar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Possibility></Possibility>
      <Action></Action>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
