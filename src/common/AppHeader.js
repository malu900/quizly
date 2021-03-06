import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Quiz/AllQuiz";
import "../App/App.scss";

import { Container, Row } from "react-bootstrap";

export class AppHeader extends Component {
  render() {
    if(sessionStorage.getItem("userId") === null) {
      return (
          <Container id="AppHeader">
            <Row>
              <div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/quiz">Quiz</Link>
                  </li>
                  {/* <li> */}
                    {/* <Link to="/quiz/lobby/currentQuiz/:id">currentquiz</Link>
                  </li>
                  <li>
                    <Link to="/quiz/lobby/currentQuiz/winners">winners</Link>
                  </li> */}

                  <li>
                    <Link to="/PersonalQuizzes">Your Quizzes</Link>
                  </li>
                  <li>
                    <Link to="/tutorial">Tutorial</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                         <li>
                <Link to="/guest">Guest</Link>
              </li>
                </ul>
              </div>
            </Row>
          </Container>
      );
    }
    else {
      return(
<Container id="AppHeader">
            <Row>
              <div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                {/*  <li>
                    <Link to="/topics">Topics</Link>
                  </li>*/}
                  <li>
                    <Link to="/quiz">Quiz</Link>
                  </li>
                  {/* <li>
                    <Link to="/quiz/lobby/currentQuiz/:id">currentquiz</Link>
                  </li>
                  <li>
                    <Link to="/quiz/lobby/currentQuiz/winners">winners</Link>
                  </li> */}
                  <li>
                    <Link to="/PersonalQuizzes">Your Quizzes</Link>
                  </li>
                  <li>
                    <Link to="/tutorial">Tutorial</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Link to="/login">LogOut</Link>
                  </li>
                  {/*       <li>
                <Link to="/guest">Guest</Link>
              </li>*/}
                </ul>
              </div>
            </Row>
          </Container>
          )
    }
  }
}

export default AppHeader;
