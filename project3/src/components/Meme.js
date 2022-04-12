import React from "react";
import memesData from "../memesData";
import { useState } from "react";

export default function Meme () {

    // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImage, setAllMemeImage] = useState(memesData)

    function handleChange(event) {
        const {name, value} = event.target
        setMeme (prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    // function handleSubmit(event) {
    //     event.preventDefault()
    // }

    function getMemeImage() {
        const memesArray = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    return (
        <main>
            <div className="form">
                
                <input 
                    type="text"
                    placeholder="Top text"
                    className="input1"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="input2"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getMemeImage} className="getMeme"> Get a new meme image 🖼 </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt=""/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main> 
    )
}