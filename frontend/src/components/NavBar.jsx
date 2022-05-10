import React from 'react'
import { Button,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='area'>
        <Link to="/"><Typography variant="h3" >To-Do-List</Typography></Link>
        <Link to="add"><Button className="btn" variant='contained' color="primary" >Add New Item</Button></Link> 
        </div>
    </div>
  )
}

export default NavBar