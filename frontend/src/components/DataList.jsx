import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { Link } from "react-router-dom"
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Button} from '@mui/material';

  
const DataList = () => {
    const [datas,setDatas]=useState([]);

    useEffect(()=>{
        getDatas()
    },[]);

    const getDatas=async()=>{
        const response=await Axios.get("http://localhost:5000/datas")
        setDatas(response.data);
    }

    const deleteData=async (id)=>{
        try {
            await Axios.delete(`http://localhost:5000/datas/${id}`);
            getDatas();
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="table">
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Content</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data,index) => (
            <TableRow key={data._id}>
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right">{data.title}</TableCell>
              <TableCell align="right">{data.content}</TableCell>
              <TableCell align="right">
                  <div></div>
              <Link to={`edit/${data._id}`}>
                  <Button variant="outlined" color="secondary" >Edit</Button>
              </Link>
              <div className="btn_divide"></div>
              <Button variant="outlined" color="secondary" onClick={()=>deleteData(data._id)}>Delete</Button>     
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default DataList




