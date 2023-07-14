import React from "react";
import "./App.css";
import ChildComp from "./component/ChildComp";
import { Route, Routes } from "react-router-dom";
import UserList from "./component/crudApp/UserList";
import NavBar from "./component/NavBar";
import SingleUser from "./component/crudApp/SingleUser";
import AddNewUser from "./component/crudApp/AddNewUser";


function App() {


  return (
    <div className="App">
      <div className="container my-4">
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ChildComp/>}></Route>
          <Route exact path="/user" element={<UserList/>}></Route>
          <Route exact path="/singleuser/:vid" element={<SingleUser/>}></Route>
          <Route exact path="/create/newuser" element={<AddNewUser/>}></Route>
        </Routes>
      </div>     
    </div>
  );
}

export default App;
