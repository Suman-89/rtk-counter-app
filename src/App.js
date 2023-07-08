import React from "react";
import "./App.css";
import ChildComp from "./component/ChildComp";



function App() {


  return (
    <div className="App">
      <div className="container my-4">
        <div className="col-md-6 my-4" style={{margin:'0 auto 0',fontWeight:'600'}}>
        <h1><span class="badge bg-primary">Counter App using Redux</span></h1>
        </div>
        <ChildComp/>
      </div>     
    </div>
  );
}

export default App;
