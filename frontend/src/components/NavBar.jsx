import React from 'react'
import { Button,Typography } from '@mui/material';
const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='area'>
        <Typography variant="h3" >To-Do-List</Typography>
        <Button className="btn" variant='outlined' color="secondary" >Add List</Button>
        </div>
    </div>
  )
}

export default NavBar