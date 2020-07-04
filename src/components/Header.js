import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionTypes } from '../constants/actionTypes';

const mapStateToProps = state => {
  return { ...state.quiz };
};

const mapDispatchToProps = dispatch => ({
  onQuizLoad: payload => dispatch({ type: ActionTypes.QuizLoad, payload }),
  onPagerUpdate: payload => dispatch({ type: ActionTypes.PagerUpdate, payload })
});

class Header extends Component {
  state = {
    quizes: [
      { id: 'data/inegi.json', name: 'INEGI' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ],
    quizId: 'data/inegi.json'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };

  componentDidMount() {
    this.load(this.state.quizId);
  }

  load(quizId) {
    let url = quizId || this.props.quizId;
    fetch(`${process.env.PUBLIC_URL}/${url}`)
      .then(res => res.json())
      .then(res => {
        let quiz = res;
        quiz.questions.forEach(q => {
          q.options.forEach(o => (o.selected = false));
        });
        quiz.config = Object.assign(this.props.quiz.config || {}, quiz.config);
        this.pager.count = quiz.questions.length / this.pager.size;
        this.props.onQuizLoad(quiz);
        this.props.onPagerUpdate(this.pager);
      });
  }

  onChange = e => {
    this.setState({ quizId: e.target.value });
    this.load(e.target.value);
  };

  render() {
    return (
      <div>
        <header className='p-3'>
          <div className='row'>
            <div className='col-6'>
              <h3 className='font-weight-bold'>Selene Quiz</h3>
            </div>
            <div className='col-sm-6 col-12 text-right'>
              <div className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Select Quiz:</span>
                </div>
                <select
                  className='form-control'
                  id='selectQuiz'
                  onChange={this.onChange}>
                  {this.state.quizes.map(q => (
                    <option key={q.id} value={q.id}>
                      {q.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
