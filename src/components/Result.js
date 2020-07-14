import React from "react";
import { connect } from "react-redux";
import { URL_BASE } from "../utils/Constants";

function Result(props) {
  let questions = props.questions;
  questions.forEach((q) => {
    q.isCorrect = q.options.every((x) => x.selected === x.isAnswer);
  });

  return (
    <div className="result">
      <h3 className="text-center font-weight-normal">
        {props.literals.quiz_result}
      </h3>
      {questions.map((q, index) => (
        <div
          key={q.id}
          className={`mb-2 ${q.isCorrect ? "bg-success" : "bg-danger"}`}
        >
          <div className="result-question">
            <h5>
              {index + 1}. {q.name}
            </h5>
            <div className="row">
              {q.options.map((option) => (
                <div key={option.id} className="col-sm-6">
                  <input
                    id={option.id}
                    type="checkbox"
                    disabled="disabled"
                    checked={option.selected}
                  />{" "}
                  {option.name}
                </div>
              ))}
            </div>
            <div
              className={`m-1 p-1 text-bold ${
                q.isCorrect ? "text-success" : "text-danger"
              }`}
            >
              {props.literals.your_answer_is}{" "}
              {q.isCorrect ? props.literals.correct : props.literals.wrong}.
            </div>
          </div>
        </div>
      ))}
      <h4 className="alert alert-info text-center">
        <a href={`${URL_BASE}/`} className="btn btn-link">
          {props.literals.close_window}
        </a>
      </h4>
    </div>
  );
}

const mapStateToProps = ({ literals }) => ({
  literals,
});

export default connect(mapStateToProps)(Result);
