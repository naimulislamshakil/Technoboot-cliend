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
export const updateOneStudents = () => {
  return {
    type: types.UPDATE_STUDENTS,
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
      .get("https://technoboot-server.onrender.com/all_student")
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
      .delete(`https://technoboot-server.onrender.com/all_student/${id}`)
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
      .get(`https://technoboot-server.onrender.com/singel_student/${id}`)
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
      .post(`https://technoboot-server.onrender.com/singel_student`, user)
      .then((res) => {
        console.log(res);
        dispatch(addOneStudents(res.data));
      })
      .catch((err) => console.log(err));
  };
};
export const updateStudents = (id, user) => {
  return function (dispatch) {
    axios
      .put(`https://technoboot-server.onrender.com/update_student/${id}`, user)
      .then((res) => {
        console.log(res);
        dispatch(updateOneStudents(res.data));
      })
      .catch((err) => console.log(err));
  };
};
