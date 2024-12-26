 
 

 //import { useEffect, useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage  from "./pages/HomePage";
import Contact  from "./pages/Contact";
import About  from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Codepens from "./codepens/codepen";
import Carousel from "./codepens/Carousel";
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
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/codepens" component={Codepens} />
        <Route path="/Carousel" component={Carousel} />
      </Switch>
    </BrowserRouter>
   </ThemeProvider>
  );
}

export default App;
