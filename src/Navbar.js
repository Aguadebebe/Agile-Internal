import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
 

function Navbar() {
  
  return (
    <AppBar position="static" sx={{ background: `linear-gradient(to right, #0000FF,   #00FF00)` }}>
      <Toolbar>
        <Typography className="pr-5" variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': {
          color: '#FFFFFF', // Customize the hover color so when Mouse hovers over link it changes to white
        }, }}>
          HomePage
        </Typography>
        <Typography className="pr-5" variant="h6" component={Link} to="/about" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': {
          color: '#FFFFFF', // Customize the hover color when Mouse hovers over link it changes to white
        }, }}>
          About
        </Typography>
        <Typography className="pr-5" variant="h6" component={Link} to="/schedule" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': {
          color: '#FFFFFF', // Customize the hover color Mouse hovers over link it changes to white
        }, }}>
          Schedule
        </Typography>
        <Typography variant="h6" component={Link} to="/Contact" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': {
          color: '#FFFFFF', // Customize the hover color Mouse hovers over link it changes to white. When hover is engaged.
        }, }}>
          Contact
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
