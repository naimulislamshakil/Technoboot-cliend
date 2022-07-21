import React from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  return (
    <div>
      <h2 className="text-center mt-3">update {id}</h2>
      <div className="w-75 mx-auto mt-3">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            NAME
          </label>
          <input
            type="text"
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
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            CLASS
          </label>
          <select class="form-select" aria-label="Default select example">
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
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
      </div>
    </div>
  );
};

export default Update;
