import React from 'react'
import CountContainer from "./CountContainer.js";
import AboutContainer from "./AboutContainer.js";
import {BrowserRouter, Route } from "react-router-dom";

const Root = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={CountContainer} />
      <Route path="/about" component={AboutContainer } />
    </div>
  </BrowserRouter>
)

export default Root
