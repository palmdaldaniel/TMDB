import React, { useState } from "react";
import Navigation from "./pages/partials/Navigation";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GenrePage from "./pages/GenrePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/genres">
          <GenrePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
