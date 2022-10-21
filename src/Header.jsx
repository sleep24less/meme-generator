import logo from "./assets/TrollFace.png"

function Header() {
    return (
        <header className="header">
            <img src={logo} className='header_logo' alt="troll face logo"></img>
            <h3 className='header_title'>Meme Generator</h3>
            <p className="header_text">React Course - Project 3</p>
        </header>
    )
}

export default Header