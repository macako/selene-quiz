import React from "react";
import { URL_BASE } from "../utils/Constants";

function Result(props) {
  let questions = props.questions;
  questions.forEach((q) => {
    q.isCorrect = q.options.every((x) => x.selected === x.isAnswer);
  });

  return (
    <div className="result">
      <h3 className="text-center font-weight-normal">Quiz Result</h3>
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
              Your answer is {q.isCorrect ? "Correct" : "Wrong"}.
            </div>
          </div>
        </div>
      ))}
      <h4 className="alert alert-info text-center">
        <a href={`${URL_BASE}/`} class="btn btn-link">
          You may close this window now.
        </a>
      </h4>
    </div>
  );
}

export default Result;
