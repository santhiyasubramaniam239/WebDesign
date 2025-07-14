import React from "react";
import './television.css';
import tv1 from '../../assets/tv1.png';
import { useNavigate } from "react-router-dom";
import { brandProducts } from "../../data";
export default function Television(){
  const navigate = useNavigate();
const allProducts = Object.values(brandProducts).flat();
    return(<div>
     
      <div className="card1">
        {allProducts.map((tv) => (
      <div className="tv1" key={tv.id}  onClick={() => navigate(`/product/${tv.brand.toLowerCase()}/${tv.id}`)}
          style={{ cursor: "pointer" }}>

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