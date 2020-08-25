import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home, Projects, ContactUs } from "./pages";

function App() {
  return (
    <Switch>
      <Route exact path = "/" component = {Home}/>
      <Route path = "/projects" component = {Projects}/>
      <Route path = "/contactus" component = {ContactUs}/>
    </Switch>
  );
}

export default App;