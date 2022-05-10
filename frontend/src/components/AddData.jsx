import React, { useState } from 'react'
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
const AddData = () => {
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const navigate=useNavigate();
    const saveData=async(e)=>{
        e.preventDefault();   
        try {
            await Axios.post("http://localhost:5000/datas",{
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
        <form onSubmit={saveData}>
        <input placeholder="title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        ></input>
        <input placeholder="content"
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
        </form>
        
    </div>
  )
}

export default AddData