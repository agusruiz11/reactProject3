import React from "react";
import img from "../img/troll-face.png";

export default function Header() {
    return (
        <header className="header">
            <img src={img} className="trollFace" alt="trollFace"/>
            <h2 className="header--tittle">Meme Generator</h2>
            <h4 className="header--tittle2">React Course - Project 3</h4>
        </header>
    )
}