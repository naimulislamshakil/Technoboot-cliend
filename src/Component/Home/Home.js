import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudents, loadStudents } from "../../Redux/Action/action";

const Home = () => {
  let dispatch = useDispatch();
  const deleteStudent = (id) => {
    if (window.confirm("Are you sure Delete this student?")) {
      dispatch(deleteStudents(id));
      window.location.reload();
    }
  };
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
            {students.map((student, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>
                  {
                    <>
                      <Link
                        to={`/view/${student._id}`}
                        class="btn btn-outline-success me-2 mb-2 "
                      >
                        VIEW
                      </Link>

                      <Link
                        to={`/update/${student._id}`}
                        class="btn btn-outline-warning me-2 mb-2"
                      >
                        UPDATE
                      </Link>
                      <button
                        onClick={() => deleteStudent(student._id)}
                        class="btn btn-outline-danger me-2 mb-2"
                      >
                        DELETE
                      </button>
                    </>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
