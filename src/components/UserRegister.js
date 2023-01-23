import React,{useState} from "react";
import axios from "axios";
import { useForm } from "react-hook-form";



const UserRegister=() => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');
    const [city,setCity]=useState('');
    const [image,setImage]=useState('');
    const [msg,setMsg]=useState('');

    

    const submitform = async () => {
                
            const userobj = new FormData();
            userobj.append('name',name);
            userobj.append('email',email);
            userobj.append('password',password);
            userobj.append('phone',phone);
            userobj.append('city',city);
            userobj.append('photo',image)
    
            try{
                const response = await axios.post(`http://localhost/school/insertUser.php`,userobj)
            
                if(response.status===200)
                {
                    setName('');
                    setEmail('');
                    setPassword('');
                    setCity('');
                    setPhone('');
                    setMsg('User Successfully Register');
                }
            }
            catch(error){
                if(error.response.data.status==='404')
                setMsg('User Not Register');    
            }
                          
    }

    return <>
    <div className="container">
    <form onSubmit={handleSubmit(submitform)}>
    <div className="row">
    <h3>User Register</h3>
    {msg && (<div className="alert alert-success">
    {msg}
    </div>)}
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Name</label>
    <input  {...register("name",{ required: "Name should not be empty"})} type="text" class="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
    {errors.name?.message && <p>{errors.name?.message}</p>}
    </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email</label>
    <input {...register("email",{ required: "Email should not be empty",
    pattern:{
        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
        message:"Invalid Email"
    }})} type="text" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    {errors.email?.message && <p>{errors.email?.message}</p>}
    </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Password</label>
    <input {...register("password",{ required: "Password should not be empty",
    minLength:{
        value:6,
        message:"Minimum 6 Character"
    }})} type="password" class="form-control"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
    {errors.password?.message && <p>{errors.password?.message}</p>}
    </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Phone</label>
    <input type="text" class="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
    </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">City</label>
    <input type="text" class="form-control" value={city} onChange={(e)=>setCity(e.target.value)}/>
    </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Photo</label>
    <input type="file" class="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
    </div>
    <div class="mb-3">
    
    <button>Submit</button>
    </div>
    </div>
    </form>
    </div>
 </>

}

export default UserRegister;