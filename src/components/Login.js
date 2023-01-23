import React,{useState} from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";



const Login=() => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const navigate=useNavigate();
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [msg,setMsg]=useState('');

    

    const submitform = async () => {

            const userobj = new FormData();
            userobj.append('email',email);
            userobj.append('password',password);
            

            try{
                const response = await axios.post(`http://localhost/school/login.php`,userobj)
             console.log(response);
                if(response.status===200)
                {
                localStorage.setItem('userinfo',JSON.stringify(response.data.records))
                navigate('/listproducts');
               
                }
            }
            catch(error){
                if(error.response.data.status==='404')
                setMsg('Invalid User');
    
            }
              
    }

    return <>
    <div className="container">
    <form onSubmit={handleSubmit(submitform)}>
    <div className="row">
    <h3>User Login</h3>
    {msg && (<div className="alert alert-success">
    {msg}
    </div>)}
     <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
    <input {...register("email",{ required: "Email should not be empty",
    pattern:{
        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
        message:"Invalid Email"
    }})} type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    {errors.email?.message && <p>{errors.email?.message}</p>}
    </div>
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
    <input {...register("password",{ required: "Password should not be empty",
    minLength:{
        value:6,
        message:"Minimum 6 Character"
    }})} type="password" className="form-control"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
    {errors.password?.message && <p>{errors.password?.message}</p>}
    </div>
    <div className="mb-3">    
    <button className="btn btn-primary">Login</button>&nbsp;
    <a href="http://localhost:3000/userregister" className="btn btn-primary">Register</a>
    </div>
    </div>
    </form>
    </div>
 </>

}

export default Login;