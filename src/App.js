import React from "react";
import About from "./routes/About";
import Home from "./routes/Home";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
    </HashRouter>
  );
}

export default App;
