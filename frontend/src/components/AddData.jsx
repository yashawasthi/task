import React, { useState } from 'react'
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
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
    <div className='form'>
        <Typography variant="h4" >Add new Item</Typography>
        <form onSubmit={saveData}>
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
        <Button variant="outlined" type="submit">Add</Button>
        </form>
        
    </div>
  )
}

export default AddData