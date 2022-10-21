function Form() {
    return (
        <form className="form" action="#">
            <div className="text_inputs">
                <input type='text' className="input_top" placeholder="Top text" />
                <input type='text' className="input_bottom" placeholder="Bottom text" />
            </div>
            <button type="submit">Get a new meme image 🖼</button>
        </form>
    )
}

export default Form