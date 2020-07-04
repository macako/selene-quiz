import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Quiz from './components/Quiz';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  state = {};

  render() {
    return (
      <div className='container'>
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
