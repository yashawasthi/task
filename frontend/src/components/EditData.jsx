import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { useNavigate,useParams } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
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
    <div className='form'>
    <form onSubmit={updateData}>
    <Typography variant="h5" >Edit your list</Typography>
    <TextField variant="outlined" fullWidth placeholder="title"
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    ></TextField><br></br>
    <div className='helper'></div>
    <TextField variant="outlined" fullWidth placeholder="content"
    value={content}
    onChange={(e)=>setContent(e.target.value)}
    ></TextField>
    <br></br>
    <div className='helper'></div>
    <div className='helper'></div>
    <Button variant="outlined" type="submit">Edit</Button>
    </form>
    
</div>
    
  )
}

export default EditData