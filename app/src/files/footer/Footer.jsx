import React from "react";
import './footer.css';
import footer from '../../assets/footer.svg';
import { NavLink } from "react-router-dom";
export default function Footer(){
    return(<div>
    <div className="footer">
      <div className="f11">
      <img src={footer} height='100px' width='150px'></img>
      
      </div>
      <div className="f12">
       <h3>Quick Links</h3>
      </div>
      <div className="f13">
       <h3>Help</h3>
      </div>
      <div className="f14">
        <h3>Keep In Touch</h3>
      </div>
    </div>
    <div className="footer1">
      <div className="f15">
      At Nikavi Tronics, we bring you the latest in electronics and furniture, combining innovation and elegance to enhance your home experience. Elevate your living space today!
      </div>
      <div className="f16" >
        <NavLink style={{ display:'inline-flex',color:' rgb(17, 19, 32)'}} to="/">Home</NavLink>
        <NavLink style={{ display:'inline-flex',color:' rgb(17, 19, 32)',paddingTop:'5px'}} to="/aboutus">About Us</NavLink>
        <NavLink style={{ display:'inline-flex',color:' rgb(17, 19, 32)',paddingTop:'5px'}} to="/television">Television</NavLink>
        <NavLink style={{ display:'inline-flex',color:' rgb(17, 19, 32)',paddingTop:'5px'}} to="/woodencot">Wooden Cot</NavLink>
        <NavLink style={{ display:'inline-flex',color:' rgb(17, 19, 32)',paddingTop:'5px'}} to="/quickhelp">Quick Help</NavLink>
      </div>
      <div className="f17">
        <NavLink style={{ display:'inline-flex',color:' rgb(17, 19, 32)',marginLeft:55,}} to="/privacy">Privacy Policy</NavLink>
        <NavLink style={{ display:'inline-flex',color:' rgb(17, 19, 32)',paddingTop:'5px',marginLeft:55}} to="/terms">Terms & Conditions</NavLink>
        <NavLink style={{ display:'inline-flex',color:' rgb(17, 19, 32)',paddingTop:'5px',marginLeft:55}} to="/shipping">Shipping Policy</NavLink>
        <NavLink style={{ display:'inline-flex',color:' rgb(17, 19, 32)',paddingTop:'5px',marginLeft:55}} to="/return">Return & Refund Policy</NavLink>
       
      </div>
      <div className="f18" >
       <a href="https://www.google.com/maps/place/Nikavi+Tronics/@11.3125308,77.7088275,694m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba96fbd1bc47de5:0x578cfded5fb0353d!8m2!3d11.3125308!4d77.7088275!16s%2Fg%2F11sfrq0nfy?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D"style={
        {marginLeft:'40px',color:' rgb(17, 19, 32)'}
       }>
       58, Kalyana Sundaram Street,
       Chennimalai Road, Opp Maharaja,
       Multiplex Theatre, Erode-638009
       </a> 
     <p style={{marginLeft:'30px',padding:'10px'}}> nikavitronics@gmail.com</p>
     <p><a href ="tel:+91-994-238-8299" style={{display:"inline-flex",marginLeft:'30px',padding:'10px',color:'rgb(17,19,32)'} }>    99423-88299,</a>
      <a href ="tel:+91-934-468-2511" style={{color:'rgb(17,19,32)'}} >93446-82511</a></p>
      </div>
    </div>
    <div className="end" style={{display:'flex',backgroundColor: 'rgb(147, 145, 142)',justifyContent:"center",color:'rgb(17,19,32)',padding:50}}>
   <p> Follow us</p>
    </div>
    </div>)
}