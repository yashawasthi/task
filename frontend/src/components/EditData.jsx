import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { useNavigate,useParams } from 'react-router-dom';
const EditData = () => {
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const navigate=useNavigate();
    const {id}=useParams()


    useEffect(()=>{
        getDataById();
    },[]);

    const getDataById=async ()=>{
        const response=await Axios.get(`http://localhost:5000/datas/${id}`);
        setTitle(response.data.title)
        setContent(response.data.content)
    };

    const updateData=async(e)=>{
        e.preventDefault();   
        try {
            await Axios.patch(`http://localhost:5000/datas/${id}`,{
                 title,
                 content,
            });
            navigate("/")
        } catch (error) {
            console.log(error)
        }
     }

  return (
    <div>
        <form onSubmit={updateData}>
        <input placeholder="title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        ></input>
        <input placeholder="content"
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        ></input>
        <button type="submit">Edit</button>
        </form>
        
    </div>
  )
}

export default EditData