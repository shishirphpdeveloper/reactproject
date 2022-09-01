import React from "react";
import GetUser from "./components/GetUser";
import Home from "./components/Home.js";
import UserRegister from "./components/UserRegister.js";
import {Routes, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar.js";
import Detailview from "./components/Detailview.js";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="container">
    <div className="row">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="userlist" element={<GetUser/>}/>
      <Route path="userview/:id" element={<Detailview/>}/>
      <Route path="useredit/:id" element={<EditUser/>}/>
      <Route path="userregister" element={<UserRegister/>}/>
    </Routes>    
    </div>
    </div>
  );
}

export default App;
