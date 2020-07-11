import React, { Component } from "react";
import Quiz from "./components/Quiz";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./scss/custom.scss";
import "./css/App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <Header />
        <Quiz
          quiz={this.state.quiz}
          quizId={this.state.quizId}
          mode={this.state.mode}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
