import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';


const NavBar = () => {
  return (
    <Button href="/" variant="contained">
            <Link to=''>Home Page</Link>
            
            <Link to=''>SingleCountry Page</Link>
    </Button>
  )
}

export default NavBar