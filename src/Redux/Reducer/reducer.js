import * as types from "../Action/actiontype";

const initialState = {
  students: [],
  student: {},
  isLoading: true,
  error: null | "",
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
        isLoading: false,
      };
    case types.DELETE_STUDENTS:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default studentReducer;
