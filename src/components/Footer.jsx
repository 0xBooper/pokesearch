import React from 'react'

// ? Import Font Awesome icons
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// ? CSS imports
import "../styles/Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <p>Made by <a href="https://0xBooper.github.io" target="_blank">0xBooper | epikbooperia</a>.</p>
            <a href="https://github.com/0xBooper/pokesearch" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
        </div>
    )
}

export default Footer
