import React from "react"

export default function Hero() {
    return (
        <div className="hero">
            <div id="hero__flex">
                <div id="hero-bg__flex">
                    <img className="hero-bg" alt="img-airbnb" src={require("../../img/hero-img.png")}></img>
                </div>
                <div className="hero-text">
                    <h1 className="hero-title">Online Experiences</h1>
                    <p className="hero-subtitle">
                        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. 
                    </p>
                </div>
            </div>
        </div>
    )
}