import React from "react";

export default function Header() {
    return (
        <header className="header">
            <img className="logo" alt="logo" src={require("../img/logo.png")}/>
        </header>
    )
}