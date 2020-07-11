import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Questions extends Component {
  onAnswer(question, option) {
    let quiz = JSON.parse(JSON.stringify(this.props.quiz));
    let q = quiz.questions.find((x) => x.id === question.id);

    q.options.forEach((x) => {
      x.selected = false;
    });

    q.options.find((x) => x.id === option.id).selected = true;
    this.props.onAnswer(quiz);
  }

  render() {
    let questions = this.props.quiz.questions
      ? this.props.quiz.questions.slice(
          this.props.pager.index,
          this.props.pager.index + this.props.pager.size
        )
      : [];
    return (
      <div id="quiz">
        <h3 className="text-center font-weight-normal d-none d-sm-block">
          {this.props.quiz.name}
        </h3>
        <hr className="d-none d-sm-block" />
        {questions.map((q) => (
          <div key={q.id}>
            <div className="badge badge-info">
              Question {this.props.pager.index + 1} of {this.props.pager.count}
            </div>
            <h4 className="font-weight-normal">
              {this.props.pager.index + 1}. <span>{q.name}</span>
            </h4>
            <div className="row text-left options">
              {q.options.map((option) => (
                <div key={option.id} className="col-sm-6">
                  <div className="option">
                    <label className="font-weight-normal" htmlFor={option.id}>
                      <input
                        id={option.id}
                        checked={option.selected}
                        type="checkbox"
                        onChange={() => this.onAnswer(q, option)}
                      />
                      {option.name}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <hr />
        <div className="text-center">
          {this.props.quiz.config.allowBack && (
            <button
              id="first"
              className="btn btn-default"
              onClick={this.props.move}
            >
              First
            </button>
          )}
          {this.props.quiz.config.allowBack && (
            <button
              id="prev"
              className="btn btn-default"
              onClick={this.props.move}
            >
              Prev
            </button>
          )}
          <button
            id="next"
            className="btn btn-primary"
            onClick={this.props.move}
          >
            Next
          </button>
          <button
            id="last"
            className="btn btn-default"
            onClick={this.props.move}
          >
            Last
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.quiz,
  ...state.mode,
  ...state.pager,
});

export default connect(mapStateToProps, actions)(Questions);
