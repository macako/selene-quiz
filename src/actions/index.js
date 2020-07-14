import { ActionTypes, LOAD_LITERALS } from "./types";

export const onQuizLoad = (payload) => async (dispatch) => {
  dispatch({
    type: ActionTypes.QuizLoad,
    payload,
  });
};

export const onPagerUpdate = (payload) => async (dispatch) => {
  dispatch({
    type: ActionTypes.PagerUpdate,
    payload,
  });
};

export const onAnswer = (payload) => async (dispatch) => {
  dispatch({
    type: ActionTypes.QuizAnswer,
    payload,
  });
};

export const onSubmit = (payload) => async (dispatch) => {
  dispatch({
    type: ActionTypes.QuizSubmit,
    payload,
  });
};

export const loadLiterals = (payload) => async (dispatch) => {
  dispatch({
    type: LOAD_LITERALS,
    payload,
  });
};
