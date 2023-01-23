import React,{useState,useEffect} from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom";



const AddProduct=() => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [code,setCode]=useState('');
    const [description,setDescription]=useState('');
    const [company,setCompany]=useState('');
    const [image,setImage]=useState('');
    const [msg,setMsg]=useState('');

    const navigate = useNavigate();
    
    useEffect(()=>{
       if(!localStorage.getItem('userinfo'))
       navigate('/');

    },[])

    const submitform = async () => {
        
  
        

        
            const userobj = new FormData();
            userobj.append('name',name);
            userobj.append('price',price);
            userobj.append('code',code);
            userobj.append('description',description);
            userobj.append('company',company);
            userobj.append('photo',image)
    
            try{
                const response = await axios.post(`http://localhost/school/insertproduct.php`,userobj)
            
                if(response.status===200)
                {
                    setName('');
                    setCode('');
                    setPrice('');
                    setDescription('');
                    setCompany('');
                    setMsg('Product Successfully Added');
                }
            }
            catch(error){
                if(error.response.data.status==='404')
                setMsg('Product Not Added');
    
            }
                

            
    }

    return <>
    <Navbar/>
    <div className="container">
    <form onSubmit={handleSubmit(submitform)}>
    <div className="row">
    <h3>Add Product</h3>
    {msg && (<div className="alert alert-success">
    {msg}
    </div>)}
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
    <input  {...register("name",{ required: "Name should not be empty"})} type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
    {errors.name?.message && <p>{errors.name?.message}</p>}
    </div>
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
    <input {...register("price")} type="text" className="form-control" value={price} onChange={(e)=>setPrice(e.target.value)}/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Code</label>
    <input {...register("code")} type="text" className="form-control"  value={code} onChange={(e)=>setCode(e.target.value)}/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
    <input type="text" className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)}/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Company</label>
    <input type="text" className="form-control" value={company} onChange={(e)=>setCompany(e.target.value)}/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Photo</label>
    <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
    </div>
    <div className="mb-3">
    
    <button>Submit</button>
    </div>
    </div>
    </form>
    </div>
 </>

}

export default AddProduct;