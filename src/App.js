 
 

 //import { useEffect, useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage  from "./pages/HomePage";
import Contact  from "./pages/Contact";
import About  from "./pages/About";
import Schedule from "./pages/Schedule";
//import { firestore } from "./firebase/config";
 
const theme = createTheme({
  palette: {
    primary: {
      main:   "#00FF00", // Primary color gradient from blue to green
    },
    secondary: {
      main: '#00FF00', // Customize the secondary color
    },
    // Add more palette options if needed
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Customize the font family
    fontSize: 16, // Customize the default font size
    // Add more typography options if needed
  },
});

function App() {
  return (
   <ThemeProvider theme={theme}> 
    <BrowserRouter basename="Agile-Internal">
      <Navbar /> {/* Render the modified Navbar component */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
   </ThemeProvider>
  );
}

export default App;
