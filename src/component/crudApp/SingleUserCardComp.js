import React from "react";
import { Link } from "react-router-dom";

const SingleUserCardComp = ({ singleEmployee }) => {
  return (
    <div>
      <div className="card" style={{width:'60%', margin:'0 auto 0'}}>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>
                <span className="badge text-bg-info">User_Id</span>
              </h3>
              <h2 className="display-1">{singleEmployee.id}</h2>
            </li>
            <li className="list-group-item">
              <h3 className="display-6">
                <b>Name :</b>
                {singleEmployee.name}
              </h3>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-sm-6">
                  <span>Email :</span>
                  <b>{singleEmployee.email}</b>
                </div>
                <div className="col-sm-6">
                  <span>Phone :</span>
                  <b>{singleEmployee.phone}</b>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-sm-6">
                  <span>Apartment :</span>
                  <b>{singleEmployee?.address?.suite}</b>
                </div>
                <div className="col-sm-6">
                  <span>Street :</span>
                  <b>{singleEmployee?.address?.street}</b>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-sm-6">
                  <span>City :</span>
                  <b>{singleEmployee?.address?.city}</b>
                </div>
                <div className="col-sm-6">
                  <span>Zipcode :</span>
                  <b>{singleEmployee?.address?.zipcode}</b>
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
