import React from "react";
import memesData from "../memesData";

export default function Meme () {
    function handleClick() {
        const memesArray = memesData.data.memes

    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="input1"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="input2"
                />
                <button onClick={handleClick} className="getMeme"> Get a new meme image 🖼 </button>
            </div>
        </main> 
    )
}