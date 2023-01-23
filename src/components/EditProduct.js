import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const EditProduct=()=>{

    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [code,setCode]=useState('');
    const [description,setDescription]=useState('');
    const [company,setCompany]=useState('');
    const [image,setImage]=useState('');
    const [msg,setMsg]=useState('');
    const {id}=useParams();

    useEffect(()=>{
        const viewdata=async()=>{
            try{
                const response = await axios.get(`http://localhost/school/fetchProduct.php?id=${id}`);
                setName(response.data.name);
                setPrice(response.data.price);
                setCode(response.data.code);
                setDescription(response.data.description);
                setCompany(response.data.company);
                setImage(response.data.photo);
            }
            catch(error){
                console.log(error);
            }
        }
        viewdata();

    },[])

    const updateform = () =>{

        const productobj = new FormData();
        productobj.append('id',id);
        productobj.append('name',name);
        productobj.append('price',price);
        productobj.append('code',code);
        productobj.append('description',description);
        productobj.append('company',company);
        productobj.append('photo',image)

        try{
            axios.post(`http://localhost/school/updateProduct.php`,productobj)
            setMsg('Product successfully updated');
        }
        catch(error){

        }

    }



    return <>
    <Navbar/>
    <div className="container">
    <div className="row">
    <h3>Edit Product</h3>
    {msg && (<div className="alert alert-success">
    {msg}
    </div>)}
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
    <input type="text" className="form-control" value={price} onChange={(e)=>setPrice(e.target.value)}/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Code</label>
    <input type="text" className="form-control" value={code} onChange={(e)=>setCode(e.target.value)}/>
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
    <label htmlFor="exampleFormControlInput1" className="form-label">Image</label>
    <img src={"http://localhost/school/upload/"+image} width="200" height="100" alt="productimage"/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Photo</label>
    <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
    </div>
    <div className="mb-3">    
    <button onClick={updateform}>Update</button>
    </div>
    </div>
    </div>
    
    </>

}

export default EditProduct;