import React from "react";
import GetUser from "./components/GetUser";
import Home from "./components/Home.js";
import UserRegister from "./components/UserRegister.js";
import {Routes, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Detailview from "./components/Detailview.js";
import EditUser from "./components/EditUser";
import "./App.css";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import ListProducts from "./components/ListProducts";
import Productview from "./components/Productview";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <div className="container">
    <div className="row">
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="userlist" element={<GetUser/>}/>
      <Route path="userview/:id" element={<Detailview/>}/>
      <Route path="useredit/:id" element={<EditUser/>}/>
      <Route path="listproducts" element={<ListProducts/>}/>
      <Route path="productview/:id" element={<Productview/>}/>
      <Route path="productedit/:id" element={<EditProduct/>}/>
      <Route path="addproduct" element={<AddProduct/>}/>
      <Route path="userregister" element={<UserRegister/>}/>
    </Routes>    
    </div>
    </div>
  );
}

export default App;
