import React from "react";
import {useState, useEffect} from "react";
import './home.css';
import home from '../../assets/home.jpg';
import sofa2 from '../../assets/sofa2.jpg'
import sofa1 from '../../assets/sofa1.png';

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
      height:'70vh',borderRadius:70,
      textAlign:'center',color:'white',paddingBottom:20,
    }}>
      <Dots count ={images.length} activeIndex={index}/>
    </div>
    <div>
     
    </div>
    </div>
    );
}