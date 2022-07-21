import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { viewStudents } from "../../Redux/Action/action";

const View = () => {
  const { id } = useParams();
  let dispatch = useDispatch();
  const { student } = useSelector((state) => state.students);
  useEffect(() => {
    dispatch(viewStudents(id));
  }, [id, dispatch]);
  return (
    <div>
      <h2 className="text-center mt-3">{student.name}</h2>
      <div className="w-75 mx-auto mt-3">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            NAME
          </label>
          <input
            type="text"
            value={student.name}
            disabled
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
            value={student.schoolname}
            disabled
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
            value={student.email}
            disabled
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
            value={student.phone}
            disabled
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
            value={student.age}
            disabled
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            CLASS
          </label>
          <input
            type="number"
            value={student.class}
            disabled
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            ROLL
          </label>
          <input
            type="number"
            value={student.roll}
            class="form-control"
            id="exampleFormControlInput1"
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default View;
