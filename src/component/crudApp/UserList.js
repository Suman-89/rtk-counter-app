import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/actions/dataFetch";

const UserList = () => {
  const { users } = useSelector((state) => state.users);

  const getData = useDispatch();

  useEffect(() => {
    getData(getUsers());
  }, []);

  return (
    <>
      <div><h2><span className="badge bg-warning">User List</span></h2></div>
      <div className="container my-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id No.</th>
              <th scope="col">Name</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {users &&
            users.map((data, index) => (
              <tbody key={index}>
                <tr>
                  <th scope="row">{data.id}.</th>
                  <td>{data.name}</td>
                  <td>{data.phone}</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button type="button" className="btn btn-outline-primary">
                        View
                      </button>
                      <button type="button" className="btn btn-outline-success">
                        Edit
                      </button>
                      <button type="button" className="btn btn-outline-danger">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </>
  )
};

export default UserList;
