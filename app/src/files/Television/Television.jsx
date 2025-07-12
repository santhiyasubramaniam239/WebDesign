import React from "react";
import './television.css';
import tv1 from '../../assets/tv1.png';
import tvProducts from "../../data";
export default function Television(){
    return(<div>
     
      <div className="card1">
        {tvProducts.map((tv) => (
      <div className="tv1" key={tv.id}>

        <img src= {tv.image} alt={tv.name} height='200px' width="300px" ></img>
        <div className="name"><h3>{tv.name}</h3></div>
         <div className="describe"> <p>{tv.stock}</p></div>
         <div style={{display:"flex",gap:160}}>
         <div className="price"> <p><strong> ₹{tv.price}</strong></p></div>
         <div className="discount"> <p>{tv.discount}</p></div>
         </div>
         <div className="save"> <p>{tv.save}</p></div>
      </div>
      ))}
      </div>
    </div>)
} 