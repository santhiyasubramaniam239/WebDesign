import React from "react";
import {useState, useEffect} from "react";
import './home.css';
import home from '../../assets/home.jpg';
import sofa2 from '../../assets/sofa2.jpg'
import sofa1 from '../../assets/sofa1.png';
import aircooler from '../../assets/aircooler.png';
import Menu from "../Explore Menu/exploremenu";

export default function Home(){
  const images = [home,sofa2,sofa1];
  const [index, setIndex] = useState(0);
  useEffect(()=>{
    const timer = setInterval(()=>{
      setIndex(i=>(i+1)%images.length);
    },3000);
    return () => clearInterval(timer);
  },[]);
  function Dots({count, activeIndex}){
    return(
      <div style={{display:'flex',gap:10,
        marginBottom:20}}>
          {[...Array(count)].map((_, i)=>(
            <span
            key={i}
            style={{
              width:8,height:8,
              borderRadius:'50%',
              backgroundColor:i === activeIndex ? 'black':
              'hsla(0, 29.40%, 96.70%, 0.93)',
              transition:'background-color 0.3s',
            }}
            />
          ))}
        </div>
      
    )
  }
    return(<div>
      
      <div  className="imgbg"style={{
      backgroundImage:`url(${images[index]}`,
      backgroundSize:'cover',
      backgroundPosition:'center',
      display:'flex',
      justifyContent: 'center',
      margin:20,
      alignItems:'flex-end',
      height:'70vh',borderRadius:70,boxShadow:20,
      textAlign:'center',color:'white',paddingBottom:20,
    }}>
      <Dots count ={images.length} activeIndex={index}/>
      
    </div>
    <div style={{backgroundImage:`url(${aircooler})`,
    backgroundPosition:'center',backgroundSize:'cover',
    height:500, width:'95% ', margin:20,borderRadius:10 ,boxShadow:30
  }}>
    
     
     
      </div>
      <div>
        <div className="contents" style={{display:"flex",height:200,width:'97%',backgroundColor:'aliceblue', flexDirection:'column',justifyContent:'center',margin:20,borderRadius:20,paddingBottom:20}}>
      <h1 style={{margin:20,textAlign:'center',padding :20,color:'blue', animation: 'fadeInOut 1s infinite', }}>Buy your Favourites, Live your comfort.</h1>
     <p style={{margin:20,display:'flex',textAlign:"justify",padding :10,fontWeight:"bolder",color:'cornflowerblue', fontSize:'large'}}>Quality Electronic Appliances and Furnitures Available Here. Electronic Appliances such as Television, Refrigerator, Air cooler are in best quality in affordable prices.Furniture includes Wooden Cot, Wardrobe, Wooden Sofa, Diwan, Pooja Stand, Sofa Cum Bed, Cushion Sofa, Mattress, Premium Bed Room Combo Set etc are in perfect quality for customisation. </p> 
    <style>
        {`
          @keyframes fadeInOut {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
        `}
      </style>
      
      </div>
      <div>
        <Menu/>
      </div>
      </div>
      </div>
      
    );
}