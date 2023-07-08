import React from "react";
import "./App.css";
import ChildComp from "./component/ChildComp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./component/crudApp/UserList";
import NavBar from "./component/NavBar";



function App() {


  return (
    <div className="App">
      <div className="container my-4">
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ChildComp/>}></Route>
          <Route exact path="/user" element={<UserList/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>     
    </div>
  );
}

export default App;
