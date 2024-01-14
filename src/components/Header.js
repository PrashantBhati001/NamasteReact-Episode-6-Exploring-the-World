import { LOGO_URL } from "../config/constant";
import { useState } from "react";

const Header=()=>{

    const [accessbtn,setaccessbtn]=useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Image not found" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn"   onClick={()=>{
                        accessbtn=="Login" ?setaccessbtn("Logout"):setaccessbtn("Login")
                    }}>{accessbtn}</button>
                </ul>
            </div>

        </div>
    )

}

export default Header