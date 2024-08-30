
import React from "react";
import './../styles/App.css';
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

const App = () => {
  return (
    <BrowserRouter>
    <Layout/>
    </BrowserRouter>
  )
}

export default App
