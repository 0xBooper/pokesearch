import React, { useState, useRef } from 'react'
import { toast } from 'react-toastify'

// Import FontAwesome stuff
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

// Import components
import Header from "./components/Header.jsx"
import Stats from './components/Stats.jsx'

// Import styles
import "./styles/App.css"
import "react-toastify/dist/ReactToastify.css"

toast.configure() // Initialize Toast

function App() { 
  const [ searched, setSearched] = useState(false)
  const [pokemonStats, setPokemonStats] = useState({})
  const pokemonSearched = useRef()

  async function handleSubmit(e) {
    e.preventDefault()

    const pokeApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearched.current.value.toLowerCase()}`).catch(e => console.error(e))
    
    // If the response returns a 404, tell the user and return
    if (!pokeApiResponse.ok && pokeApiResponse.status === 404)  {
      toast.error("No pokemon found. Check your spelling.", {position: "top-center", autoClose: 3000, limit: 1})

      pokemonSearched.current.value = ""
      setSearched(false)
      return
    }

    if (!pokeApiResponse.ok && pokeApiResponse.status >= 500 && pokeApiResponse.status <= 599) {
      toast.warn("The api this site relies on is not functional. Search for the status of the pokeapi", {
        position: "top-center",
        autoClose: 3000,
        limit: 1
      })

      setSearched(false)
      return
    }

    // If not, then set the pokemonStats state accordingly
    const pokeData = await pokeApiResponse.json() // Json-ify the response
    setPokemonStats({
      front_default_sprite: pokeData.sprites.front_default,
      front_shiny_sprite: pokeData.sprites.front_shiny,
      abilities: pokeData.abilities,
      ingame_height: pokeData.height,
      ingame_weight: pokeData.ingame_weight,
      base_experience: pokeData.base_experience,
      base_hp: pokeData.stats[0].base_stat
    })

    // Then, set the Searched state to true, and render the info
    setSearched(true)
    pokemonSearched.current.value = ""
  }

  return (
    <div className="container">
      <Header />

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="pokemonNameInput" className="form-input-label"></label>
        <input className="form-input" ref={pokemonSearched} type="text" name="pokemonNameInput" aria-required required/>

        <button className="form-submit" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>

      {searched && pokemonStats && <Stats stats={pokemonStats} pokemonName={pokemonSearched.current.value.toLowerCase()}/>}
    </div>
  )
}

export default App
