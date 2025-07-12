import React from "react";
import './start.css';
import cart from '../../assets/cart.jpeg';
import search from '../../assets/search.jpeg';
import facebook from '../../assets/facebook.png';
import instagram from'../../assets/instagram.png';
import youtube1 from '../../assets/youtube1.png';
import call1 from '../../assets/call1.png';
import brand from '../../assets/brand.png';
import whatsapp from '../../assets/whatsapp.jpeg';
import {  NavLink, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About Us/About";
import Quick from "../Quick Help/Quick";
import Television from "../Television/Television";
import Privacy from "../footer/privacy";
import Wooden from "../Wooden Cot/Wooden";
import Return from "../footer/returns";
import Shipping from "../footer/shipping";
import Terms from "../footer/terms";
import Footer from "../footer/Footer";
import Cart from "../cart/cart";



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
         
            <NavLink className="nav1"  to="/">Home</NavLink>
            <NavLink className="nav2"  to="/aboutus">About Us</NavLink>
            <NavLink className="nav3"  to="/television">Television</NavLink>
            <NavLink className="nav4"  to="/woodencot">Wooden Cot</NavLink>
            <NavLink className="nav5"  to="/quickhelp">Quick Help</NavLink>
         </div>
         <div style={{display:"flex",marginLeft:80,marginTop:5}}> 
            <NavLink className="nav6"  ><img src={search} height='45px'width='70px'></img></NavLink> 
           <NavLink className="nav7"  to="/viewcart"><img src={cart} height='65px'width='90px'></img></NavLink> 
          <button className="nav8" style={{marginLeft:20}}>sign in</button>
    
    </div>
      
      
      </div>
      <div style={{position:'fixed',top:'75%',right:'0'}}>
      <a href="https://api.whatsapp.com/send/?phone=919942388299&text=Hi%2C+I+would+like+to+connect+with+you+regarding+the+product+purchase%21%2C+can+i+call+you%3F&type=phone_number&app_absent=0"> <img src ={whatsapp} 
       style={{height:'80px',width:'80px',
        borderRadius:'10px', 
         animation: 'pulse 5s infinite linear',
       }}/></a>
       <style>{`@keyframes pulse {0%{width:40px;height:40px}`}</style>
      </div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/television" element={<Television/>}/>
        <Route path="/woodencot" element={<Wooden/>}/>
        <Route path="/quickhelp" element={<Quick/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/return" element={<Return/>}/>
        <Route path="/shipping" element={<Shipping/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/viewcart" element={<Cart/>}/>

      </Routes>
      <Footer/>
  </div>
 
     )
}