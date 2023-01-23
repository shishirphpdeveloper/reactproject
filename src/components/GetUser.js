import React,{useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";

const GetUser = () => {
    const [users,setUsers]=useState([]);
    const [msg,setMsg]=useState();

    const userlist = async() => {
        const response = await axios.get("http://localhost/school/fetchUsers.php");
        setUsers(response.data.records);
    }
    
    useEffect(()=>{

        

        userlist();

    },[]);

    const deleteUser = async(id)=>{
        try{
            const response = await axios.delete(`http://localhost/school/deleteUser.php?id=${id}`);
            setMsg('Record Deleted');
            userlist();
        }
        catch(error){
            setMsg('Record not Deleted');
        }
        
    }

    return<>
    <div><br/></div>
    {msg && (<div className="alert alert-success">
    {msg}
    </div>)}
    
    <h3>User List</h3>
    <table className="table">
        <thead>
            <tr>
            <td><b>SNo.</b></td>
            <td><b>Image</b></td>
            <td><b>Name</b></td>
            <td><b>Email</b></td>
            <td><b>Phone</b></td>
            <td><b>City</b></td>
            <td><b>View</b></td>
            <td><b>Edit</b></td>
            <td><b>Delete</b></td>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user,index)=>(
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td><img src={"http://localhost/school/upload/"+user.photo} width="60" height="60"/></td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.city}</td>
                    <td><Link className="btn btn-primary" to={"/userview/"+user.id}>View</Link></td>
                    <td><Link className="btn btn-primary" to={"/useredit/"+user.id}>Edit</Link></td>
                    <td><Link className="btn btn-danger" onClick={()=>deleteUser(user.id)} to="#">Delete</Link></td>
                    </tr>
                ))
            }

        </tbody>
    </table>
    </>
}

export default GetUser;