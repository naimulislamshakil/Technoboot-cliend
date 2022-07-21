import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { viewOneStudents } from "../../Redux/Action/action";

const View = () => {
  const { id } = useParams();
  let dispatch = useDispatch();
  const { student } = useSelector((state) => state.students);
  useEffect(() => {
    dispatch(viewOneStudents());
  }, [dispatch]);
  return (
    <div>
      <h2 className="text-center mt-3">view {id}</h2>
      <div className="w-75 mx-auto mt-3">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            NAME
          </label>
          <input
            type="text"
            value={""}
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
            value={""}
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
            value={""}
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
            value={""}
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
            value={""}
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
            value={""}
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
            value={""}
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
