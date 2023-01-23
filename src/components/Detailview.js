import axios from "axios";
import React,{ useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const Detailview = () => {
    const {id} = useParams();
    const [formValue,setFormValue]=useState({name:"",email:"",phone:"",city:""});
    
    useEffect(()=>{
        const viewdata=async()=>{
            try{
                const response = await axios.get(`http://localhost/school/fetchUser.php?id=${id}`);
                const {name, email, phone, city}=response.data;
                setFormValue({name, email, phone, city});
            }
            catch(error){
                console.log(error);
            }
        }
        viewdata();
    },[])

    return <>
    <h2>Detailview</h2>
    Name : {formValue.name}<br/>
    Email : {formValue.email}<br/>
    Phone : {formValue.phone}<br/>
    City : {formValue.city}<br/>
    </>;
}

export default Detailview;