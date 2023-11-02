import React from "react";

import Login from ".././src/pages/loginpage";
import Registerpage from "./pages/register";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HOME from "./pages/home";


function App(){
   return(
      <BrowserRouter>

      <Routes>
          <Route path="/" element={<HOME/>}/>
         <Route path="/Login" element={<Login/>}/>
         <Route path="/register" element={<Registerpage/>}/>
      </Routes>
      </BrowserRouter>
   )
}
export default App;
   




  
