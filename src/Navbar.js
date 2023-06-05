import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
 

function Navbar() {
  
  return (
    <AppBar position="static" sx={{ background: `linear-gradient(to right, #0000FF,   #00FF00)` }}>
      <Toolbar>
        <Typography className="pr-5" variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': {
          color: '#FFFFFF', // Customize the hover color
        }, }}>
          HomePage
        </Typography>
        <Typography className="pr-5" variant="h6" component={Link} to="/about" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': {
          color: '#FFFFFF', // Customize the hover color
        }, }}>
          About
        </Typography>
        <Typography className="pr-5" variant="h6" component={Link} to="/schedule" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': {
          color: '#FFFFFF', // Customize the hover color
        }, }}>
          Schedule
        </Typography>
        <Typography variant="h6" component={Link} to="/Contact" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': {
          color: '#FFFFFF', // Customize the hover color
        }, }}>
          Contact
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
