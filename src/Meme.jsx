import memesData from "../memesData.js"
import React from "react";

function Form() {

    const [randomMeme, setRandomMeme] = React.useState('')


    function handleClick() {
        let memeUrl
        const memesArray = memesData.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length);
        memeUrl = memesArray[randomNum].url
        setRandomMeme(memeUrl)
        console.log(randomMeme)
    }

    return (
        <div className="main">
            <form className="form" action="#">
                <div className="text_inputs">
                    <input type='text' className="input_top" placeholder="Top text" />
                    <input type='text' className="input_bottom" placeholder="Bottom text" />
                </div>
                <button onClick={handleClick}>Get a new meme image 🖼</button>
            </form>
            <div className="img_container">
                <img className="meme" src={randomMeme}></img>
            </div>
        </div>
    )
}

export default Form