import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudents } from "../../Redux/Action/action";

const AddStudent = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState(0);
  const [classes, setClass] = useState(0);
  const [roll, setRoll] = useState(0);

  const addStudentFunction = () => {
    const user = {
      name,
      schoolname: school,
      email,
      phone,
      age,
      class: classes,
      roll,
    };

    dispatch(addStudents(user));
    navigate("/");
  };
  return (
    <div>
      <h2 className="text-center mt-3 text-primary">Add Student</h2>
      <div className="w-75 mx-auto mt-3">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            NAME
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            SCHOOL NAME
          </label>
          <input
            type="text"
            onChange={(e) => setSchool(e.target.value)}
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            EMAIL
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            PHONE NUMBER
          </label>
          <input
            type="number"
            onChange={(e) => setPhone(e.target.value)}
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            AGE
          </label>
          <input
            type="number"
            onChange={(e) => setAge(e.target.value)}
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            CLASS
          </label>
          <select
            onChange={(e) => setClass(e.target.value)}
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>Select your class</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            ROLL
          </label>
          <input
            type="number"
            onChange={(e) => setRoll(e.target.value)}
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          onClick={addStudentFunction}
          class="btn btn-outline-primary me-2 mb-2"
        >
          ADD STUDENT
        </button>
      </div>
    </div>
  );
};

export default AddStudent;
