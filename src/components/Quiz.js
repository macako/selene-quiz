import React, { Component } from "react";
import Review from "./Review";
import Questions from "./Questions";
import Result from "./Result";
import { connect } from "react-redux";
import * as actions from "../actions";

class Quiz extends Component {
  move = (e) => {
    let id = e.target.id;
    let index = 0;
    if (id === "first") index = 0;
    else if (id === "prev") index = this.props.pager.index - 1;
    else if (id === "next") index = this.props.pager.index + 1;
    else if (id === "last") index = this.props.pager.count - 1;
    else index = parseInt(e.target.id, 10);

    if (index >= 0 && index < this.props.pager.count) {
      let pager = {
        index: index,
        size: 1,
        count: this.props.pager.count,
      };
      this.props.onPagerUpdate(pager);
    }
  };

  setMode = (e) => this.props.onSubmit(e.target.id);

  renderMode() {
    if (this.props.mode === "quiz") {
      return <Questions move={this.move} />;
    } else if (this.props.mode === "review") {
      return <Review quiz={this.props.quiz} move={this.move} />;
    } else {
      return <Result questions={this.props.quiz.questions || []} />;
    }
  }

  render() {
    return (
      <div>
        {this.renderMode()}
        {this.props.mode !== "submit" && (
          <div>
            <hr />
            <button id="quiz" className="btn btn-info" onClick={this.setMode}>
              {this.props.literals.quiz}
            </button>
            <button id="review" className="btn btn-info" onClick={this.setMode}>
              {this.props.literals.review}
            </button>
            <button
              id="submit"
              className="btn btn-primary"
              onClick={this.setMode}
            >
              {this.props.literals.submit_quiz}
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.quiz,
    ...state.mode,
    ...state.pager,
    literals: state.literals,
  };
};

export default connect(mapStateToProps, actions)(Quiz);
