import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateStudents, viewStudents } from "../../Redux/Action/action";

const Update = () => {
  const navigation = useNavigate();
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState(0);
  const [classes, setClass] = useState(0);
  const [roll, setRoll] = useState(0);
  const { id } = useParams();
  let dispatch = useDispatch();
  const { student } = useSelector((state) => state.students);
  useEffect(() => {
    dispatch(viewStudents(id));
  }, [id, dispatch]);

  const updateStudent = () => {
    const user = {
      name: name ? name : student.name,
      schoolname: school ? school : student.schoolname,
      email: email ? email : student.email,
      phone: phone ? phone : student.phone,
      age: age ? age : student.age,
      class: classes ? classes : student.class,
      roll: roll ? roll : student.roll,
    };
    dispatch(updateStudents(id, user));
    navigation("/");
  };
  return (
    <div>
      <h2 className="text-center mt-3">{student.name}</h2>
      <div className="w-75 mx-auto mt-3">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            NAME
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            SCHOOL NAME
          </label>
          <input
            type="text"
            onChange={(e) => setSchool(e.target.value)}
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            EMAIL
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            PHONE NUMBER
          </label>
          <input
            type="number"
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            AGE
          </label>
          <input
            type="number"
            onChange={(e) => setAge(e.target.value)}
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            class
          </label>
          <input
            type="number"
            onChange={(e) => setClass(e.target.value)}
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            ROLL
          </label>
          <input
            type="number"
            onChange={(e) => setRoll(e.target.value)}
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          onClick={updateStudent}
          class="btn btn-outline-warning me-2 mb-2"
        >
          ADD STUDENT
        </button>
      </div>
    </div>
  );
};

export default Update;
