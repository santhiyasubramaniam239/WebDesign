import React from "react";
import './start.css';
import facebook from '../../assets/facebook.png';
import instagram from'../../assets/instagram.png';
import youtube1 from '../../assets/youtube1.png';
import call1 from '../../assets/call1.png';
import brand from '../../assets/brand.png';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About Us/About";
import Quick from "../Quick Help/Quick";
import Television from "../Television/Television";
import Wooden from "../Wooden Cot/Wooden";


export default function Start(){
    return(<div>
      <div className="h1">
      
        <div className="f1">
      <a href="https://www.facebook.com/nikavitronics" className="i1" ><img src={facebook} height='25px'width='25px'></img></a>
      <a href="https://www.instagram.com/nikavitronics/" className="i2"><img src={instagram} height='25px'width='25px'></img></a>
       <a href="https://www.youtube.com/@nikavitronics" className="i3"><img src={youtube1} height='25px'width='25px'></img></a>
        </div>
        <div className="f2">
            <h3>Shop Online & Get Doorstep Delivery Over Tamil Nadu</h3>
        </div>
        <div className="f3">
           <img src={call1} height='25px'width='25px' style={{display:"inline-flex"} }></img>
        <a href ="tel:+91-994-238-8299" style={{display:"inline-flex"} }>    +91-994-238-8299</a>
        </div>
        </div>
         
        <div className="head">
             
         <div className="logo">
            <img src={brand} height="60px" width="200px"></img>
         </div>
        
         <div className="header">
         
            <NavLink style={{ display:'inline-flex',color:'black'}} to="/"><h3>Home</h3></NavLink>
            <NavLink style={{ display:'inline-flex',color:'black'}} to="/aboutus"><h3>About Us</h3></NavLink>
            <NavLink style={{ display:'inline-flex',color:'black'}} to="/television"><h3>Television</h3></NavLink>
            <NavLink style={{ display:'inline-flex',color:'black'}} to="/woodencot"><h3>Wooden Cot</h3></NavLink>
            <NavLink style={{ display:'inline-flex',color:'black'}} to="/quickhelp"><h3>Quick Help</h3></NavLink>
      </div>
      </div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/television" element={<Television/>}/>
        <Route path="/woodencot" element={<Wooden/>}/>
        <Route path="/quickhelp" element={<Quick/>}/>
      </Routes>

   
      
      
        
        
        
        
       
        
      
    
   
     

     
    </div>)
}