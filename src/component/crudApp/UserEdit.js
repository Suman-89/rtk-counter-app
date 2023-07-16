import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  getSingleUser,
  updateUserAction,
} from "../../features/actions/dataFetch";

const UserEdit = () => {
  const { state } = useLocation();
  const { eid } = useParams();
  const navigation = useNavigate();
  const dispatchUser = useDispatch();

  const [userUpdate, setUserUpdate] = useState({
    uName: state?.singleUserData?.name || "",
    uEmail: state?.singleUserData?.email || "",
    uPhone: state?.singleUserData?.phone || "",
    uWebsite: state?.singleUserData?.website || "",
  });
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

  // console.log('userUpdate.uName:',userUpdate.uName);

  useEffect(() => {
    dispatchUser(getSingleUser(eid));
  }, [eid]);

  const updateUser = () => {
    if (
      !userUpdate.uName ||
      !userUpdate.uEmail ||
      !userUpdate.uPhone ||
      !userUpdate.uWebsite
    ) {
      setStatus(false);
      setMessage("Field can not be empty !");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      const newUserData = {
        name: userUpdate.uName,
        email: userUpdate.uEmail,
        phone: userUpdate.uPhone,
        website: userUpdate.uWebsite,
      };
      console.log("newUserData-->", newUserData);
      // updateUserAction
      dispatchUser(updateUserAction({ empId: eid, userData: newUserData }))
        .then((response) => {
          console.log("response:", response);
          if (response.meta.requestStatus === "fulfilled") {
            setStatus(true);
            setMessage("User Edited Successfully *");
            setTimeout(() => {
              setMessage("");
              navigation(`/user`);
            },1000);
          }
        })
        .catch((err) => {
          console.log("err:", err);
        });
    }
  };

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
                <span className="input-group-text">Name :</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  aria-label="Username"
                  value={userUpdate?.uName}
                  onChange={(e) =>
                    setUserUpdate({ ...userUpdate, uName: e.target.value })
                  }
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
                  value={userUpdate?.uEmail}
                  onChange={(e) =>
                    setUserUpdate({ ...userUpdate, uEmail: e.target.value })
                  }
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
                  value={userUpdate?.uPhone}
                  onChange={(e) =>
                    setUserUpdate({ ...userUpdate, uPhone: e.target.value })
                  }
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
                  value={userUpdate?.uWebsite}
                  onChange={(e) =>
                    setUserUpdate({ ...userUpdate, uWebsite: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div
            className="row my-4"
            style={{ margin: "0 auto 0", justifyContent: "center" }}
          >
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "10rem" }}
              onClick={() => updateUser()}
            >
              Confirm Update
            </button>
            &nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-secondary"
              style={{ width: "10rem" }}
              onClick={() => navigation(`/user`)}
            >
              Back to register
            </button>
          </div>
        </div>
      </div>
      {message ? (
        <div className="row my-4">
          <div
            className={
              status === false ? "alert alert-danger" : "alert alert-success"
            }
            role="alert"
            style={{ width: "20rem", margin: "0 auto 0" }}
          >
            {message}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default UserEdit;
