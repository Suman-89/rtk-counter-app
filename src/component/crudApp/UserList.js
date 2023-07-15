import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, getUsers, userDelete } from "../../features/actions/dataFetch";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const { users, loading } = useSelector((state) => state.users);

  const getData = useDispatch();
  const navToUser = useNavigate()

  useEffect(() => {
    getData(getUsers());
  }, []);

  const viewEmp = (vId) =>{
    console.log('vID:',vId);
    navToUser(`/singleuser/${vId}`);
    getData(getSingleUser(vId));
  }
  const delEmp = (del_id) =>{
    console.log('delId USerList -->',del_id);
    if(window.confirm('Do you want to delete ?')){
      getData(userDelete(del_id));
    }
    getData(getUsers());
  }
  console.log('users-->',users);

  return (
    <>
      <div>
        <h2>
          <span className="badge bg-warning">User List Using RTK</span>
        </h2>
      </div>
      <div className="row my-4" style={{width:'8rem',margin:'0 auto 0'}}>
        <button type="button" className="btn btn-primary"
        onClick={()=>navToUser(`/create/newuser`)}
        >
          Add New (+)
        </button>
      </div>
      <div className="container my-4">
        {loading === true ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">SL. No.</th>
                <th scope="col">Name</th>
                <th scope="col">Phone No.</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {users &&
              users.map((data, index) => (
                <tbody key={index}>
                  <tr>
                    <th scope="row">{index+1}.</th>
                    <td>{data.name}</td>
                    <td>{data.phone}</td>
                    <td>
                     
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={()=>viewEmp(data.id)}
                        >
                          View
                        </button>&nbsp;
                        <button
                          type="button"
                          className="btn btn-outline-success"
                        >
                          Edit
                        </button>&nbsp;
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={()=>delEmp(data.id)}
                        >
                          Delete
                        </button>
                      
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        )}
      </div>
    </>
  );
};

export default UserList;
