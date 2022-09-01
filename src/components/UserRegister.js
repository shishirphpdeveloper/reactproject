import React,{useState} from "react";
import axios from "axios";


const UserRegister=() => {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');
    const [city,setCity]=useState('');
    const [image,setImage]=useState('');
    const [msg,setMsg]=useState('');


    const submitform = async (e) => {
        //console.log(name,email,password,phone,city);
        e.preventDefault();
        const userobj = new FormData();
        userobj.append('name',name);
        userobj.append('email',email);
        userobj.append('password',password);
        userobj.append('phone',phone);
        userobj.append('city',city);

        try{
            const response = await axios.post(`http://localhost/school/insert.php`,userobj)
        
            if(response.status==200)
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
            if(error.response.data.status=='404')
            setMsg('User Not Register');

        }
        
        
        
    }

    return <>
    <div className="container">
    <div className="row">
    <h3>User Register</h3>
    {msg && (<div className="alert alert-success">
    {msg}
    </div>)}
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Name</label>
    <input type="text" class="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email</label>
    <input type="text" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Password</label>
    <input type="text" class="form-control"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
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
    <label for="exampleFormControlInput1" class="form-label">Image</label>
    <input type="file" class="form-control"  onChange={(e)=>setImage(e.target.files[0])}/>
    </div>
    <div class="mb-3">
    
    <button onClick={submitform}>Submit</button>
    </div>
    </div>
    </div>
    


    </>

}

export default UserRegister;