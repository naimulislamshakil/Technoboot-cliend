import * as types from "./actiontype";
import axios from "axios";

const getStudent = (students) => {
  return {
    type: types.GET_STUDENTS,
    payload: students,
  };
};

export const deleteOneStudents = () => {
  return {
    type: types.DELETE_STUDENTS,
  };
};
export const addOneStudents = () => {
  return {
    type: types.ADD_STUDENTS,
  };
};
export const viewOneStudents = (student) => {
  return {
    type: types.VIEW_STUDENTS,
    payload: student,
  };
};

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
export const deleteStudents = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:5000/all_student/${id}`)
      .then((res) => {
        console.log(res);
        dispatch(deleteOneStudents(res.data));
      })
      .catch((err) => console.log(err));
  };
};
export const viewStudents = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:5000/singel_student/${id}`)
      .then((res) => {
        console.log(res);
        dispatch(viewOneStudents(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const addStudents = (user) => {
  return function (dispatch) {
    axios
      .post(`http://localhost:5000/singel_student`, user)
      .then((res) => {
        console.log(res);
        dispatch(addOneStudents(res.data));
      })
      .catch((err) => console.log(err));
  };
};
