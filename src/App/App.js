import React, { Component } from "react";
import AppHeader from "../common/AppHeader";
import logo from "../logo.svg";
import "./App.scss";
import { Container } from "react-bootstrap";
import { Switch, BrowserRouter, Link, Route } from "react-router-dom";
import Quiz from "../Quiz/AllQuiz";
import Login from "../auth/Login";
import Auth from "../auth/Auth";
import AddQuestion from "../Quiz/AddQuestion";
import Home from "../Home";
import Guest from "../auth/Guest";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: [],
    };
  }
  componentDidMount() {
    console.log("Did mount!");
  }
  render() {
    return (
      <Container className="App">
        <AppHeader> </AppHeader>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/guest">
            <Guest />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/addquestion">
            <AddQuestion />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    );
  }
}
export default App;
