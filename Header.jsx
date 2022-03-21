import React from "react";
import Logo from "../assets/logo.png";
import "../App.css";

export const Header = () => {

    return (
        <>
            <section className="header">
                <div className="logo">
                    <img src={Logo} alt="logo" width="35px" />
                    <span style=
                    {
                        {color:"white", 
                        display:"flex",
                        justifyContent:"center", 
                        alignItems:"center",
                        fontSize:"16px",
                        padding:"3px 0px"
                        }
                    }>GitSearcher</span>
                </div>
                <div className="navLinks">
                    <ul>
                        <li className="home">HOME</li>
                        <li>APIs</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </section>
        </>
    )

}