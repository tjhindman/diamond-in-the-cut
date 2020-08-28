import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home, Projects, ContactUs, NavBar } from "./pages";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/projects" component = {Projects}/>
        <Route path = "/contactus" component = {ContactUs}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;