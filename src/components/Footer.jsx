import React from 'react'

// ? Import Font Awesome icons
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// ? CSS imports
import "../styles/Footer.css"

const Footer = ({latestVer}) => {
    return (
        <div className="footer">
            <p>Made by <a href="https://0xBooper.github.io" target="_blank">0xBooper</a>.</p>
            <p>v{latestVer}</p>
            <a href="https://github.com/0xBooper/pokesearch" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
        </div>
    )
}

export default Footer
