import React from "react";
import './detail.css';
import  {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {brandProducts} from "../../data";

export default function ProductDetail(){
    const {brand, id} = useParams();
    const navigate = useNavigate();
    const productList = brandProducts[brand?.toLowerCase()];
    const product = productList?.find((item)=>item.id === parseInt(id));
    
     if(!product){
        return <h2 style={{padding:20}}>Product not found.</h2>;
     }


    return(<div>
      <div className="detail1">
        <div className="img1">
        <img src={product.image} height="350px" width="500px" style={{borderRadius:20}}></img>
        </div>
         <div className="description1">
          <div className="type1">{product.type}</div>
          <div className="name1">{product.name}</div>
           <div className="star1"><img src={product.star} height="70px" width="150px"></img>
          <div className="price1"> ₹{product.price}</div>
          <div className="discount1"> MRP: ₹{product.discount}</div>
          <div className="save1"> {product.save}</div>
         <div className="para1">{product.description}</div>
          <div className="rate1">
          <div className="addcart1"><button>Add to Cart</button></div>
          <div className="buy1"><button>Buy Now</button></div>
          </div>
          </div>
         
         </div>
      </div>
      <div>

      </div>
    </div>)
}