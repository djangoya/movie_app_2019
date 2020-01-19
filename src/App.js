import React from "react";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

import "./App.css";

// check=> https://github.com/nomadcoders/movie_app_2019/
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
