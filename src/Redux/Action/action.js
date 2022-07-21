import * as types from "./actiontype";
import axios from "axios";

const getStudent = (students) => {
  return {
    type: types.GET_STUDENTS,
    payload: students,
  };
};

// export const loading = (loading) => {
//     return {
//         type:
//     }
// }

export const loadStudents = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5000/all_student")
      .then((res) => {
        console.log(res);
        dispatch(getStudent(res.data));
      })
      .catch((err) => console.log(err));
  };
};
