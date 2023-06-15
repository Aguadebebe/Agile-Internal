import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';// MUI Material installs
import { Link } from 'react-router-dom';
 

function Navbar() {
  
  return (
    <AppBar className="xs:scale-100 sm:scale-50 md:scale-100 lg:scale-100" position="static" sx={{ background: `linear-gradient(to right, #0000FF,   #00FF00)` }}>
      <Toolbar>
        <Typography className="lg:pr-5 md:pr-3 xs:pr-0 xs:scale-90 sm:scale-50 md:scale-100 lg:scale-100" variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': {
          color: '#FFFFFF', // Customize the hover color so when Mouse hovers over link it changes to white
        }, }}>
          HomePage
        </Typography>
        <Typography className="lg:pr-5 md:pr-3 xs:pr-0 xs:scale-90 sm:scale-50 md:scale-100 lg:scale-100" variant="h6" component={Link} to="/about" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': {
          color: '#FFFFFF', // Customize the hover color when Mouse hovers over link it changes to white
        }, }}>
          About
        </Typography>
        <Typography className="lg:pr-5 md:pr-3 xs:pr-0 xs:scale-90 sm:scale-50 md:scale-100 lg:scale-100" variant="h6" component={Link} to="/schedule" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': {
          color: '#FFFFFF', // Customize the hover color Mouse hovers over link it changes to white
        }, }}>
          Schedule
        </Typography>
        <Typography className="xs:scale-90 sm:scale-50 md:scale-100 lg:scale-100" variant="h6" component={Link} to="/Contact" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': {
          color: '#FFFFFF', // Customize the hover color Mouse hovers over link it changes to white. When hover is engaged.
        }, }}>
          Contact
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
