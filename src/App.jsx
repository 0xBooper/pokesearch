import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import Header from "./components/Header.jsx"
import Stats from './components/Stats.jsx'
import { toast } from 'react-toastify'
import "./styles/App.css"

function App() { 
  const [ searched, setSearched] = useState(false)
  const [pokemonStats, setPokemonStats] = useState({})
  const pokemonSearched = useRef()

  async function handleSubmit(e) {
    e.preventDefault()

    // Check the pokemonSearched is empty
    if (!pokemonSearched.current.value) alert("Hey, it can't be empty")

    // If the api response isn't ok, tell the user, then return
    const pokeApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearched.current.value.toLowerCase()}`)
    
    if (!pokeApiResponse.ok && pokeApiResponse.status === 404)  {
      /*toast.error('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });*/ 
      // TODO: Fix the toast not rendering
      alert("No pokemon found")

      setTimeout(() => {
        pokemonSearched.current.value = ""
        setSearched(false)
        return
      }, 3000)
    }

    if (!pokeApiResponse.ok && pokeApiResponse.status !== 404) {
      alert("The api this site relies on may not be functional. Please wait a bit. If it doesn't work, check your internet or check the status of the pokeapi")
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
  }

  return (
    <div className="container">
      <Header />

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="pokemonNameInput" className="form-input-label">Name of the pokemon: </label>
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
