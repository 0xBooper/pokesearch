import React from 'react'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div className="footer">
            <p>Made by <a href="https://github.com/0xBooper" target="_blank">0xBooper</a>.</p>
            <a href="https://github.com/0xBooper/pokesearch" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    )
}

export default Footer
