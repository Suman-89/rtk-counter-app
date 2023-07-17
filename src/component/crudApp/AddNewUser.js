import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserAction } from "../../features/actions/dataFetch";

const AddNewUser = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [createUser, setCreateUser] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userWebsite: "",
    userCity:"",
    userApartment:"",
    userStreet:"",
    userZipcode:""
  });
  const [message, setMessage] = useState("");
  const [errStatus, setErrStatus] = useState(false);

  const createNewUser = () => {
    if (
      !createUser.userName ||
      !createUser.userEmail ||
      !createUser.userPhone ||
      !createUser.userWebsite ||
      !createUser.userApartment||
      !createUser.userStreet||
      !createUser.userCity||
      !createUser.userZipcode
    ) {
      setErrStatus(true);
      setMessage("Blank field *");
      setTimeout(() => {
        setErrStatus(false);
        setMessage("");
      }, 2000);
    } else {
      const newUser = {
        id: Date.now(),
        name: createUser.userName,
        email: createUser.userEmail,
        phone: createUser.userPhone,
        website: createUser.userWebsite,
        suite:createUser.userApartment,
        street:createUser.userStreet,
        city:createUser.userCity,
        zipcode:createUser.userZipcode
      };
      dispatch(createUserAction(newUser))
      .then((res) => {
        console.log("res-->", res)
        if(res?.meta?.requestStatus === 'fulfilled'){
          setErrStatus(false);
          setMessage('User Created successfully *')
          setTimeout(()=>{
            setMessage('');
            setCreateUser({
              userName:'',
              userEmail:'',
              userPhone:'',
              userWebsite:'',
            });
            navigation(`/user`)
          },1500)
        }
      }
        )
      .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container my-4">
      <div
        className="card border shadow"
        style={{ width: "80%", margin: "0 auto 0" }}
      >
        {/* Basic info start */}
        <div className="row">
          <h4 className="display-5">New User</h4>
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
                  value={createUser.userName}
                  onChange={(e) =>
                    setCreateUser({ ...createUser, userName: e.target.value })
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
                  value={createUser.userEmail}
                  onChange={(e) =>
                    setCreateUser({ ...createUser, userEmail: e.target.value })
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
                  value={createUser.userPhone}
                  onChange={(e) =>
                    setCreateUser({ ...createUser, userPhone: e.target.value })
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
                  value={createUser.userWebsite}
                  onChange={(e) =>
                    setCreateUser({
                      ...createUser,
                      userWebsite: e.target.value,
                    })
                  }
                />
                <span className="input-group-text">.com</span>
              </div>
            </div>
          </div>
        {/* Basic info end */}
        {/* Address info start */}
        <div className="row">
            <div className="col-md-5">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Apartment :
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apartment"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={createUser.userApartment}
                  onChange={(e) =>
                    setCreateUser({ ...createUser, userApartment: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="input-group mb-3">
                <span className="input-group-text">Street :</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street"
                  aria-label="Username"
                  value={createUser.userStreet}
                  onChange={(e) =>
                    setCreateUser({ ...createUser, userStreet: e.target.value })
                  }
                />
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
                  City :
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="City"
                  value={createUser.userCity}
                  onChange={(e) =>
                    setCreateUser({ ...createUser, userCity: e.target.value })
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
                  Zipcode :
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Zipcode"
                  value={createUser.userZipcode}
                  onChange={(e) =>
                    setCreateUser({
                      ...createUser,
                      userZipcode: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        {/* Address info end */}
          <div
            className="row my-4"
            style={{margin: "0 auto 0",justifyContent:'center'}}
          >
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "10rem"}}
                onClick={() => createNewUser()}
              >
                Create User
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
      {message ? (
        <div
          className={
            errStatus === true
              ? "alert alert-danger my-4"
              : "alert alert-success my-4"
          }
          role="alert"
          style={{width:'50%',margin:'0 auto 0'}}
        >
          {message}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AddNewUser;
