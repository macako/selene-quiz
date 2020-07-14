import React, { Component } from "react";
import { connect } from "react-redux";

class Review extends Component {
  isAnswered = (q) => {
    return q.options.some((x) => x.selected)
      ? this.props.literals.answered
      : this.props.literals.not_answered;
  };

  render() {
    return (
      <div>
        <h3 className="text-center font-weight-normal">
          {this.props.literals.review_quiz}: {this.props.quiz.name}
        </h3>
        <hr />
        <div className="row text-center">
          {this.props.quiz.questions.map((q, index) => (
            <div key={q.id} className="col-lg-3 col-sm-4 col-6 cursor-pointer">
              <div
                id={index}
                onClick={this.props.move}
                className={`p-3 mb-2 ${
                  this.isAnswered(q) === this.props.literals.answered
                    ? "bg-info"
                    : "bg-warning"
                }`}
              >
                {index + 1}. {this.isAnswered(q)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ literals }) => ({
  literals,
});

export default connect(mapStateToProps)(Review);
