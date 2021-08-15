import React from 'react'

// ? Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

// ? CSS import
import "../styles/Form.css"

const Form = ({ handleSubmitProp, pokemonSearchedRef }) => {
    return (
        <form className="form" onSubmit={handleSubmitProp}>
            <label htmlFor="pokemonNameInput" className="form-input-label">Pokemon:</label>
            <input className="form-input" ref={pokemonSearchedRef} type="text" name="pokemonNameInput" aria-required required placeholder="e.g Charizard"/> 
            <button className="form-submit" type="submit">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
    )
}

export default Form
