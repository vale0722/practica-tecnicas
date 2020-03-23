import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Events from "../pages/Events";
import NotFound from "../pages/NotFound";
import Guests from "../pages/Guests";

class App extends Component {
  render() {
    return (
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/events/:eventId" component={Guests}/>
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404"/>
          </Switch>
        </BrowserRouter>
      </Layout>
    );
  }
}

export default App;
