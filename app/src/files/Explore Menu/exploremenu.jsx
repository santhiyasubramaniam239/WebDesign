import React from "react";
import './menu.css';

import { NavLink } from "react-router-dom";
import tvProducts from "../../data";
export default function Menu(){
    return(<div className="explore-menu" id='explore-menu'>
    <center> <h1>Explore TV Brands</h1>
      <p className="explore-menu-text">Here is a list of few popular brands of Television. choose the best out of it.</p>
  </center> 
  <div className="explore-menu-list">
{tvProducts.map((item,index)=>{
    return(
        <div key={index} className="explore-menu-list-item">
    <NavLink to={`/product/${item.menu_name.toLowerCase()}`}>    <img src={item.menu_image} alt="" height="100px"width="150px" style={{borderRadius:60,padding:5}}/>
         <p style={{marginLeft:5}}>{item.menu_name}</p></NavLink> 
        </div>
    )
})

}
  </div>
    </div>
    )
}