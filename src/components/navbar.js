import React  from "react";
import './navbar.css'
import logo from '../img/logo.png'
import { useNavigate } from "react-router-dom";



const Navbar = () => {
    const navigate = useNavigate()
    
    return ( 
        <div className="navbar">
            <img src= {logo} classname= "logo" alt="logo"/>
            
            <div className="links">
                
                <button onClick={()=> navigate('log-in')}> Login</button>
                
                <button onClick={()=> navigate('get-started')}> Get Started</button>
                
                 
            </div>
        </div>
     );
}
 
export default Navbar;
