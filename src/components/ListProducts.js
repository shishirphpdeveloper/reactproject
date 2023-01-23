import React,{useEffect,useState} from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import Navbar from "./Navbar";

const ListProducts = () => {
    

    const [products,setProducts]=useState([]);
    const [msg,setMsg]=useState();

    const navigate = useNavigate();
    
    useEffect(()=>{
       if(!localStorage.getItem('userinfo'))
       navigate('/');

    },[])

    const productlist = async() => {
        const response = await axios.get("http://localhost/school/fetchproducts.php");
        setProducts(response.data.records);
    }
    
    useEffect(()=>{
        productlist();
    },[]);

    const deleteProduct = async(id)=>{
        try{
            await axios.delete(`http://localhost/school/deleteProduct.php?id=${id}`);
            setMsg('Record Deleted');
            productlist();
        }
        catch(error){
            setMsg('Record not Deleted');
        }
        
    }

    return<>
    <Navbar/>
    <div><br/></div>
    {msg && (<div className="alert alert-success">
    {msg}
    </div>)}
    
    <h3>Product List</h3>
    <table className="table">
        <thead>
            <tr>
            <td><b>SNo.</b></td>
            <td><b>Image</b></td>
            <td><b>Name</b></td>
            <td><b>Price</b></td>
            <td><b>Code</b></td>
            <td><b>Company</b></td>
            <td><b>View</b></td>
            <td><b>Edit</b></td>
            <td><b>Delete</b></td>
            </tr>
        </thead>
        <tbody>
            {
                products.map((product,index)=>(
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td><img src={"http://localhost/school/upload/"+product.photo} width="60" height="60"/></td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.code}</td>
                    <td>{product.company}</td>
                    <td><Link className="btn btn-primary" to={"/productview/"+product.id}>View</Link></td>
                    <td><Link className="btn btn-primary" to={"/productedit/"+product.id}>Edit</Link></td>
                    <td><Link className="btn btn-danger" onClick={()=>deleteProduct(product.id)} to="#">Delete</Link></td>
                    </tr>
                ))
            }

        </tbody>
    </table>
    </>
}

export default ListProducts;