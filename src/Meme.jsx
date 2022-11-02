import memesData from "../memesData.js"
import React from "react";

function Form() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    function handleClick() {
        const memesArray = allMemeImages.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length);
        setMeme(prevState => ({
            ...prevState,
            randomImage: memesArray[randomNum].url
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className="main">
            <div className="form">
                <div className="text_inputs">
                    <input
                        type='text'
                        className="input_top"
                        placeholder="Top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        className="input_bottom"
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleClick}>Get a new meme image</button>
            </div>
            <div className="img_container">
                <img className="meme" src={meme.randomImage}></img>
                <h2 className="text_top">{meme.topText}</h2>
                <h2 className="text_bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Form