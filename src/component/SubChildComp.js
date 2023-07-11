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
      <div
        className="card border shadow"
        style={{ width: "60%", margin: "0 auto 0" }}
      >
        <div className="card-body">
          <h4 className="card-title">Digit window </h4>
          <h1>
            <span className="badge bg-secondary">{initialData}</span>
          </h1>
        </div>
        <div className="container my-3 ">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-outline-primary"
              onClick={() => sendData(increment())}
            >
              Value Up
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary"
              onClick={() => sendData(decrement())}
            >
              Value Down
            </button>
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => sendData(icrBy10(10))}
            >
              Increase by 10
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              onClick={() => sendData(dcrBy10(10))}
            >
              Decrease by 10
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubChildComp;
