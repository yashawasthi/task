import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { Link } from "react-router-dom"
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
    <div>
        <Link to="add">Add New</Link>
        <table>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Actions</th>
            </tr>

            

                
                {datas.map((data,index)=>(
                                <tr key={data._id}>
                    <td>{index +1 }</td>
                    <td>{data.title}</td>
                    <td>{data.content}</td>
                    <td>
                        <Link to={`edit/${data._id}`}>Edit</Link>
                        <button onClick={()=>deleteData(data._id)}>Delete</button>
                        </td>
                        </tr>
                ))}
        </table>
    </div>
  )
}

export default DataList