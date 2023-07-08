import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, icrBy10, dcrBy10 } from "../features/ShowSlice";

const SubChildComp = () => {
  const sendData = useDispatch(increment(), decrement(), icrBy10(), dcrBy10());

  const initialData = useSelector((event) => {
    // console.log('event-->',event.show.value);
    return event.show.value;
  });

  return (
    <>
      <div className="card border shadow">
        <div className="card-body">
          <h1 className="card-title">Counter 2 : </h1>
          <h1>
            <span className="badge bg-success border shadow">{initialData}</span>
          </h1>
        </div>
          <div className="container my-3 ">
          <button
          className="btn btn-danger rounded-pill"
          onClick={() => sendData(increment())}
        >
          Value Up
        </button>
        &nbsp;&nbsp;
        <button
          className="btn btn-secondary rounded-pill"
          onClick={() => sendData(decrement())}
        >
          Value Down
        </button>
        &nbsp;&nbsp;
        <button
          className="btn btn-info rounded-pill"
          onClick={() => sendData(icrBy10(10))}
        >
          Increase by 10
        </button>
        &nbsp;&nbsp;
        <button
          className="btn btn-warning rounded-pill"
          onClick={() => sendData(dcrBy10(10))}
        >
          Decrease by 10
        </button>
          </div>
        </div>
       
    </>
  );
};

export default SubChildComp;
