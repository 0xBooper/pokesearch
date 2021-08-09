import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import "./App.css"

function App() { 
  const [ searched, setSearched] = useState(false)
  const [pokemonStats, setPokemonStats] = useState({})
  const pokemonSearched = useRef()

  async function handleFormSubmit(e) {
    e.preventDefault()

    // Check the pokemonSearched is empty
    if (!pokemonSearched.current.value) alert("Hey, it can't be empty")

    // If the api response isn't ok, tell the user, then return
    const pokeApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearched.current.value.toLowerCase()}`)

    if (!pokeApiResponse.ok) {
      alert("That pokemon doesn't exist! Make sure you spelled it correctly")
      pokemonSearched.current.value = ""
      return
    }

    // If not, then set the pokemonStats state accordingly
    const pokeApiJson = await pokeApiResponse.json() // Json-ify the response
    setPokemonStats({
      front_default_sprite: pokeApiJson.sprites.front_default,
      front_shiny_sprite: pokeApiJson.sprites.front_shiny,
      abilities: pokeApiJson.abilities,
      ingame_height: pokeApiJson.height,
      ingame_weight: pokeApiJson.ingame_weight,
      // TODO: Finish this
    })
  }

  return (
    <div>
      <h1 className="header">Pokesearch | Where you search for pokemon</h1>

      <form onSubmit={handleFormSubmit} className="form">
        <label htmlFor="pokemonNameInput" className="form-input-label">Name of the pokemon: </label>
        <input className="form-input" ref={pokemonSearched} type="text" name="pokemonNameInput" aria-required/>

        <button className="form-submit" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>

      </form>

      { searched && (
        <h1>You searched for: {pokemonSearched.current.value}</h1>
      )}
    </div>
  )
}

export default App
