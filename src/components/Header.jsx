import React from 'react'

// ? CSS import
import "../styles/Header.css"

const Header = () => {
    return (
        <div className="header">
            <h1>Pokesearch</h1>
            <p>
                Where you can search for pokemon. <br/> Below is a search bar
                where you can search using the name of the pokemon.
            </p>
        </div>
    )
}

export default Header