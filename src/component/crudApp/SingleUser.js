import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleUser } from "../../features/actions/dataFetch";
import SingleUserCardComp from "./SingleUserCardComp";

const SingleUser = () => {
  const { vid } = useParams();
  const dataReq = useDispatch();

  const { singleEmployee } = useSelector((state) => state.users);

  useEffect(() => {
    dataReq(getSingleUser(vid));
  }, [vid]);

  console.log("singleEmployee:", singleEmployee);

  return (
    <div className="container my-3">
      <SingleUserCardComp singleEmployee={singleEmployee}/>
    </div>
  );
};

export default SingleUser;
