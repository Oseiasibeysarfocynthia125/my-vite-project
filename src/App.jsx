import React from "react"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Home from"./Pages/Home"



export default function App () {

      return (
    
        
         <BrowserRouter>
                <Routes>
                <Route path='/' element={<Home/>}/>
                 <Route path='/about-us' element={<About/>}/>  
                 <Route path='/contact-us' element={<Contact/>}/>

                </Routes>
         
         </BrowserRouter>
         
        
                   
                       
        
        )
 }
 

