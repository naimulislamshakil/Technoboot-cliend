import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStudents } from "../../Redux/Action/action";

const Home = () => {
  let dispatch = useDispatch();
  const { students } = useSelector((state) => state.students);
  useEffect(() => {
    dispatch(loadStudents());
  }, [dispatch]);
  return (
    <div>
      <h2 className="text-center mt-3 text-primary">All Student</h2>
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col text-center">NO.</th>
              <th scope="col text-center">NAME</th>
              <th scope="col text-center">EMAIL</th>
              <th scope="col text-center">PHONE</th>
              <th scope="col text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
