 
 

 //import { useEffect, useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage  from "./pages/HomePage";
import Contact  from "./pages/Contact";
import About  from "./pages/About";
//import { firestore } from "./firebase/config";
 


function App() {
 /* const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const request = await firestore.collection("contacts").orderBy("postedOn", "desc").get();
    const tempContacts = request.docs.map((contact) => ({...contact.data(), id: contact.id}));
    setContacts(tempContacts);
    console.log(tempContacts);
  }

  useEffect(() => {
    fetchContacts();
  }, []);*/

 return (
   
     <BrowserRouter basename="/tai-chi">
     <div> 
     <Navbar />
     </div>
       <Switch>
         <Route exact path="/">
           <HomePage />
         </Route>
         <Route path="/Contact">
          <div> 
          {/*{contacts.map((contact) => (
               <Contact key={contact.id} {...contact} /> 
             ))}*/}
           <Contact />  
          </div> 
         </Route>
         <Route path="/About">
           <About />  
         </Route>
       </Switch>

        
      
 </BrowserRouter>
  
 );
}

export default App;


 
