import React from "react";
import { Link } from "react-router-dom";

const SingleUserCardComp = ({ singleEmployee }) => {
  return (
    <div>
      <div className="card border shadow" style={{width:'80%', margin:'0 auto 0'}}>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>
                <span className="badge text-bg-primary">User_Id :  {singleEmployee.id}</span>
              </h3>
            </li>
            <li className="list-group-item">
              <h3 className="display-6">
                <span>Name :</span>&nbsp;&nbsp;
                <b>{singleEmployee.name}</b>
              </h3>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-sm-6">
                  <span>Email :</span>&nbsp;&nbsp;
                  <b>{singleEmployee.email}</b>
                </div>
                <div className="col-sm-6">
                  <span>Phone :</span>&nbsp;&nbsp;
                  <b>{singleEmployee.phone}</b>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-sm-6">
                  <span>Apartment:</span>&nbsp;
                  <b>{singleEmployee?.suite}</b>
                </div>
                <div className="col-sm-6">
                  <span>Street:</span>&nbsp;
                  <b>{singleEmployee?.street}</b>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-sm-6">
                  <span>City :</span>&nbsp;&nbsp;
                  <b>{singleEmployee?.city}</b>
                </div>
                <div className="col-sm-6">
                  <span>Zipcode :</span>&nbsp;&nbsp;
                  <b>{singleEmployee?.zipcode}</b>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <Link className="btn btn-secondary" to="/user">
                Back to UserList
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleUserCardComp;
