import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserEdit = () => {
  const { state } = useLocation;
  const navigation = useNavigate();

  const [userUpdate, setUserUpdate] = useState({
    uName: state?.singleUserData.name,
    uEmail: state?.singleUserData?.email,
    uPhone: state?.singleUserData?.phone,
    uWebsite: state?.singleUserData?.website,
  });
  return (
    <>
       <div
        className="card border shadow"
        style={{ width: "80%", margin: "0 auto 0" }}
      >
        <div className="row">
          <h4 className="display-5">Update User</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-5">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Name :
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                //   value={createUser.userName}
                //   onChange={(e) =>
                //     // setCreateUser({ ...createUser, userName: e.target.value })
                //   }
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="input-group mb-3">
                <span className="input-group-text">Email :</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Username"
                //   value={createUser.userEmail}
                //   onChange={(e) =>
                //     // setCreateUser({ ...createUser, userEmail: e.target.value })
                //   }
                />
                <span className="input-group-text">@</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Phone
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Phone Number"
                //   value={createUser.userPhone}
                //   onChange={(e) =>
                //     // setCreateUser({ ...createUser, userPhone: e.target.value })
                //   }
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Website
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Website"
                //   value={createUser.userWebsite}
                //   onChange={(e) =>
                //     setCreateUser({
                //       ...createUser,
                //       userWebsite: e.target.value,
                //     })
                //   }
                />
                <span className="input-group-text">.com</span>
              </div>
            </div>
          </div>
          <div
            className="row my-4"
            style={{margin: "0 auto 0",justifyContent:'center'}}
          >
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "10rem"}}
                // onClick={() => createNewUser()}
              >
                Confirm Update
              </button>&nbsp;&nbsp;
              <button
                type="button"
                className="btn btn-secondary"
                style={{ width: "10rem"}}
                onClick={() => navigation(`/user`)}
              >
                Back to register
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEdit;
