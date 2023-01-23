import axios from "axios";
import React,{ useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Productview = () => {
    const {id} = useParams();
    const [formValue,setFormValue]=useState({name:"",price:"",code:"",description:"",company:"",photo:""});
    
    useEffect(()=>{
        const viewdata=async()=>{
            try{
                const response = await axios.get(`http://localhost/school/fetchProduct.php?id=${id}`);
                const {name, price, code, description, company, photo}=response.data;
                setFormValue({name, price, code, description, company, photo});
            }
            catch(error){
                console.log(error);
            }
        }
        viewdata();
    },[])

    return <>
    <Navbar/>
    <h2>Product view</h2>
    <table style={{width:"450px"}}>
        <tr>
            <td>Name</td>
            <td>{formValue.name}</td>
        </tr>
        <tr>
            <td>Price</td>
            <td>{formValue.price}</td>
        </tr>
        <tr>
            <td>Code</td>
            <td>{formValue.code}</td>
        </tr>
        <tr>
            <td>Description</td>
            <td>{formValue.description}</td>
        </tr>
        <tr>
            <td>Image</td>
            <td>
            <img src={"http://localhost/school/upload/"+formValue.photo} width="200" height="100"/>
            </td>
        </tr>
    </table>
    </>;
}

export default Productview;