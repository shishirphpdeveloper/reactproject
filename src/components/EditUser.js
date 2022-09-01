import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditUser=()=>{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [city,setCity]=useState('');
    const [msg,setMsg]=useState('');
    const {id}=useParams();

    useEffect(()=>{
        const viewdata=async()=>{
            try{
                const response = await axios.get(`http://localhost/school/fetch.php?id=${id}`);
                setName(response.data.name);
                setEmail(response.data.email);
                setPhone(response.data.phone);
                setCity(response.data.city);
            }
            catch(error){
                console.log(error);
            }
        }
        viewdata();

    },[])

    const updateform = () =>{

        const inputdata = {
            id:id,
            name:name,
            email:email,
            phone:phone,
            city:city
        }

        try{
            const updateapi = axios.put(`http://localhost/school/update.php`,inputdata)
            setMsg('User successfully updated');
        }
        catch(error){

        }

    }



    return <>
    <div className="container">
    <div className="row">
    <h3>Edit User</h3>
    {msg && (<div className="alert alert-success">
    {msg}
    </div>)}
    <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Email</label>
    <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Phone</label>
    <input type="text" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
    </div>
    <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">City</label>
    <input type="text" className="form-control" value={city} onChange={(e)=>setCity(e.target.value)}/>
    </div>
    <div className="mb-3">
    
    <button onClick={updateform}>Update</button>
    </div>
    </div>
    </div>
    
    </>

}

export default EditUser;