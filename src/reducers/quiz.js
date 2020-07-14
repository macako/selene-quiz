import { ActionTypes } from "../actions/types";

let initialQuiz = {
  quiz: {
    config: {
      allowBack: true,
      allowReview: true,
      autoMove: false, // if true, it will move to next question automatically when answered.
      duration: 0, // indicates the time in which quiz needs to be completed. 0 means unlimited.
      pageSize: 1,
      requiredAll: false, // indicates if you must answer all the questions before submitting.
      richText: false,
      shuffleQuestions: false,
      shuffleOptions: false,
      showClock: false,
      showPager: true,
      theme: "none",
    },
    questions: [],
  },
  mode: "quiz",
  pager: {
    index: 0,
    size: 1,
    count: 1,
  },
};

export default (state = { ...initialQuiz }, { type, payload }) => {
  switch (type) {
    case ActionTypes.PagerUpdate:
      return {
        ...state,
        pager: payload,
        mode: "quiz",
      };
    case ActionTypes.QuizLoad:
      return {
        ...state,
        quiz: payload,
      };
    case ActionTypes.QuizSubmit:
      console.log("quiz.js Submitted.");
      return {
        ...state,
        mode: payload,
      };
    case ActionTypes.QuizAnswer:
      console.log("quiz.js reducer Quiz Answer called.");
      return {
        ...state,
        quiz: payload,
      };
    default:
      return state;
  }
};
